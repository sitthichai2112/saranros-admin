import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { getlistuser, deleteUser, searchuser } from '../../actions/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showmodalconfirm } from '../../actions/modalconfirm'



class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: {
        username: '',
        mobile: '',
        email: ''
      }
    }
  }
  componentDidMount() {
    this.props.getlistuser()
  }


  deleteuser = (id) => {
    this.props.deleteUser(id, () => {
      this.props.getlistuser()
    })
  }

  showmodalconfirmdeleteuser = (data) => {
    this.props.showmodalconfirm(`Do you want to delete username "${data.username}" ?`, () => {
      this.deleteuser(data)
    }, 'Delete', 'danger')
  }


  changFormatMobile = (mobile) => {

    if (!mobile) {
      return
    }

    let input = mobile.toString();
    // Strip all characters from the input except digits
    input = input.replace(/\D/g, '');

    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0, 10);

    // Based upon the length of the string, we add formatting as necessary
    var size = input.length;
    if (size == 0) {
      input = input;
    } else if (size < 4) {
      input = input;
    } else if (size < 7) {
      input = input.substring(0, 3) + '-' + input.substring(3, 6);
    } else {
      input = input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
    }


    return input
  }

  listuser = () => {

    const { listuser } = this.props
    if (listuser.length === 0) {
      return (
        <tr><th colSpan="5" style={{ textAlign: 'center' }}>Data Not Found.</th></tr>

      )
    }

    return listuser.map((data, index) =>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>{this.changFormatMobile(data.mobile)}</td>
        <td><span className="badge badge-success">User</span></td>
        <td>
          <div className="btn-group" role="group">
            <Link to={`UpdateUser/${data.id}`}>
              <button type="button" className="btn btn-primary text-white">
                <i className="fa fa-edit"></i>
              </button>
            </Link>
            <button type="button" className="btn btn-danger text-white" onClick={() => this.showmodalconfirmdeleteuser(data)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>

    )
  }


  onchangesearchuser = (e) => {

    this.setState({
      search: {
        ...this.state.search,
        [e.target.name]: e.target.value
      }
    })
  }


  onclicksearchuser = () => {
    this.props.searchuser(this.state.search)
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.searchuser(this.state.search)
    }
  }

  render() {
    return (

      <div className="animated fadeIn">
        <Row>
          <div className="col-12 d-flex  justify-content-center">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="d-sm-inline-flex d-md-inline-flex d-lg-inline-flex align-items-center mr-2">
                    <div className="float-left">
                      <i className="fa fa-list-ul"></i>
                      <span className="pl-2 pr-2">User List</span>
                    </div>
                    {/* <div className="float-left">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name='username' value={this.state.search.username} onChange={this.onchangesearchuser} onKeyPress={this._handleKeyPress} />
                        <button className="btn btn-primary" type="button" onClick={() => this.onclicksearchuser()}><i className="fa fa-search"></i></button>
                      </div>
                    </div> */}
                  </div>
                  <div className="d-flex align-items-end ">
                    <Link to='User'>
                      <button type="button" className="btn btn-primary">
                        <i className="fa fa-plus-circle"></i>
                        <span className="pl-2">Add</span>
                      </button>
                    </Link>
                  </div>
                </div>


                <div className="card-body">
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-3 col-form-label">Username</label>
                        <div className="col-9">
                          <input className="form-control" type="text" name="username" value={this.state.search.username} onChange={this.onchangesearchuser} onKeyPress={this._handleKeyPress} />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-3 col-form-label">Mobile</label>
                        <div className="col-9">
                          <input className="form-control" type="text" name="mobile" value={this.state.search.mobile} onChange={this.onchangesearchuser} onKeyPress={this._handleKeyPress} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group row">
                        <label htmlFor="example-text-input" className="col-3 col-form-label">Email</label>
                        <div className="col-9">
                          <input className="form-control" type="text" name="email" value={this.state.search.email} onChange={this.onchangesearchuser} onKeyPress={this._handleKeyPress} />
                        </div>
                      </div>
                    </div>
                  </div>


                  <button type="button" className="btn btn-success btn-lg pull-right" onClick={() => this.onclicksearchuser()}>Search</button>
                </div>



                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Username</th>
                          <th>E-mail</th>
                          <th>Phone</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.listuser()}
                        {/* <tr>
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
                      </tr> */}
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
    )

  }
}




function bindActions(dispatch) {
  return {
    getlistuser: () => dispatch(getlistuser()),
    deleteUser: (id, success) => dispatch(deleteUser(id, success)),
    searchuser: (firstname) => dispatch(searchuser(firstname)),
    showmodalconfirm: (message, confirm, title, color) => dispatch(showmodalconfirm(message, confirm, title, color))
  };
}

const mapStateToProps = state => ({
  listuser: state.user.listuser,
  // token: state.login.token
});
export default connect(mapStateToProps, bindActions)(UserList)