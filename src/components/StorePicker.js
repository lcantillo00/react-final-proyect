import React from 'react';


class StorePicker extends React.Component{

    goToStore(event){
        event.preventDefault();
        const storeId=this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);

    }
    render(){
        return (
            <form className="store-selector" onSubmit={(e)=>this.goToStore(e)}>
                <h2>Are you ready to buy  Awsome Products</h2>
                <input type="text" required placeholder="Store Name"  ref={(input)=>{this.storeInput = input}}/>
                <button type='submit'>Visit Store</button>
            </form>
        )
    }
}
///para crear el router
StorePicker.contextTypes={
    router:React.PropTypes.object
}
export default StorePicker;
