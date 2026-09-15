import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state={
      products:[
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:9 ,price:8000 ,onSale:false},
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:9 ,price:8000 ,onSale:false},
        {id:1 ,name:"toshiba reno 6 ",category:"mobile ",count:19 ,price:8000 ,onSale:false},
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:9 ,price:8000 ,onSale:false},
        {id:1 ,name:"iphone reno 6 ",category:"mobile ",count:29 ,price:8000 ,onSale:false},
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:99 ,price:8000 ,onSale:false}
      ]
    }
   
  render() {
    return <>
    
    <div className='container bg-dark py-2'>
        <div className="row gy-2">
        {/* <Child productInfo={this.state.products[0]}/>
        <Child productInfo={this.state.products[1]}/>
        <Child productInfo={this.state.products[2]}/>
        <Child productInfo={this.state.products[3]}/>
        <Child productInfo={this.state.products[4]}/>
        <Child productInfo={this.state.products[5]}/> */}

        {this.state.products.map((product)=><child productInfo={product}/>)}


    </div>


    
    </div>
    </>
}
}
