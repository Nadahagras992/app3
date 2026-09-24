import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
      constructor(){
        super();
        console.log("parent constructor call");
      }

    state={
      products:[
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:9 ,price:8000 ,onSale:false},
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:9 ,price:2500 ,onSale:true},
        {id:1 ,name:"toshiba reno 6 ",category:"mobile ",count:19 ,price:3000 ,onSale:false},
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:9 ,price:4000 ,onSale:true},
        {id:1 ,name:"iphone reno 6 ",category:"mobile ",count:29 ,price:8000 ,onSale:true},
        {id:1 ,name:"oppo reno 6 ",category:"mobile ",count:99 ,price:2000 ,onSale:false}
      ]
    }
    x;
    deleteProduct=(productIndex)=>
      {
      let myProducts=[...this.state.products];
      // myProducts=myProducts.filter((product)=>product.id!==productId);
     myProducts.splice(productIndex, 1);
      this.setState({products:myProducts});
      
    }

    updateCount=(productIndex)=>
    { 
    let myProducts=[...this.state.products];
    myProducts[productIndex].count++;
      this.setState({products:myProducts});
    }

    componentDidMount(){
      this.x=setInterval(()=>{
      console.log("hello ....");
      },500)
      console.log("parent componentDidMount call");
    }
    componentDidUpdate(){
      console.log("parent componentDidUpdate call");
    }
    componentWillUnmount(){
      console.log("parent componentWillUnmount call");
      clearInterval(this.x);
    }


  render() {
    console.log("parent render call");
    return <>
    
    <div className='container bg-dark py-2'>
        <div className="row gy-2">
        

        {this.state.products.map((product,index)=><Child key={index} update={this.updateCount} productIndex={index} delete={this.deleteProduct} productInfo={product}/>)}
        <i className='fas fa-spinner'></i>


    </div>


    
    </div>
    </>
}
}
