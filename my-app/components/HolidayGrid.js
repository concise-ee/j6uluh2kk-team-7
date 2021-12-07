import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {stroboIndividual} from "../services/StroboService";

export const HolidayGrid = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col className="flasher" id="bauble1" onClick={() => stroboIndividual("bauble1")}/>
                    <Col className="flasher" id="bauble2" onClick={() => stroboIndividual("bauble2")}/>
                    <Col className="flasher" id="bauble3" onClick={() => stroboIndividual("bauble3")}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="flasher" id="bauble4" onClick={() => stroboIndividual("bauble4")}/>
                    <Col className="flasher" id="bauble5" onClick={() => stroboIndividual("bauble5")}/>
                    <Col className="flasher" id="bauble6" onClick={() => stroboIndividual("bauble6")}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="flasher" id="bauble7" onClick={() => stroboIndividual("bauble7")}/>
                    <Col className="flasher" id="bauble8" onClick={() => stroboIndividual("bauble8")}/>
                    <Col className="flasher" id="bauble9" onClick={() => stroboIndividual("bauble9")}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="flasher" id="bauble10" onClick={() => stroboIndividual("bauble10")}/>
                    <Col className="flasher" id="bauble11" onClick={() => stroboIndividual("bauble11")}/>
                    <Col className="flasher" id="bauble12" onClick={() => stroboIndividual("bauble12")}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="flasher" id="bauble13" onClick={() => stroboIndividual("bauble13")}/>
                    <Col className="flasher" id="bauble14" onClick={() => stroboIndividual("bauble14")}/>
                    <Col className="flasher" id="bauble15" onClick={() => stroboIndividual("bauble15")}/>
                </Row>
            </Container>
        </div>
    )
}