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

class Tag  extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
render() {
   return (
    <div className="animated fadeIn">
      <Row>
      <div className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 pL-5">
          <div className="form-group mb-2 w-100">
            <div className="input-group align-items-center w-100">
                <span className="pr-2">Tag name</span>
                <div className="tag-search-wrap">
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">option1</a>
                      <a className="dropdown-item" href="#">option2</a>
                      <a className="dropdown-item" href="#">option3</a>
                      <a className="dropdown-item" href="#">option4</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 pL-5">
           <div className="form-group row">
            <div className="input-group align-items-center">
                <span className="pr-2">Is recommend</span>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                </div>
              </div>
          </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 d-flex justify-content-center pb-4">
          <button type="button" className="btn btn-success">
              <i className="fa fa-search"></i>
              <span className="pl-2">Search</span>
          </button>
      </div>
        <div className="col-12 d-flex  justify-content-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-10">
            <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="d-sm-inline-flex d-md-inline-flex d-lg-inline-flex align-items-center mr-2">
                <div claaName="float-left">
                  <i className="fa fa-tag"></i>
                  <span className="pl-2 pr-2">Tag</span>
                </div>
              </div>
              <div className="d-flex align-items-end ">
              <button type="button" className="btn btn-success">
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
                        <th>No.</th>
                        <th>Tag name</th>
                        <th>Is recommend</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Thai Food</td>
                        <td>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        </div>
                        </td>
                        <td>
                          <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary text-white" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-edit"></i>
                          </button>
                          <button type="button" className="btn btn-danger text-white" data-toggle="modal" data-target="#delete">
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

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title" id="exampleModalLabel">Edit tag</h5>
                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form className="form-inline">
                <div className="form-group mb-2 col-12">
                  <label>Tag name</label>
                  <input  className="form-control mx-sm-5 mx-md-5 mx-lg-5" />
                </div>
                <div className="form-group col-12">
                  <label>Is recommend</label>
                  <input className="form-check-input is-invalid mx-4" type="checkbox" value="" id="invalidCheck3" required />
                </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="delete" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-danger">
                <h5 className="modal-title" id="delete">Delete</h5>
                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>

      </Row>
    </div>

   );
 }
}

export default Tag;
