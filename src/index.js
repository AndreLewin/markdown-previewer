import React from 'react';
import ReactDOM from 'react-dom';

import marked from 'marked';

import './index.css';
import { Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap';

class Input extends React.Component {
    render() {
        return (
            <FormGroup>
                <label htmlFor="exampleInputEmail1">Markdown input:</label>
                <FormControl onChange={this.props.onChange} componentClass="textarea" id="exampleInputEmail1" className="inputField" placeholder="Write your markdown text here"/>
            </FormGroup>
        );
    }
}

class Output extends React.Component {
    render() {
        return (
            <div>
                <p>Preview:</p>
                <p dangerouslySetInnerHTML={{__html:marked(this.props.markdown)}} />
            </div>
        );
    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            markdown: "I am using __markdown__.",
        };
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({markdown: event.target.value});
    }


    render() {
        return (
            <div>
                <h1 className="title">Markdown previewer</h1>
                <Grid>
                    <Row className="rowFlex">
                        <Col xs={6} className="well colFlex">
                            <Input onChange={(event) => this.handleChange(event)}/>
                        </Col>
                        <Col xs={6} className="well colFlex">
                            <Output markdown={this.state.markdown} />
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