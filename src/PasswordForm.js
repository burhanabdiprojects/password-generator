import DropdownItem from "@restart/ui/esm/DropdownItem"
import {Container, Form, Button, Dropdown} from "react-bootstrap"

function passwordForm({handleSubmit}) {
    
    return    <Container className="mt-3">
   
            <Form onSubmit={handleSubmit}>

            <Form.Group>
                    <Form.Label>Choose Password Length (Characters)</Form.Label>
                    <Form.Check name="length" label="18" type="radio" value="18" className="sspace_right" defaultChecked/>
                    <Form.Check name="length" label="26" type="radio" value="26" className="sspace_right" />
                    <Form.Check name="length" label="34" type="radio" value="34" className="sspace_right"/>
                    <Form.Check name="length" label="45" type="radio" value="45" className="sspace_right"/>
                    <Form.Check name="length" label="50" type="radio" value="50" />
            </Form.Group>
        

                <Form.Group class="formSection">
                    <Form.Label className="label">Include Symbols?</Form.Label>
                    <Form.Check name="symbol" label="Yes" type="radio" value="yes" className="sspace_right" defaultChecked/>
                    <Form.Check name="symbol" label="No" type="radio" value="no" />
                </Form.Group>

                <Form.Group class="formSection">
                    <Form.Label className="label">Include Numbers?</Form.Label>
                    <Form.Check name="number" label="Yes" type="radio" value="yes" className="sspace_right" defaultChecked/>
                    <Form.Check name="number" label="No" type="radio" value="no"/>
                </Form.Group>

                <Form.Group class="formSection">
                    <Form.Label className="label">Include Lower Case Letters?</Form.Label>
                    <Form.Check name="lowercase" label="Yes" type="radio" value="yes" className="sspace_right" defaultChecked/>
                    <Form.Check name="lowercase" label="No" type="radio" value="no"/>
                </Form.Group>

                <Form.Group class="formSection">
                    <Form.Label className="label">Include Upper Case Letters?</Form.Label>
                    <Form.Check name="uppercase" label="Yes" type="radio" value="yes" className="sspace_right" defaultChecked/>
                    <Form.Check name="uppercase" label="No" type="radio" value="no"/>
                </Form.Group>

                <Button type="submit" className="bspace_top_bottom">Generate Password</Button>
            </Form>
        </Container>
    
}

export default passwordForm
