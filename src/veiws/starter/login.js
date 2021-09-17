import react from 'react';
import { connect } from "react-redux"; 
import { loginUser } from '../../Redux/auth/actions';
import {
    Container,
    Card,
    Button,
    Row,
    Col,
    Input,
    Label,
    CardHeader
} from 'reactstrap';
//const history = useHistory();
const ContainerStyle={fontSize:'20px',display: 'flex',verticalAlign:'center',alignItems: 'center',justifyContent: 'center' ,marginTop:'10%'}
const CardStyles={width:'40%'}
class Login extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            isAuth:false,
            email:"",
            password:"",
        }
    }
    onPasswordChange=(e)=>{
        this.setState({
            password:e.target.value
        });
    }
    onEmailchange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    onSignupClick=()=>{

    }
    onLoginClick=()=>{
        let user = {
            username: this.state.email,
            password: this.state.password
          };
        this.props.loginUser(user,this.props.history);
        
    }
    

    render()
    {
        return(
            <Container fluid style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'#000000'}} >
                <div style={ContainerStyle}>
                    
                    <Card style={CardStyles}>
                    <CardHeader>
                        
                            <h1 style={{display:'flex',justifyContent:'center'}}>User Login</h1>
                        
                    </CardHeader>    
                    <br/>
                        <Row>
                           <Col >
                            <Label style={{display:'flex',justifyContent:'center',textDecoration:'underline',fontStyle:'italic'}}>
                                Username
                            </Label>
                            </Col> 
                            
                        </Row>
                        <Row>
                            
                            <Col style={{marginLeft:'2%'}}>
                                <Input style={{width:'98%'}} placeholder="Enter Username" type="email"
                                onChange={this.onEmailchange}></Input>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                           <Col >
                            <Label style={{display:'flex',justifyContent:'center',textDecoration:'underline',fontStyle:'italic'}}>
                                Password
                            </Label>
                            </Col> 
                            
                        </Row>
                        <Row>
                            
                            <Col style={{marginLeft:'2%'}}>
                                <Input style={{width:'98%'}} placeholder="Enter Password" type="Password"
                                onChange={this.onPasswordChange}></Input>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                        <Col style={{marginLeft:'2%'}}>
                                <Button style={{width:'98%'}}
                                onClick={this.onLoginClick} >Login</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col style={{marginLeft:'2%'}}>
                                <Label style={{fontStyle:'italic'}} onClick={this.onSignupClick}>
                                    Not a member ? SignUp
                                </Label>
                            </Col>
                        </Row>
                        <br/>
                    </Card>
        </div>
            </Container>
        )
    }
}
const mapStateToProps = ({ authUser }) => {
    const { user, loading } = authUser;
    return { user, loading };
  };
  
export default connect(mapStateToProps, {
    loginUser
  })(Login);
