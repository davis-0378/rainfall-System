import React, { Component }  from 'react';
import { DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';
import Navbar from "./navbar";
import Panel from './panel';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mode: "light",
            mainColor: "#adb5bd",
            backgroundColor: "#495057",
        }

        this.setMode = this.setMode.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    setMode() {
        if(this.state.mode === "light") {
            this.setState({mode: "dark"});
        }else {
            this.setState({mode: "light"});
        }
    }

    setColor(main, background) {
        console.log(main);
        this.setState({mainColor: main, backgroundColor: background});
        console.log(this.state.mainColor);
    }

    render() {
        return (
            <Container fluid="xs">
                <Row>
                    <Col xs={12} style={{backgroundColor: this.state.mode==="light" ? "white" : this.state.mainColor}}>
                        <Row style={{marginBottom: 40}}>
                            <Col xs={12}>
                                <Navbar theme={this.state} setMode={this.setMode} setColor={this.setColor}></Navbar>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={"auto"}  style={{backgroundColor: this.state.mode==="light" ? this.state.mainColor : this.state.backgroundColor}}>
                                <Panel theme={this.state}></Panel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;