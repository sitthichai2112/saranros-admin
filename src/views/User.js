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


const User  = () =>{
   return (
    <div classNameName="animated fadeIn">
      <Row>
        <div className="col-12 d-flex justify-content-center">
          <div className="col-12 col-sm-8 col-md-8 col-lg-6">
            <div className="card">
              <div className="card-header">
              <strong>User</strong><small> Form</small>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="">Frist name</label>
                  <input type="text" placeholder="Enter your frist name" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="">Last name</label>
                  <input type="text" placeholder="Enter your Last name" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="">Email</label>
                  <input type="text" placeholder="Enter your Last Email" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="">Phone number</label>
                  <input type="text" placeholder="Enter your Last Phone number" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="">Username</label>
                  <input type="text" placeholder="Enter your Last Username" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="">Password</label>
                  <input type="text" placeholder="Enter your Last Password" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="">Confirm password</label>
                  <input type="text" placeholder="Enter your Last Confirm password" className="form-control" />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-sm">
                  <i className="fa fa-dot-circle-o"></i> Submit
                </button>
                <button type="reset" className="btn btn-danger btn-sm">
                  <i className="fa fa-ban"></i> Reset
                </button>
              </div>
            </div>
         </div>
       </div>
      </Row>
    </div>

   );
}

export default User;
