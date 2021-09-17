import react,{ Suspense } from 'react';
import { Redirect, Route, Switch,BrowserRouter as Router } from "react-router-dom";
import {
    Container,Row
  }from 'reactstrap';
const Categories  = react.lazy(() => import('../Menu/categories'));
const Header = react.lazy(() => import('../../Utilities/header'));
const UserProfile=react.lazy(()=>import( '../user/viewProfile'));
const UserEditProfile=react.lazy(()=>import( '../user/editProfile'));
const Scores=react.lazy(()=>import('../user/editProfile'));
const QuizStarter=react.lazy(()=>import ('../Quiz/quizWindow'));
const SideBar =react.lazy(()=>import( '../../Utilities/sideBar'));

class mainApp extends react.Component{
  constructor(props){
    super (props);
    this.state={
        SideBarOpen:true
      }
  }
  toggleSidebar=()=>{
        this.setState({SideBarOpen:!this.state.SideBarOpen});
  }
    render(){
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
            
              <div style={{
                marginLeft:'0.7%',
                position:'absolute',
                width:'20%',
                height:'93%',
                marginTop:'0.3%',
                border:'2px solid #000000'
              }}>
                    <SideBar 
                        SideBarOpen={this.state.SideBarOpen}
                        toggleSidebar={this.toggleSidebar}
                    />
              </div>
            
            
              <div style={{position:'absolute',width:'78.3%',height:'93%',marginLeft:'21%',overflowY: 'scroll',border:'2px solid #000000',marginTop:'0.3%'}}>
              <Suspense fallback={<div >Please Wait</div>}>
              <Router>
                <Switch>
                  <Route
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
                    path={`${this.props.match.url}/quizStarter`}
                    render={props => <QuizStarter  />}
                  />        
                  <Redirect to={`${this.props.match.url}/user`}/>
                </Switch>
              </Router>
            </Suspense>
                  
                  
                
              </div>
            
              </Row>
          </Container>:<Container fluid>
              <div style={{marginTop:'0.2%',border:'2px solid #000000'}}>
                  <Header SideBarOpen={this.state.SideBarOpen}
               toggleSidebar={this.toggleSidebar} />
              </div>
              <div style={{position:'absolute',width:'98.5%',height:'93%',overflowY: 'scroll',border:'2px solid #000000',marginTop:'0.3%'}}>
                  
                  
              <Suspense fallback={<div >Please Wait</div>}>
              <Router>
                <Switch>
                  <Route
                    path={'/user'}
                    exact
                    render={props => <UserProfile  />}
                  />
                  <Route
                    path={'/editUser'}
                    render={props => <UserEditProfile  />}
                  /> 
                  <Route
                    path={'/categories'}
                    render={props => <Categories  />}
                  />    
                  <Route
                    path={'/scores'}
                    render={props => <Scores  />}
                  /> 
                   <Route
                    path={'/quizStarter'}
                    render={props => <QuizStarter  />}
                  />        
                  <Redirect to={'/user'}/>
                </Switch>
              </Router>
            </Suspense>
                
              </div>
            </Container>}
          </Suspense>
        )
    }
}
export default mainApp;