import React, { Component } from 'react'

export default class Gallary extends Component {
    state={
        productName:'toshiba c3'
    };
    welcome(){
        return `welcome user`
    }
    render() {
    return <>
        <div className='bg-danger'>{this.state.productName}</div><i className='fas fa-home'></i>
        <h3>{this.welcome()}</h3>
        </>
    
    }
}
