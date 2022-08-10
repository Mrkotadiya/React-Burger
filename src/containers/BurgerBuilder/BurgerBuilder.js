import React, { Component } from "react";
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger'
// import BuildControls from '../../components/Burger/BulidControls/BulidControls';
import BulidControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE ={
    salad:0.5,
    cheese :0.4,
    meat:1.3,
    bacon : 0.8
}

class BurgerBuilder extends Component{
state= {
    ingredients :{
        salad:0,
        bacon:0 ,
        cheese:0,
        meat:0
    },
    totalPrice:4,
    purchasable:false

}
updatePurchaseState(){
    const ingredients={
        ...this.state.ingredients
    };
    const sum = Object.keys(ingredients).map(igKey=>{
        return ingredients[igKey];
    }).reduce((sum ,el)=>{
        return sum+el;
    },0);
    this.setState({purchasable:sum>0}); 
}

    addIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount +1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCounted;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updateIngredients});
        this.updatePurchaseState();
    }
    
    removeIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updateCounted = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCounted;
        const priceDeducion = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeducion;
        this.setState({totalPrice:newPrice,ingredients:updateIngredients});
        this.updatePurchaseState();
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Aux>
                <Burger ingredients ={this.state.ingredients}/>
                <BulidControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;