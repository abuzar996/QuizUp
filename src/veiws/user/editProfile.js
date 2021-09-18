import react from 'react';
import UpdatePassword from './updatePassword';
import { changeSelectedMenuHasSubItems } from '../../Redux/menu/actions'; 
import { connect } from "react-redux";
import  {
    Card,
    
    Col,
    //Row,
    //Label,
    Button,
    Container,
    Label,
    Input,
    Row,
    //CardHeader
} from 'reactstrap';
import image from './images/myimg.jpg';
const ProfileData={
    FirstName:"Abuzar",
    LastName:'Rahim',
    Cnic:"35202-5272440-3",
    PhoneNumber:"+923227258697",
    email:"abuzar.rahim70@gmail.com",
    Age:25,
    city:'Islamabad',
    Country:'Pakistan',
    JoinedSince:"July, 2021",
    QuizesTaken:'5',

  }
  
class viewProfile extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            PasswordToggle:false
        }
    }
    componentDidUpdate(){
        this.props.changeSelectedMenuHasSubItems();
        if(this.props.sidebarOptions!=="")
        {
            if(this.props.sidebarOptions==="Veiw Profile")
            {
                this.props.history.push('/app/user');
            }
            else if(this.props.sidebarOptions==="Select Categories")
            {
                this.props.history.push('/app/categories');
            }
            else if(this.props.sidebarOptions==="View Previous Scores")
            {
                this.props.history.push('/app/scores');
            }
        }
      }
    TogglePasswordModel=()=>{
        this.setState({PasswordToggle:!this.state.PasswordToggle})
    }
    onCpClick=()=>{ 
        this.TogglePasswordModel()
    }
    render()
    {
        return(
            <Container fluid>
                
                <Card style={{position:'absolute',display:'flex',height:'100%',width:'97%'}}>
                    <div style={{background:'#000000'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={image} alt=""/>
                        </div>
                    </div> 
                    
                    <Card>
                        {this.state.PasswordToggle===true?<UpdatePassword TogglePasswordModel={this.TogglePasswordModel}/>:null}
                        <Row>
                            
                                <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                    <Label>
                                        First Name
                                    </Label>
                                </Col>
                                <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                    <Label>
                                        Last Name
                                    </Label>
                                </Col>
                            
                        </Row>
                        
                        <Row>
                            
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Input value={ProfileData.FirstName} disabled={false}/>                                      
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Input value={ProfileData.LastName} disabled={false}/>       
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Label>
                                    Cnic
                                </Label>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Label>
                                    Phone Number
                                </Label>
                            </Col>
                        
                    </Row>
                    
                    <Row>
                        
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.Cnic} disabled={false}/>       
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.PhoneNumber} disabled={false}/>       
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                            
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Label>
                                    Email Address
                                </Label>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Label>
                                    Age
                                </Label>
                            </Col>
                        
                    </Row>
                    
                    <Row>
                        
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.email} disabled={true}/>       
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Label>
                                <Input value={ProfileData.Age} disabled={false}/>       
                            </Label>
                        </Col>
                    
                    </Row>
                    <hr/>
                    <Row>
                            
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Label>
                                    City
                                </Label>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Label>
                                    Country
                                </Label>
                            </Col>
                        
                    </Row>
                    
                    <Row>
                        
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.city} disabled={false}/>      
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.Country} disabled={false}/>       
                        </Col>
                    </Row>
                    <hr/>
                    <Row>                           
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                            <Label>
                                Quizes Taken
                            </Label>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                            <Label>
                                Joined Since
                            </Label>
                        </Col>
                    </Row>
                    
                    <Row>
                        
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.QuizesTaken} disabled={true}/>       
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Input value={ProfileData.JoinedSince} disabled={true}/>       
                        </Col>                  
                    </Row>
                    <hr/>
                    <Row>
                            
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Button>
                                    Save
                                </Button>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Button onClick={this.onCpClick}>
                                    Change Passowrd
                                </Button>
                            </Col>
                        
                    </Row>
                    <br/>
                    
                  
                    </Card>
                </Card>   
            </Container>
        )
    }
}

const mapStateToProps = ({ menu }) => {
    const { sidebarOptions } = menu;
    
    return { sidebarOptions};
  };
  
export default connect(mapStateToProps, {changeSelectedMenuHasSubItems})(viewProfile);