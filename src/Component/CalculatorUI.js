import React from "react";
import classes from './CalculatorUI.module.css';
import CalcDisp from './CalcDisp';
import CalcButtons from './CalcButtons';

const calculator = (props) => {
    return (
        <div className={classes.CalcUI}>
            <CalcDisp
                ansFlag={props.ansFlag}
                ans={props.ans}
                crrInput={props.crrInput} />

            <CalcButtons onAns={props.onAns}
                         onClear={props.onClear}
                         addToInput={props.addToInput} />
        </div>
    );
};

export default calculator;