import react from 'react';
import  { 
    
    Input,
    Card,
    Row,
    Col,
    
    Button
} from 'reactstrap';

class UpdatePassword extends react.Component{
    constructor(props){
        super(props);
        this.state={
            newPassword:"",
            confirmNewPassword:"",
            oldPassWord:""
        }
    }
    onDoneClick=()=>{
        this.props.TogglePasswordModel();
    }
    onCancelClick=()=>{
        this.props.TogglePasswordModel();
    }
    prevPassChange=(e)=>{
        console.log(e.target.value);
        this.setState({oldPassWord:e.target.value})
    }
    newPassChange=(e)=>{
        console.log(e.target.value);
        this.setState({newPassword:e.target.value})
    }
    newCPassChange=(e)=>{
        console.log(e.target.value);
        this.setState({confirmNewPassword:e.target.value})
    }
    
    render(){
        return(
            <div style={{position:'absolute',marginLeft:'40%'}}>
            <Card style={{margin:'auto',border:'2px solid #000000',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'30%'}}>
                <Row>
                    <h4>
                        Passowrd Change Window
                    </h4>
                </Row>
                
                <hr/>
                <Row>
                    <Input onChange={this.prevPassChange} placeholder="Previous password" type="password"></Input>
                </Row>
                <Row>
                    <Input onChange={this.newPassChange} placeholder="New password" type="password"></Input>
                </Row>
                <Row>
                    <Input onChange={this.newCPassChange} placeholder="Confirmed New password" type="password"></Input>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Button onClick={this.onDoneClick}>
                            Done
                        </Button>
                    </Col>
                    <Col>
                    
                        <Button onClick={this.onCancelClick}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Card>
            </div>
        )
    }
}
export default UpdatePassword;