import react from 'react';


import  {
    Card,
    
    Col,
    //Row,
    //Label,
    Button,
    Container,
    Label,
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
            name:''
        }
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
                                <Label>
                                    {ProfileData.FirstName}
                                </Label>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Label>
                                    {ProfileData.LastName}
                                </Label>
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
                            <Label>
                                {ProfileData.Cnic}
                            </Label>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Label>
                                {ProfileData.PhoneNumber}
                            </Label>
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
                            <Label>
                                {ProfileData.email}
                            </Label>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Label>
                                {ProfileData.Age}
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
                            <Label>
                                {ProfileData.city}
                            </Label>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Label>
                                {ProfileData.Country}
                            </Label>
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
                            <Label>
                                {ProfileData.QuizesTaken}
                            </Label>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Label>
                                {ProfileData.JoinedSince}
                            </Label>
                        </Col>
                    
                    </Row>
                    <hr/>
                    <Row>
                            
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Button>
                                    Edit Profile
                                </Button>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontStyle:'oblique'}}>
                                <Button>
                                    Log Out
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
export default viewProfile;