import react from 'react';
import img from '../../src/veiws/user/images/myimg.jpg';
import {
    Row,
    Col,
    Label,
    Card,
    Container,

} from 'reactstrap';
import {
    
     
     withRouter
   }from "react-router-dom";

import { sideBarClicked } from '../Redux/menu/actions'; 
import { findUserProfile } from '../Redux/auth/actions'; 
import { connect } from "react-redux";

const Menu=[
    {main:"User",inside:["Veiw Profile","Edit Profile"]},
    {main:"Quiz",inside:["Select Categories"]},
    {main:"Score",inside:["View Previous Scores"]}
]
/* <Route
                    path={`${this.props.match.url}/user`}
                    exact
                    render={props => <UserProfile  />}
                  />
                  <Route
                    path={`${this.props.match.url}/editUser`}
                    render={props => <UserEditProfile  />}
                  /> 
                  <Route
                    path={`${this.props.match.url}/categories`}
                    render={props => <Categories  />}
                  />    
                  <Route
                    path={`${this.props.match.url}/scores`}
                    render={props => <Scores  />}
                  /> 
                   <Route
                    path={`${this.props.match.url}/quizStarter`}*/
class SideBar extends react.Component{
    constructor(props){
        super (props);
        this.state={
            SideBarOpen:true
        }
    }
    componentDidMount()
    {
        let email={"email":"khan@gmail.com"};
        this.props.findUserProfile(email);
         
    }
    onCloseClicker=()=>{
        this.props.toggleSidebar();
    }
    onLogoutClcikeD=()=>{
        console.log("hello")
    }
    onHandleClick=(data)=>{
        this.props.sideBarClicked(data);
    }
    render(){
        return(
            <Container
              fluid
              style={{
                  position:'absolute',
                  height:'100%'
                }}
            >
                    <Row key={"val"}>
                        <Col key={"val"}>
                            <Label key={"val"} style={{display:'flex',float:'right'}} onClick={this.onCloseClicker}>X</Label>
                        </Col>
                    </Row>
                    <br/>
                    <Row  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Col  xs="3" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={img} alt= {"alt"}width="150px" height="150px"/>
                        </Col>
                    </Row>    
                            <Row  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <h4>Abuzar Rahim</h4>
                                </Col>
                            </Row>
                            <Row  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Label>abuzar.rahim70@gmail.com</Label>
                                </Col>
                            </Row>
                        <hr/>
                    
                        {Menu.map((data,i)=>(
                            <Card key={data+i}>
                                <Row key={data+i+1}style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Col key={data+i+2} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label key={data+i+3}>
                                            {data.main}
                                        </Label>   
                                        
                                    </Col>
                                </Row>
                                <Card key={data}>
                                    {data.inside.map((newData,j)=>(
                                        <Row key={newData+j+i} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Col key={newData +j+i+1} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <Label key={newData+j+i+2} onClick={()=>{this.onHandleClick(newData)}}>{newData}</Label>
                                            </Col>
                                        </Row>
                                    ))}
                                </Card> 
                                <br/>
                            </Card>
                        ))}
                        <br/>
                        <br/>
                        
                        <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <legend onClick={this.onLogoutClcikeD} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Logout</legend>
                            </Col>
                        </Row>
                    
                
            </Container>
        )
    }
}
const mapStateToProps = ({ menu,authUser }) => {
    const { sidebarOptions } = menu;
    const { userProfile, loading } = authUser;
    
    return { sidebarOptions,userProfile,loading};
  };
  
export default withRouter(connect(mapStateToProps, {sideBarClicked,findUserProfile})(SideBar));
