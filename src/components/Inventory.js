import React from 'react';
import AddProdForm from './AddProdForm';

class Inventory extends React.Component{
    constructor(){
        super();
            this.renderInventory=this.renderInventory.bind(this);
            this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e,key){
        const product=this.props.productes;
        /// take a copy of the product and update
        const updatedproduct={
                            ...product,
                            [e.target.name]:e.target.value
                          }
        this.props.updateProduct(key,updatedproduct);
    }
    renderInventory(key){
        const product=this.props.productes[key];
        return(
            <div className="product-edit" key={key}>
                <input type="text" name="name" value={product.name}placeholder="product Name"
                    onChange={(e)=>this.handleChange(e,key)}
                />
                <input type="text" name="price" value={product.price}placeholder="product Price"onChange={(e)=>this.handleChange(e,key)}/>
                <select type="text" name="status" value={product.status} placeholder="product Status"onChange={(e)=>this.handleChange(e,key)} >
                    <option value="available">Fresh</option>
                     <option value="unavailable">Sold Out</option>
                </select>
                <textarea type="text" name="desc" value={product.desc}placeholder="product Desc"onChange={(e)=>this.handleChange(e,key)}/>
                <input type="text" name="image" value={product.image}placeholder="product Image"onChange={(e)=>this.handleChange(e,key)}/>
                <button onClick={()=>this.props.removeproduct(key)}>Remove product</button>
            </div>
        )

    }
    render(){
        return(
            <div>
                <p>Inventory</p>
                {Object.keys(this.props.productes).map(this.renderInventory)}
                <AddProdForm addproduct={this.props.addproduct}/>
                <button onClick={this.props.loadSamples}>Load Samples</button>
            </div>

        )
    }
}

export default Inventory;
