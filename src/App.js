import React, {Component} from 'react';
import classes from './App.module.css';
import CalculatorUI from './Component/CalculatorUI';
import * as math from 'mathjs';

class App extends Component{
    state = {
        input: "",
        ans: "",
        ansFlag: false
    };

    onClearHandler = () => {
        this.setState({input: "", ans: "", ansFlag: false});
    }

    onAddToInputHandler = (e) => {
        let updatedInput = this.state.input;
        updatedInput += e.target.value;
        this.setState({input: updatedInput, ansFlag: false});
    }

    onAnsHandler = () => {
        const ans = math.evaluate(this.state.input);
        this.setState({input: ans, ans: ans, ansFlag: true});
    }

    render() {
        return (
            <div className={classes.App}>
                <h1>Calculator</h1>
                <CalculatorUI
                    ans={this.state.ans}
                    ansFlag={this.state.ansFlag}
                    crrInput={this.state.input}
                    onAns={this.onAnsHandler}
                    addToInput={this.onAddToInputHandler}
                    onClear={this.onClearHandler}
                />
            </div>
        );
    }
}

export default App;
