import react from 'react';


import  {
    Card,
    
    Col,
    Row,
    Label,
    
    Container,
    CardHeader
} from 'reactstrap';

const Scores={
    FirstName:"Abuzar",
    LastName:"Rahim",
    Scores:[{QuizName:"Sports",QuizDescription:"Quiz Regarding Sports",Scored:90,total:100},
    {QuizName:"Sports",QuizDescription:"Quiz Regarding Sports",Scored:90,total:100},
    {QuizName:"Sports",QuizDescription:"Quiz Regarding Sports",Scored:90,total:100},
    {QuizName:"Sports",QuizDescription:"Quiz Regarding Sports",Scored:90,total:100},
    {QuizName:"Sports",QuizDescription:"Quiz Regarding Sports",Scored:90,total:100}]
}
class score extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            FirstName:""
        }
    }
    render(){
        return(
            <Container fluid>
                <Card style={{position:'absolute',display:'flex',height:'100%',width:'100%'}}>
                    <Row >
                        <legend style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Quiz Scores</legend>
                    </Row>
                    <br/>
                    <br/>   
                    <Row>
                        <h3 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Previous record of {Scores.FirstName} {Scores.LastName}.</h3>
                    </Row>
                    <br/>
                    <Card>
                        {Scores.Scores.map(data => (
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <h3 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Scores</h3>
                                    </Row>
                                </CardHeader>
                                <Row>
                                    <Col style={{fontStyle:'oblique',fontWeight:'bold',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label >
                                            Quiz Name
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label >
                                            {data.QuizName}
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{fontStyle:'oblique',fontWeight:'bold',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label>
                                            Quiz Description
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>                                    
                                        <Label>
                                            {data.QuizDescription}
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{fontStyle:'oblique',fontWeight:'bold',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label >
                                           Total Marks
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label>
                                            {data.total}
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col style={{fontStyle:'oblique',fontWeight:'bold',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label>
                                            Scored
                                        </Label>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Label>
                                            {data.Scored}
                                        </Label>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Card>
                </Card>
            </Container>
        )
    }
} 
export default score;