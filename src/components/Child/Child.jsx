import React, { Component } from 'react'

export default class Child extends Component {
    render() {
    let{name,price,id, onSale ,category,count}=this.props.productInfo;
    return <>
    <div className="col-md-3">
        <div className='products bg-white p-2 position-relative'>
            <h4>{}</h4>
            <h5>name:{name}</h5>
            <h5>category:{category}</h5>
            <h5 >price:{price}</h5>
            <h5>count:{count}</h5>
            <h5>id:{id}</h5>
            {onSale?<div className='sale bg-danger p-1 text-white position-absolute top-0 end-0'> sale</div>:''}
            <button className='btn btn-outline-danger btn-sm w-100' onClick={()=>this.props.delete(this.props.productIndex)}>Delete</button>
             <button className='btn btn-outline-info btn-sm w-100' onClick={()=>this.props.update(this.props.productIndex)}> + </button>
        </div>
        </div>
    
    </>
}
}
