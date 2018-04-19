import React, { Component } from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText, Form, FormText, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../../actions/login'
import './index.scss'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: {
        loginUsername: '',
        loginPassword: ''
      },
      error: {
        loginUsername: null,
        loginPassword: null
      },
      messageloginfailed :''
    }
  }
  checkEmail = (email) => {

    let statusemail = false

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      statusemail = true
    }

    return statusemail
  }

  login = () => {
    let data_login = {}
    let self = this

    let errors = {
      loginUsername: this.state.value.loginUsername.trim().length === 0 ? 'Please Enter Username.' : null,
      loginPassword: this.state.value.loginPassword.trim().length === 0 ? 'Please Enter Password.' : null
    }


    if (this.state.value.loginUsername.trim().length === 0 || this.state.value.loginPassword.trim().length === 0) {
      this.setState({ error: errors }, () => {
      })
      return
    }

    this.setState({ error: {} })


    let checkemail = this.checkEmail(this.state.value.loginUsername)


    if (checkemail) {
      data_login = {
        email: this.state.value.loginUsername,
        password: this.state.value.loginPassword
      }
    } else {
      data_login = {
        username: this.state.value.loginUsername,
        password: this.state.value.loginPassword
      }
    }


    this.props.login(data_login)
  }

  onChang = (e) => {
    this.setState({
      value: {
        ...this.state.value,
        [e.target.name]: e.target.value
      }
    })

  }


  render() {



    const { statusloginfailed } = this.props

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Form onSubmit={e => {
                  e.preventDefault();
                  this.login()
                }}>
                  <Card className="p-4">
                    <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="input-login">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" name="loginUsername" value={this.state.value.loginUsername} onChange={this.onChang} />
                      </InputGroup>
                      <FormText className="text-validate" color="red">{this.state.error.loginUsername}</FormText>
                      <InputGroup className="input-login">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="loginPassword" value={this.state.value.loginPassword} onChange={this.onChang} />
                      </InputGroup>
                      <FormText className="text-validate" color="red">{this.state.error.loginPassword}</FormText>
                      <h5 className="text-validate" color="red">{this.state.error.loginPassword || this.state.error.loginUsername ? '' : (statusloginfailed ? 'Login Faile.' : '')}</h5>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Form>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sararons CMS</h2>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function bindActions(dispatch) {
  return {
    login: (datauserlogin) => dispatch(login(datauserlogin))
  };
}

const mapStateToProps = state => ({
  statusloginfailed: state.login.status_login_failed
});
export default connect(mapStateToProps, bindActions)(Login)
