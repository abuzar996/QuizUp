import react from 'react';
import { changeSelectedMenuHasSubItems } from '../../Redux/menu/actions'; 
import { connect } from "react-redux";
import {
    Container,
    Row,
    Col,
    Label,
    Card,
    
} from 'reactstrap';
import MaterialTable from 'material-table';
const Quizes=[
    {value:'Sports',discription:'Quizes and Questions Related to sports.',Total:30,Time_per_Qestion:'1 min'},
    {value:'Politics',discription:'Quizes and Questions Related to Politics.',Total:30,Time_per_Qestion:'1 min'},
    {value:'World Economy',discription:'Quizes and Questions Related to World Economy.',Total:30,Time_per_Qestion:'1 min'},
    {value:'Sciences',discription:'Quizes and Questions Related to Sciences.',Total:30,Time_per_Qestion:'1 min'},
    
    
]
class Categories extends react.Component{
    HandleClick =(event,rowData)=>
    {
        console.log(rowData)
    }
    componentDidUpdate(){
        this.props.changeSelectedMenuHasSubItems();
        if(this.props.sidebarOptions!=="")
        {
            if(this.props.sidebarOptions==="Veiw Profile")
            {
                this.props.history.push('/app/user');
            }
            else if(this.props.sidebarOptions==="Edit Profile")
            {
                this.props.history.push('/app/editUser');
            }
            else if(this.props.sidebarOptions==="View Previous Scores")
            {
                this.props.history.push('/app/scores');
            }
        }
      }
    render()
    {
        return (
            <Container fluid >
                <Card style={{position:'absolute',display:'flex',height:'100%',width:'97%'}}>
                    <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <h1 style ={{textDecoration:'underline'}}>
                                Quiz Up
                            </h1>
                        </Col>

                    </Row>
                    <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Label>
                                Select The Specific Category From The Following
                            </Label>
                        </Col>

                    </Row>
                    <br/>
                    <div>
                        <MaterialTable
                            title="Quiz Categories"
                            data={Quizes}
                            columns={[
                                {title: <h3>Category</h3>, field: 'category', render: row => <div> {row.value}</div> },
                                {title: <h3>Description</h3>, field: 'Explaination', render: row => <div> {row.discription}</div> },
                                {title: <h3>Total Questions</h3>, field: 'quantity', render: row => <div> {row.Total}</div>},
                                {title: <h3>Time Per Mcq</h3>, field: 'quantity', render: row => <div> {row.Time_per_Qestion}</div>},
                                {title: <h3>Total Time</h3>, field: 'quantity', render: row => <div> {row.Total} min</div>}
                            ]}  
                            onRowClick={this.HandleClick}  
                            options={{
                                search:false,
                                paging:false,
                                minBodyHeight:550,
                                maxBodyHeight:550,
                            
                            }}
                        />
                    </div>
                </Card>
            </Container>
        )
    }
}
const mapStateToProps = ({ menu }) => {
    const { sidebarOptions } = menu;
    
    return { sidebarOptions};
  };
  
export default connect(mapStateToProps, {changeSelectedMenuHasSubItems})(Categories);
