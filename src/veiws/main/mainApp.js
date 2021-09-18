import 
  react,
  {Suspense}from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter
}from "react-router-dom";
import {
  Container,
  Row
}from 'reactstrap';
import {
  loginUser 
} from '../../Redux/auth/actions';
import { 
  connect 
} from "react-redux";
import {
  changeSelectedMenuHasSubItems
} from '../../Redux/menu/actions';

const Categories  = react.lazy(() => import('../Menu/categories'));
const Header = react.lazy(() => import('../../Utilities/header'));
const UserProfile=react.lazy(()=>import( '../user/viewProfile'));
const UserEditProfile=react.lazy(()=>import( '../user/editProfile'));
const Scores=react.lazy(()=>import('../ScoreProfile/score'));
const QuizStarter=react.lazy(()=>import ('../Quiz/quizWindow'));
const SideBar =react.lazy(()=>import( '../../Utilities/sideBar'));

class mainApp extends react.Component{
  constructor(props){
    super (props);
    this.state={
        SideBarOpen:true,
        path:'/user',
      }
  }
  changepath=(data)=>{
    this.setState({path:data})
    console.log(data);
  }
  componentDidMount()
  {
    
    this.props.changeSelectedMenuHasSubItems();
    
  }
  toggleSidebar=()=>{
        this.setState({SideBarOpen:!this.state.SideBarOpen});
  }
  render()
  {
    return(
      <Suspense fallback={<div className="loading" />}>
        {this.state.SideBarOpen===true?
          <Container fluid>
              <div style={{marginTop:'0.2%',border:'2px solid #000000'}}>
              <Header 
                SideBarOpen={this.state.SideBarOpen}
                toggleSidebar={this.toggleSidebar}
              />
            </div>
            <Row>
              <div style={{marginLeft:'0.7%',position:'absolute',width:'20%',height:'93%',marginTop:'0.3%',border:'2px solid #000000'}}>
                <SideBar 
                  SideBarOpen={this.state.SideBarOpen}
                  toggleSidebar={this.toggleSidebar}
                  changepath={this.changepath}
                />
              </div>
              <div style={{position:'absolute',width:'78.3%',height:'93%',marginLeft:'21%',overflowY: 'scroll',border:'2px solid #000000',marginTop:'0.3%'}}>
                <Suspense fallback={<div >Please Wait</div>}>
                  <Router>
                    <Switch>
                      <Route
                        path={`${this.props.match.url}/editUser`}
                        render={props => <UserEditProfile  {...props}  />}
                      /> 
                      <Route
                        path={`${this.props.match.url}/user`}
                        exact 
                        render={props => <UserProfile  {...props}/>}
                      />
                      <Route
                        path={`${this.props.match.url}/categories`}
                        render={props => <Categories  {...props} />}
                      />    
                      <Route
                        path={`${this.props.match.url}/scores`}
                        render={props => <Scores  {...props} />}
                      /> 
                      <Route
                        path={`${this.props.match.url}/quizStarter`}
                        render={props => <QuizStarter  {...props} />}
                      />        
                      <Redirect to={`${this.props.match.url}/user`}/>
                    </Switch>
                  </Router>
                </Suspense>
              </div>
            </Row>
          </Container>
        :null}
      </Suspense>
    )
  }
}
const mapStateToProps = ({ menu , authUser}) => {
  const { selectedMenuHasSubItems } = menu;
  const { user, loading } = authUser;
  return { selectedMenuHasSubItems,user, loading };
};

export default withRouter(connect(mapStateToProps, {changeSelectedMenuHasSubItems,loginUser})(mainApp));

//export default mainApp;