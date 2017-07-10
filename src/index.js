import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
            <Grid>
                <Row>
                    <Col xs={6} className="input">
                        <Input />
                    </Col>
                    <Col xs={6} className="output">
                        <Output />
                    </Col>
                </Row>
            </Grid>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);