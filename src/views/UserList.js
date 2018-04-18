import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { getlistuser, deleteUser, searchuser } from '../actions/user'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showmodalconfirm } from '../actions/modalconfirm'



class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: {
        firstname: ''
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
      this.deleteuser(data.id)
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
    return listuser.map((data, index) =>
      <tr key={index}>
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
    this.props.searchuser(this.state.search.firstname)
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.searchuser(this.state.search.firstname)
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
                    <div className="float-left">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <button className="btn btn-primary" type="button"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
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
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
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