import {Container, Row, Col} from "react-bootstrap"

function generatedPassword({password}) {
    return (
        <Container className="mt-3">
            
            <Row>
                <Col>Your New Password is...</Col>
            </Row>

            <Row>
                <Col><h4 className="mt-3 pw">{password}</h4></Col>
            </Row>
        </Container>
    )
}

export default generatedPassword
