import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleproductes from '../sample-products';
import Product from './Product';
import base from '../base';

class App extends React.Component{
    constructor(){
        super();
        this.addproduct=this.addproduct.bind(this);
        this.loadSamples=this.loadSamples.bind(this);
        this.addToOrder=this.addToOrder.bind(this);
        this.removeFromOrder=this.removeFromOrder.bind(this);
        this.updateProduct=this.updateProduct.bind(this);
        this.removeproduct=this.removeproduct.bind(this);
        //getinitialstate
        this.state={
            productes:{},
            order:{}
        };
    }
    componentWillMount(){
        //this runs rigth before the app is render
      this.ref=base.syncState(`${this.props.params.storeId}/productes`,{
          context:this,
          state:'productes'
      });
      //check if there any order in the localStorage
      const localStorageRef =localStorage.getItem(`order-${this.props.params.storeId}`);
      if(localStorageRef){
          //update your App order state
           this.setState({
               order:JSON.parse(localStorageRef)
           });
      }
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem(`order-${this.props.params.storeId}`,
        JSON.stringify(nextState.order));
    }
    addproduct(product){
        //updatestate
        const productes={...this.state.productes};
        //add in new product
        const timestamp=Date.now();
        productes[`product-${timestamp}`]=product;

        //setstate
        this.setState({productes})
    }
    updateProduct(key,updatedproduct){
        const productes={...this.state.productes}
        productes[key]=updatedproduct;
        this.setState({productes});
    }

    removeproduct(key){
        const productes={...this.state.productes}

        productes[key]=null;
        this.setState({productes});

    }
    loadSamples(){
        this.setState({productes:sampleproductes});

    }
    addToOrder(key){
        //take a copy of state
        const order={...this.state.order};
        //update of add a new number of product ordered
        order[key]=order[key]+1 || 1;
        //update state
        this.setState({order:order})
    }
    removeFromOrder(key){
        const order={...this.state.order};
         delete order[key];
         this.setState({order});


    }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-productes">
                        {Object
                            .keys(this.state.productes)
                            .map(key=><Product key={key} index={key} details={this.state.productes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order
                    productes={this.state.productes}
                    order={this.state.order}
                    params={this.props.params}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addproduct={this.addproduct}
                    loadSamples={this.loadSamples}
                    productes={this.state.productes}
                    updateProduct={this.updateProduct}
                    removeproduct={this.removeproduct}
                />
            </div>
        )
    }
}
export default App;
