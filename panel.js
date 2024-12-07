import React, { Component }  from 'react';
import { DropdownButton, Dropdown, Container, Row, Col, DropdownDivider, Button } from 'react-bootstrap';
import ShowPanel from './showPanel';
import Map from './map';
import './panel.css'

class Panel extends Component{
    constructor(props) {
        super(props);
        this.state={
            county: "no data",
            town: "",
            oneHour: "no Data",
            oneDay: "no Data",
        }
        this.setPosition = this.setPosition.bind(this);
        this.setDataHour = this.setDataHour.bind(this);
        this.setDataDay = this.setDataDay.bind(this);
    }

    setPosition(county, town) {
        if(town !== "") {
            this.getPrecipitationHour(county, town);
            this.getPrecipitationDay(county, town)
            this.setState({county: county, town: town});
        }else {
            this.setState({county: county, town: town});
        }
        
    }

    setDataHour(oneHour) {
        this.setState({oneHour: oneHour});
    }

    setDataDay(oneDay) {
        this.setState({oneDay: oneDay});
    }

    async getPrecipitationHour(county, town) {
        fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWB-50039BA4-747A-4625-968B-A5EBD9CF74BD&RainfallElement=Past1hr")
        .then(res => res.json())
        .then(
            (result) => {
                const array = result.records.Station;
                for(var i = 0; i < array.length; i++) {
                    if(array[i].GeoInfo.CountyName === county && array[i].GeoInfo.TownName === town){
                        this.setDataHour(array[i].RainfallElement.Past1hr.Precipitation);
                    }
                }
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    async getPrecipitationDay(county, town) {
        fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWB-50039BA4-747A-4625-968B-A5EBD9CF74BD&RainfallElement=Past24hr")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                const array = result.records.Station;
                for(var i = 0; i < array.length; i++) {
                    if(array[i].GeoInfo.CountyName === county && array[i].GeoInfo.TownName === town){
                        this.setDataDay(array[i].RainfallElement.Past24hr.Precipitation);
                    }
                }
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        return (
            <Container fluid="xs" style={{padding: 5}}>
                <Row>
                    <Col xs={"auto"} style={{borderRight: "1px solid white"}}>
                        <Row style={{
                            margin: 10,
                            paddingTop: 5
                            }}>
                            <ShowPanel theme={this.props.theme} data={this.state}></ShowPanel>
                        </Row>
                    </Col>
                    <Col xs={"auto"} style={{
                        padding: 10,
                        width: 800,
                        height: 650,
                        backgroundColor: this.props.theme.backgroundColor
                        }}>
                        <Map theme={this.props.theme} setPosition={this.setPosition}></Map>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Panel;