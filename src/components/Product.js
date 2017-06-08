import React from 'react';
import {formatPrice} from '../helpers';

class Product extends React.Component{
    render(){
        const details=this.props.details;
        const isAvailable=details.status==='available';
        const buttonText=isAvailable? 'Add To Order' :'Sold Out';
        return(
            <li className="menu-product">

                <img src={details.image} alt={details.name}/>
                <h3 className="product-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick={()=>this.props.addToOrder(this.props.index)}disabled={!isAvailable}>{buttonText}</button>

            </li>
        )

    }
}

export default Product;
