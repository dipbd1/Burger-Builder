import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Meat", type: "meat" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			{controls.map((ctrl) => {
				return (
					<BuildControl
						key = {ctrl.label}
						type= {ctrl.label}
						added = {()=>props.ingredientAdded(ctrl.type)}
						/>
				);
			})}
		</div>
	);
};

export default buildControls;
