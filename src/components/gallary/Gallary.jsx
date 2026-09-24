import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default class Gallary extends Component {
    state = {
        count: 0 
    }
    changeCount = () => {
        this.setState({count:Math.random()})
    };
    render() {
    return <>
    <div className="row">
    <div className="col-md-6"> 
            <ul>
                <li>
                    <Link to="/gallary/web">Web</Link>
            
                </li>
                <li>
                    <Link to="/gallary/mobile">Mobile</Link>
                </li>
            </ul>
        </div>
        <div className="col-md-10">
            <Outlet></Outlet>
        </div>
        
        </div>
     
        
    {/* <h4>Count: {this.state.count}</h4>
    <h2>Gallary component</h2>
    <button className='btn btn-outline-info my-2 w-100' onClick={this.changeCount}>Change Count</button> */}
        </>
    
    }
}
