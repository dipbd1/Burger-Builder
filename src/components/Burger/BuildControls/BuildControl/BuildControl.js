import React from 'react';
import classes from './BuildControl.css'

const buildcontrol =(props)=> {
    return(
        <div className= {classes.BuildControl}>
            <div className= {classes.Label}>{props.lebel}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More} onClick= {props.added}>More</button>
        </div>
    )
}

export default buildcontrol;