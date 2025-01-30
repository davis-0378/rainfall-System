import React, { useState }  from 'react';
import { DropdownButton, Dropdown, Container, Row, Col, DropdownDivider, Button } from 'react-bootstrap';

function ShowPanel(props) {
    return (
        <Container fluid="xs" style={{
            backgroundColor: props.theme.mode==="light" ? props.theme.mainColor : props.theme.backgroundColor,
            padding: 0
            }}>
            <Row>
                <Col xs={"auto"} style={{
                    marginBottom: 10,
                }}>
                    <h4 style={{color: props.theme.mode==="light" ? "black" : "white"}}>{props.data.county + props.data.town}</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={"auto"}>
                    <h5 style={{color: props.theme.mode==="light" ? "black" : props.theme.mainColor}}>1小時累積降雨 : </h5>
                    <p style={{color: props.theme.mode==="light" ? "black" : "white"}}>{props.data.oneHour}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={"auto"}>
                    <h5 style={{color: props.theme.mode==="light" ? "black" : props.theme.mainColor}}>本日累積降雨 : </h5>
                    <p style={{color: props.theme.mode==="light" ? "black" : "white"}}>{props.data.oneDay}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ShowPanel;