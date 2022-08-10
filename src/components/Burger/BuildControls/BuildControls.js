import React from "react";
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


const buildControls = (props)=>{
    return (
        <div className="BuildControls">
            <p>Current Price:-<strong>{props.price}</strong></p>
            {controls.map(ctrl=>(<BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    added={()=>props.ingredientAdded(ctrl.type)}
                    removed={()=>props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
        <button className="OrderButton"
            disabled={!props.purchasable}
            >ORDER NOW</button>		

        </div>
    )
}
export default buildControls;