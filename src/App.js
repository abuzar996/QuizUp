import react,{ Suspense } from 'react';
import { Redirect, Route, Switch ,BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

const ViewUser = react.lazy(() =>import( "./veiws/starter"));
const MainApp=react.lazy(()=>import('../src/veiws/main/mainApp'));

const AuthRoute = ({ component: Component, authUser, ...rest }) => (  
  <Route
    {...rest}
    render={props =>{
        if(localStorage.getItem("loggedIn") === "true")
        {
            return   <Component {...props} />
        }
        else
        {
          return(
            <Redirect
              to={{
                pathname: "/user/login",
                state: { from: props.location }
              }}
            />
)
        }
      }
    }
  />
);
class App extends react.Component{
  render(){
   // localStorage.setItem("loggedIn", false);
    const {  loginUser } = this.props;
    
    return (
    
      <Suspense fallback={<div className="loading" />}>
          
              <Router>
                <Switch>
                  <AuthRoute
                    path={'/app'}
                    authUser={loginUser}
                    component={MainApp}
                  />
                  <Route
                    path={`/user`}

                    render={props => <ViewUser {...props} />}
                  />
                  <Redirect to={'/app'}/>
                </Switch>
              </Router>
            
    </Suspense>
  );
  }
}


const mapStateToProps = ({ authUser }) => {
  const { user: loginUser } = authUser;
  
  return { loginUser};
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
