import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './header/header.component';
import Home from './home/home.component';
import Coaches from './coaches/coaches.component';
import Signin from './signin/signin.component';
import UserDashboard from './user-dashboard/user-dashboard-view';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { callAPI,getStorage, checkLogin } from './services'
import AuthProtection from './auth-protection/authprotection.component'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoute: 1,
      loginStatus: true,
      firstName:null
    }
  }

  changeLoginStatus(resp,status){
    if(status){
      this.setState({loginStatus:true,firstName:resp.data.firstname});
    }
    else{
      this.setState({loginStatus:false});
    }
  }



  componentDidMount() {
    // console.log('APP componentDidMount')
    checkLogin((status,data)=>
    {
      this.changeLoginStatus(status,data)
    });
    // if(getStorage('auth')){
    //   callAPI('profile','get',
    //   (response) => {
    //     this.changeLoginStatus(response,true);
    //   },
    //   (err) => {
    //     this.changeLoginStatus(err,false);
    //   });
    // }else{
    //   this.changeLoginStatus('not logged in ',false);
    // }    
  }

  render() {
    let { activeRoute,firstName } = this.state;
    return (
      <Router>
        <div className="App">
          <Grid container direction="column">
            <Grid item style={{ height: '50px', padding: '10px', backgroundColor: '#f1f1f1' }}>
              <Header loginStatus={this.state.loginStatus} firstName={this.state.firstName}></Header>

              {/* <button onClick={()=>{this.changeRoute(0)}}>Home</button>
              <button onClick={()=>{this.changeRoute(1)}}>Coaches</button>
              <button onClick={()=>{this.changeRoute(2)}}>Signin</button> */}
            </Grid>
            {/* <Grid item>
              {activeRoute===0 && <Home></Home>}
              {activeRoute===1 && <Coaches></Coaches>}
              {activeRoute===2 && <Signin></Signin>}
            </Grid> */}
            {/* <Route exact path="/home" render={()=><Auth><Home/></Auth>}/> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/coaches/:id?" component={Coaches} />
              <Route path="/signin" component={Signin} />
              <Route path="/userdashboard"
                render={(routeprops)=>
                <AuthProtection authview={<UserDashboard/>} 
                  noAuthview={<Signin/>}  routeprops={routeprops}></AuthProtection>} />
              <Route path="*" render={() => <div>Uh oh! You lost?</div>} />
            </Switch>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
