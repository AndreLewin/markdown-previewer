import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap';

class Input extends React.Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <label htmlFor="exampleInputEmail1">Markdown input:</label>
                    <FormControl componentClass="textarea" id="exampleInputEmail1" className="inputField" placeholder="Write your markdown text here"/>
                </FormGroup>
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
                <p>Preview:</p>
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