import React from "react";
import  "./Burger.css";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = (props) => {
        let  transformedIngredients =Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i } type={igKey}/>;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[])
    // console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p> Please start adding ingredients</p>;
    }

    return (
        <div className="Burger">
            <BurgerIngredient type ="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type ="bread-bottom"/>
        </div>
    )
}



export default burger;
















// import React from "react";
// import classes from "./Burger.css";
// import BurgerIngredient from "./Burgeringredient/Burgeringredient";

// const burger = (props) => {
//     // const transformedIngredients =Object.keys(igKey => {
//     //     return [...Array(props.ingredient[igKey])].map((_,i)=>{
//     //        return <BurgerIngredient key={igKey + i } type={igKey}/>;
//     //     });
//     // })
//     // // console.log(transformedIngredients);

//     const transformedIngredients =Object.keys(props.ingredients).map(igKey =>{
//         return [...Array(props.ingredients[igKey])].map((_,i)=>{
//             return <BurgerIngredient key={igKey + i } type={igKey}/>;
//         })
//         })
//         console.log(transformedIngredients);
//   return (
//     <div className={classes.Burger}>    
//       <BurgerIngredient type="bread-top" />
//       {transformedIngredients}             
//       {/* <BurgerIngredient type="bacon" />
//        <BurgerIngredient type="meat" /> */}
//       <BurgerIngredient type="bread-bottom" />
//     </div>
//   );
// };

// export default burger;

