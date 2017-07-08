import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Input extends React.Component {
    render() {
        return (
            <div>
                <p>This is the Input part</p>
                <p>Type something</p>
            </div>
        );
    }
}

class Output extends React.Component {
    constructor() {
        super();
        this.state = {
            result: "This is the result",
        };
    }


    render() {
        return (
            <div>
                <p>{this.state.result}</p>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Input />
                </div>
                <div>
                    <Output />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);