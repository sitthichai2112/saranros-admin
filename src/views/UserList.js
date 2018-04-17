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
  InputGroupText,
  Tooltip
} from 'reactstrap';

const UserList  = () =>{
   return (
    <div classNameName="animated fadeIn">
      <Row>
        <div className="col-12 d-flex  justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div className="d-sm-inline-flex d-md-inline-flex d-lg-inline-flex align-items-center mr-2">
                  <div claaName="float-left">
                    <i className="fa fa-list-ul"></i>
                    <span className="pl-2 pr-2">User List</span>
                  </div>
                  <div claaName="float-left">
                    <input type="text" className="form-control" id="inlineFormInputName" placeholder="Search" />
                  </div>
                </div>
                <div className="d-flex align-items-end ">
                <button type="button" className="btn btn-primary">
                    <i className="fa fa-plus-circle"></i>
                    <span className="pl-2">Add</span>
                </button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Frist name</th>
                        <th>Last name</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Yiorgos</td>
                        <td>Avraamu</td>
                        <td>Yiorgos</td>
                        <td>Yiorgos@gmail.com</td>
                        <td>0000000000</td>
                        <td><span className="badge badge-success">User</span></td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white">
                            <i className="fa fa-trash"></i>
                          </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Yiorgos</td>
                        <td>Avraamu</td>
                        <td>Yiorgos</td>
                        <td>Yiorgos@gmail.com</td>
                        <td>0000000000</td>
                        <td><span className="badge badge-warning">Chef</span></td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white">
                            <i className="fa fa-trash"></i>
                          </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Yiorgos</td>
                        <td>Avraamu</td>
                        <td>Yiorgos</td>
                        <td>Yiorgos@gmail.com</td>
                        <td>0000000000</td>
                        <td><span className="badge badge-success">User</span></td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white">
                            <i className="fa fa-trash"></i>
                          </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Yiorgos</td>
                        <td>Avraamu</td>
                        <td>Yiorgos</td>
                        <td>Yiorgos@gmail.com</td>
                        <td>0000000000</td>
                        <td><span className="badge badge-warning">Chef</span></td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white">
                            <i className="fa fa-trash"></i>
                          </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Yiorgos</td>
                        <td>Avraamu</td>
                        <td>Yiorgos</td>
                        <td>Yiorgos@gmail.com</td>
                        <td>0000000000</td>
                        <td><span className="badge badge-success">User</span></td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white">
                            <i className="fa fa-trash"></i>
                          </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Yiorgos</td>
                        <td>Avraamu</td>
                        <td>Yiorgos</td>
                        <td>Yiorgos@gmail.com</td>
                        <td>0000000000</td>
                        <td><span className="badge badge-warning">Chef</span></td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white">
                            <i className="fa fa-trash"></i>
                          </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="pagination">
                  <li className="page-item disabled">
                  <a href="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">Prev</span><span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                  <li className="page-item"><a href="#" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">4</a></li>
                  <li className="page-item"><a href="#" className="page-link" aria-label="Next">
                  <span aria-hidden="true">Next</span><span className="sr-only">Next</span>
                  </a></li>
                </ul>
              </div>
            </div>
         </div>
       </div>
      </Row>
    </div>

   );
}

export default UserList;
