import React from "react";
import classes from './CalcDisp.module.css';

const calcDisp = (props) => {
    return (
        <div className={classes.CalcDisp}>
            {props.ansFlag ? props.ans : props.crrInput}
            <hr/>
        </div>
    );
};

export default calcDisp;