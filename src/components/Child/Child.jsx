import React, { Component } from 'react'

export default class Child extends Component {
    render() {
    let{name,price,id, onSale ,category,count}=this.props.productInfo;
    return <>
    <div className='col-md-3'>
        <div className='products bg-white p-2'>
            <h5>name:{name}</h5>
            <h5>category:{category}</h5>
            <h5>price:{price}</h5>
            <h5>count:{count}</h5>
            <h5>id:{id}</h5>

        </div>
        

    </div>
    
    </>
}
}
