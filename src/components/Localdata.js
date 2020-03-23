import React, { Component } from 'react';
// import ReactTable from 'react-table'
import './loginStyle.css';

let storId = 0;

class Localdata extends Component {

    constructor(props) {
        super(props);
        this.onChangeEvent = this.onChangeEvent.bind(this);

        this.state = {
            teachersData: [],
            currentData: { id: '', name: '', email: '', pass: '' }
           // teachData: teachersData.teachList,
        }
    }

    onChangeEvent(e) {
        var stateCopy = Object.assign({}, this.state.currentData);
        console.log(stateCopy)
        stateCopy[e.target.name] = e.target.value;
        this.setState({ currentData: stateCopy })
    }

    findSelectedClass = (event) => { 
        storId = event.target.value;
        let filterDropdown = this.state.teachersData.filter(function (result) {
            if (result.id.indexOf(storId) !== -1) {
                return result
            }
            return null
        })

        console.log('aaa', filterDropdown)

        // this.setState({
        //     displayTable: filterDropdown
        // })

        // if (event.target.value === 'NA') {
        //     this.setState({
        //         teachData: teachersData.teachList
        //     })
        // }
        // else {
            // this.setState({
            //     teachData: filterDropdown
            // })
        // }

        // for(var k=0;k<filterDropdown.length;k++)
        // {
        //    this.setState({
        //         secValues: secId[k]
        //    })
        //    //console.log(this.state.secValues)
        // }        
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState(state => {
            const teachersData = [...state.teachersData, state.currentData];

            return {
                teachersData,
                currentData: this.state.currentData,
            };
        });
       // console.log(this.state.teachersData)
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('data'))

        if (data !== null) {
            this.setState({
                teachersData: data.teachersData,
                currentData: data.teachersData[0]
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('data', JSON.stringify(nextState))
    }

    render() {
        return (
            <div>

                <div>
                    <h2>Teachers Details</h2>
                </div>

               <div className='displayData'>
                    <div className='container w-25 flex'>
                        <label>Class</label>
                        <select onChange={this.findSelectedClass} id='select-class'>
                            <option value='NA'>--select class--</option>
                            <option>C1</option>
                            <option>C2</option>
                            <option>C3</option>
                        </select>
                    </div>
                    <div className='container w-25 flex'>
                        <label>Section</label>
                        <select id='select-section'>
                            <option value='NA'>--select section--</option>
                        </select>
                    </div>
                </div>

                <div className='displayData'>
                    <div className='container w-50 flex'>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label>Id</label>
                                <input type='text' className='form-control' name="id" value={this.state.id} onChange={this.onChangeEvent}></input>
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text' className='form-control' name="name" value={this.state.name} onChange={this.onChangeEvent}></input>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='text' className='form-control' name="email" value={this.state.email} onChange={this.onChangeEvent}></input>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='text' className='form-control' name="pass" value={this.state.pass} onChange={this.onChangeEvent}></input>
                            </div>
                            <button className='btn btn-primary'>Create</button>
                        </form>
                    </div>

                    <div className='container w-50 flex'>
                        <h2>Teachers Data</h2>
                        {/* <table border='1'>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Password</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                                {this.state.teachersData.map(teachCol =>
                                    <tr key={teachCol.id}>
                                        <td>{teachCol.id}</td>
                                        <td>{teachCol.name}</td>
                                        <td>{teachCol.email}</td>
                                        <td>{teachCol.pass}</td>
                                    </tr>)}
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Localdata