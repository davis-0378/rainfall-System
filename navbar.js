import React, { useState, Component }  from 'react';
import { DropdownButton, Dropdown, Container, Row, Col, Button } from 'react-bootstrap';

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    Button() {
        if(this.props.theme.mode === "light") {
            return (
                <Button variant="outline-dark" onClick={()=>{this.changeMode()}} style={{width: 70}}>Day</Button>
            )
        }else {
            return (
                <Button variant="outline-light" onClick={()=>{this.changeMode()}} style={{width: 70}}>Night</Button>
            )
        }
    }

    changeMode() {
        this.props.setMode();
    }

    changeColor(main, background) {
        this.props.setColor(main, background);
        console.log("set from navbar")
    }

    render() {
        return (
            <Container fluid="xs" style={{
                padding: 5,
                backgroundColor: this.props.theme.mode==="light" ? this.props.theme.mainColor : this.props.theme.backgroundColor
                }}>
                <Row >
                    <Col xs={"auto"}>
                        <div 
                        style={{
                            padding: 10,
                        }}>
                            <h5 style={{
                                color: "white",
                                margin: 0
                                }}>Rainfall System</h5>
                        </div>
                    </Col>
                    <Col style={{
                                paddingTop: 2.5,
                                textAlign: "right"
                            }}>
                        {this.Button()}
                    </Col>
                    <Col xs={"auto"}>
                        <DropdownButton
                            id="setting-button"
                            variant="secondary"
                            title="Setting"
                            className="Setting"
                            data-bs-theme={this.props.theme.mode}
                            style={{
                                paddingTop: 2.5
                            }}
                        >
                            <Dropdown.Item>LOGIN</Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item onClick={()=>{this.changeColor("#adb5bd","#495057");}}>
                                <Row>
                                    <Col xs={"auto"}>
                                        <p style={{margin: 0}}>Gray</p>
                                    </Col>
                                    <Col style={{textAlign: "end"}}>
                                        <Button 
                                            size='lg' 
                                            style={{
                                                backgroundColor: "#adb5bd",
                                                borderColor: "#495057"
                                            }} 
                                            disabled
                                            ></Button>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item  onClick={()=>{this.changeColor("#ffcd39","#664d03");}}>
                                <Row>
                                    <Col xs={"auto"}>
                                        <p style={{margin: 0}}>Yellow</p>
                                    </Col>
                                    <Col style={{textAlign: "end"}}>
                                        <Button 
                                            size='lg' 
                                            style={{
                                                backgroundColor: "#ffcd39",
                                                borderColor: "#664d03"
                                            }} 
                                            disabled
                                            ></Button>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item  onClick={()=>{this.changeColor("#479f76","#0f5132");}}>
                                <Row>
                                    <Col xs={"auto"}>
                                        <p style={{margin: 0}}>Green</p>
                                    </Col>
                                    <Col style={{textAlign: "end"}}>
                                        <Button 
                                            size='lg' 
                                            style={{
                                                backgroundColor: "#479f76",
                                                borderColor: "#0f5132"
                                            }} 
                                            disabled
                                            ></Button>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item  onClick={()=>{this.changeColor("#e685b5","#ab296a");}}>
                                <Row>
                                    <Col xs={"auto"}>
                                        <p style={{margin: 0}}>Pink</p>
                                    </Col>
                                    <Col style={{textAlign: "end"}}>
                                        <Button 
                                            size='lg' 
                                            style={{
                                                backgroundColor: "#e685b5",
                                                borderColor: "#ab296a"
                                            }} 
                                            disabled
                                            ></Button>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item  onClick={()=>{this.changeColor("#3d8bfd","#052c65");}}>
                                <Row>
                                    <Col xs={"auto"}>
                                        <p style={{margin: 0}}>Blue</p>
                                    </Col>
                                    <Col style={{textAlign: "end"}}>
                                        <Button 
                                            size='lg' 
                                            style={{
                                                backgroundColor: "#3d8bfd",
                                                borderColor: "#052c65"
                                            }} 
                                            disabled
                                            ></Button>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item  onClick={()=>{this.changeColor("#e35d6a","#58151c");}}>
                                <Row>
                                    <Col xs={"auto"}>
                                        <p style={{margin: 0}}>Red</p>
                                    </Col>
                                    <Col style={{textAlign: "end"}}>
                                        <Button 
                                            size='lg' 
                                            style={{
                                                backgroundColor: "#e35d6a",
                                                borderColor: "#58151c"
                                            }} 
                                            disabled
                                            ></Button>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Navbar;