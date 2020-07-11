import React from "react";
import classes from './CalcButtons.module.css';

const calcButtons = (props) => {
    return (
        <div className={classes.CalcButtons}>
            <table>
                <tbody>
                <tr>
                    <td colSpan={3} onClick={props.onClear}><button>CLEAR</button></td>
                    <td><button onClick={props.onAns}>=</button></td>
                </tr>

                <tr>
                    <td><button className={classes.btnNumbers} value={"7"} onClick={props.addToInput}>7</button></td>
                    <td><button className={classes.btnNumbers} value={"8"} onClick={props.addToInput}>8</button></td>
                    <td><button className={classes.btnNumbers} value={"9"} onClick={props.addToInput}>9</button></td>
                    <td><button onClick={props.addToInput} value={"/"}>/</button></td>
                </tr>

                <tr>
                    <td><button className={classes.btnNumbers} value={"4"} onClick={props.addToInput}>4</button></td>
                    <td><button className={classes.btnNumbers} value={"5"} onClick={props.addToInput}>5</button></td>
                    <td><button className={classes.btnNumbers} value={"6"} onClick={props.addToInput}>6</button></td>
                    <td><button onClick={props.addToInput} value={"*"}>X</button></td>
                </tr>

                <tr>
                    <td><button className={classes.btnNumbers} value={"1"} onClick={props.addToInput}>1</button></td>
                    <td><button className={classes.btnNumbers} value={"2"} onClick={props.addToInput}>2</button></td>
                    <td><button className={classes.btnNumbers} value={"3"} onClick={props.addToInput}>3</button></td>
                    <td><button onClick={props.addToInput} value={"-"}>-</button></td>
                </tr>

                <tr>
                    <td><button onClick={props.addToInput} value={"%"} >%</button></td>
                    <td><button className={classes.btnNumbers} onClick={props.addToInput} value={"0"}>0</button></td>
                    <td><button onClick={props.addToInput} value={"."}>.</button></td>
                    <td><button onClick={props.addToInput} value={"+"}>+</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default calcButtons;