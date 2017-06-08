import React from 'react';

class AddProdForm extends React.Component{
    createproduct(event){
        event.preventDefault();
        console.log("gonna add some product");
        const product={
            name:this.name.value,
            price:this.price.value,
            status:this.status.value,
            desc:this.desc.value,
            image:this.image.value,
        }
      this.props.addproduct(product);
      this.productForm.reset();
    }
    render(){
        return(
            <form ref={(input)=>this.productForm=input}className="product-edit" onSubmit={(e)=>this.createproduct(e)}>
                <input ref={(input)=>this.name=input} type="text" placeholder="product Name"/>
                <input ref={(input)=>this.price=input} type="text" placeholder="product Price"/>
                <select ref={(input)=>this.status}>
                    <option value="available">Fresh</option>
                     <option value="unavailable">Sold Out</option>
                </select>
                <textarea ref={(input)=>this.desc=input} type="text" placeholder="product Desc"></textarea>
                <input ref={(input)=>this.image=input} type="text" placeholder="product Image"></input>
                <button type="submit">+Add Item</button>

            </form>
        )
    }
}

export default AddProdForm;
