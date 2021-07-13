import axios from 'axios';
import React from 'react';

class Product extends React.Component{
    state={
        products:[],
        selectedProducts :[] //array of ids
    }
    componentDidMount= async()=>{
        const headers = {
            'Content-Type': 'text/plain'
        };
       const result = await axios.get('http://localhost:3000/products',{headers})
       if(result && result.status === 200){
        this.setState({
            products:result.products
        })
       }
    }

    addProductHandler = (product)=>{
        let selectedProducts = [...this.state.selectedProducts,product.id]
         this.setState({
             selectedProducts
         })
    }

    removeProductHandler = (product)=>{
        var updatedProducts = this.state.products.filter((productId)=>{
            return productId!= product.id
        })
        this.setState({
            selectedProducts:updatedProducts
        })
    }

    render(){

        const prroductList = this.state.products.map((product)=>{
            return (
                <div>
                    <h1>ProducT Name := {product.name}</h1>
                    <h2>Proce := {product.price} Including GST</h2>
                    <button onClick = {addProductHandler(product)}>Add</button>
                    <button onClick = {removeProductHandler}>Remove</button>
                </div>
            )
        })
        return (
           <div>
               Choose your favourite Products
               {productList}
           </div>
        )
    }
}

export default Product
