import react from 'react';
import { Container,Row,Col,Card, Label } from 'reactstrap';

class Header extends react.Component{
    
    onLabelClick=()=>{
        this.props.toggleSidebar();
    }
    
    render(){
        return (
            <Container fluid > 
                
                <Card >
                    <Row >
                        
                        <Col style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                            {this.props.SideBarOpen===false?
                            <Label onClick={this.onLabelClick}>+</Label>:null}
                            <h3>Quiz-up Web Portal</h3>
                        </Col>
                    </Row>
                </Card>
            </Container>    
        )
    }
}
export default Header;
