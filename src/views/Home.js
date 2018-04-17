import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';


const Home  = () =>{
   return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6">
        
          <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Enter your name" required/>
          </FormGroup>
         
        </Col>
      </Row>
    </div>

   );
}

export default Home;