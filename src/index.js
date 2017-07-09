import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
            <MuiThemeProvider>
                <div>
                    <RaisedButton label="default"/>
                    <div>
                        <TextField
                            hintText="Input Field"
                        />
                        <Input />
                    </div>
                    <div>
                        <TextField
                            hintText="Output Field"
                        />
                        <Output />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);