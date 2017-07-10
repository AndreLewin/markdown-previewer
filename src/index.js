import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap';

class Input extends React.Component {
    render() {
        return (
            <FormGroup>
                <label htmlFor="exampleInputEmail1">Markdown input:</label>
                <FormControl componentClass="textarea" id="exampleInputEmail1" className="inputField" placeholder="Write your markdown text here"/>
            </FormGroup>
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
            <div>
                <h1 className="title">Markdown previewer</h1>
                <Grid>
                    <Row className="rowFlex">
                        <Col xs={6} className="well colFlex">
                            <Input />
                        </Col>
                        <Col xs={6} className="well colFlex">
                            <Output />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);