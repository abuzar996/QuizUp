import react from 'react';
import Time from '../../Utilities/time';
import {
    Container,
    CardHeader,
    Col,
    Row,
    Label,
    Input,
    Card,
    Button
} from 'reactstrap';

const Quizes=[
    {
        Question:"What is the Capital of Pakistan?",
        op1:"Islamabad",
        op2:"Lahore",
        op3:"Karachi",
        op4:"Multan",
        Correctoption:"Islamabad"
    },
    {
        Question:"In Which Year Did Pakistan Came into Independence?",
        op1:"1963",
        op2:"1954",
        op3:"1947",
        op4:"1940",
        Correctoption:"1947"
    },
]
class quizWindow extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            iterator:0,
            optionA:false,
            optionB:false,
            optionC:false,
            optionD:false,
            Score:0,
            totalScore:0,
            Correct:0,
            Incorrect:0,
            unAnswered:0,
            TimeUp:false,
            resetTime:false
        }
    }

    componentDidMount()
    
    {
       
        
    }
    
    componentDidUpdate(){
        if(this.state.TimeUp===true)
        {
            this.handleClick(null ,true);
        }
    }
    handleClick=(data,skipped)=>{
        
        var value=-1;
        if(skipped===false)
        {
            if(this.state.optionD===true)
            {
            
                value=data['op4'];
            }
            else if(this.state.optionC===true)
            {
        
                value=data['op3'];
            }
            else if(this.state.optionB===true)
            {

                value=data['op2'];
            }
            else if(this.state.optionA===true)
            {

                value=data['op1'];
            }
        }
        else
        {
            value=-1;
        }
        if(value!==-1)
        {
            if(value===data.Correctoption)
            {
                this.setState({Score:this.state.Score+10})
                this.setState({Correct:this.state.Correct+1})
            }
            else if(value!==data.Correctoption)
            {
                    this.setState({Incorrect:this.state.Incorrect+1})

            }
        }
        else
        {
            this.setState({unAnswered:this.state.unAnswered+1}) 
        }
                  
        this.setState({
            iterator:this.state.iterator+1,
            newQuestion:true,
            TimeUp:false,
            totalScore:this.state.totalScore+10,
            optionB:false,
            optionC:false,
            optionD:false,
            resetTime:true,
            optionA:false,
            
        })
    }
    ToggleReset=()=>
    {
        this.setState({resetTime:false});
    }
    ToggleTimer=()=>{
        this.setState({TimeUp:!this.state.TimeUp})
        

    }
    updateIterator=()=>{
        this.setState({iterator:this.state.iterator+1})
    }
    render(){
        return (
            <Container >
                
                <Card style={{position:'absolute',display:'flex',height:'100%',width:'97%'}}>
                    <CardHeader style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h4>
                            Quiz up - Quiz Section
                        </h4>
                    </CardHeader>
                    {this.state.iterator<Quizes.length?this.state.TimeUp===false?
                    
                        <Card style={{border:'2px solid #000000'}}>
                            
                            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Label style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'oblique',fontWeight:'bold',fontSize:'18px'}}>Quiz Type:-Politics</Label>
                                </Col>
                            </Row>
                            <hr/>
                            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Card style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            
                                            <legend>Question# {this.state.iterator+1}.</legend>
                                        </Row>
                                        <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <legend>{Quizes[this.state.iterator].Question}</legend>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <Label check={false} id={this.state.iterator}>
                                                    <Input type="radio"
                                                     value={this.state.optionA} name={"radio"+ this.state.iterator} id={this.state.iterator} onChange={()=>{this.setState({
                                                        optionA:true,
                                                        optionB:false,
                                                        optionC:false,
                                                        optionD:false,
                                                    })}} />{' '}
                                                        {Quizes[this.state.iterator]['op1']}.
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <Label check={false} id={this.state.iterator}>
                                                    <Input type="radio"
                                                     value={this.state.optionB} name={"radio"+ this.state.iterator} id={this.state.iterator} onChange={()=>{this.setState({
                                                        optionA:false,
                                                        optionB:true,
                                                        optionC:false,
                                                        optionD:false,
                                                    })}} />{' '}
                                                        {Quizes[this.state.iterator]['op2']}.
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <Label check={false} id={this.state.iterator}>
                                                    <Input type="radio"
                                                     value={this.state.optionC} name={"radio"+ this.state.Iterator} id={this.state.Iterator} onChange={()=>{this.setState({
                                                        optionA:false,
                                                        optionB:false,
                                                        optionC:true,
                                                        optionD:false,
                                                    })}} />
                                                    {' '}
                                                    {Quizes[this.state.iterator]['op3']}.
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <Label check={false} id={this.state.iterator}>
                                                    <Input type="radio"
                                                     value={this.state.optionD} name={"radio"+ this.state.Iterator} id={this.state.Iterator} onChange={()=>{this.setState({
                                                        optionA:false,
                                                        optionB:false,
                                                        optionC:false,
                                                        optionD:true,
                                                    })}} />{' '}
                                                    {Quizes[this.state.iterator]['op4']}.
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <Button onClick={()=>{this.handleClick(Quizes[this.state.iterator],false)}} disabled={
                                                    this.state.optionA===false &&
                                                    this.state.optionB===false &&
                                                    this.state.optionC===false &&
                                                    this.state.optionD===false}>Next</Button>
                                            </Col>
                                            <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <Button onClick={()=>{this.handleClick(Quizes[this.state.iterator],true)}} disabled={
                                                    this.state.optionA===true &&
                                                    this.state.optionB===true &&
                                                    this.state.optionC===true &&
                                                    this.state.optionD===true}>Skip</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Time ToggleTimer={this.ToggleTimer}
                                                ToggleReset={this.ToggleReset}
                                                resetTime={this.state.resetTime}/>.
                                            </Col>
                                        </Row>
                                        <br/>
                                        <br/>
                                    </Card>
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                        </Card>:null:<Card style={{border:'2px solid #000000'}}>
                        
                            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Label style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'oblique',fontWeight:'bold',fontSize:'18px'}}>Score Section</Label>
                                </Col>
                            </Row>
                            <hr/>
                            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Card style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            
                                            <legend>Your Score.</legend>
                                        </Row>
                                        <Row>
                                        <Col>
                                            <Label>
                                                Total Questions:
                                            </Label>
                                        
                                            <Label>{this.state.Correct+this.state.Incorrect}</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label>
                                                Correct Answers:
                                            </Label>
                                        
                                            <Label>{this.state.Correct}</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label>
                                                InCorrect Answers:
                                            </Label>
                                        
                                            <Label>{this.state.Incorrect}</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label>
                                                unAnswered Answers:
                                            </Label>
                                        
                                            <Label>{this.state.unAnswered}</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label>
                                                Total Score:
                                            </Label>
                                        
                                            <Label>{this.state.totalScore}</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label>
                                                Your Score:
                                            </Label>
                                        
                                            <Label>{this.state.Score}</Label>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row>
                                        <Col>
                                            <Button>Go Back Home</Button>
                                        </Col>
                                    </Row>
                                        <br/>
                                        <br/>
                                    </Card>
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            </Card>}
                        <br/>
                        <br/>
                        <Row>

                            <legend style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Quiz - Up</legend>
                        </Row>
                        <Row>

                            <legend style={{display:'flex',justifyContent:'center',alignItems:'center'}}>History Based Quiz</legend>
                        </Row>
                    </Card>
                    <br/>
            </Container>
        )
    }
} 
export default quizWindow;;