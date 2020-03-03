import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cockpit,{RandomClass as First} from './cockpit/Cockpit.component';
import Servers from './servers/Servers.component';

class App extends Component{
    
    constructor(props){
        console.log('Constructor intialised');
        super(props);
        this.state ={
          serverData:[
              {name:'Ardro',status:true},
              {name:'Milky ',status:false},
              {name:'Star  ',status:false},
              {name:'War   ',status:true}
          ],
          serverName :"test"
      };
    }

    componentWillMount(){
      console.log('Component Will Mount');
    }

    componentDidMount(){
      console.log('Component Did Mount');
    }

    componentWillUnmount(){
      console.log('componentWillUnmount');
    }

    toggleStatus(){
        let tmpArr= this.state.serverData.splice(0);
        for (let i = 0; i < tmpArr.length; i++) {
          tmpArr[i].status = !tmpArr[i].status;        
        }
        this.setState({serverData:tmpArr});      
    }

    changeImpl(e){
      // console.log(e.target.value);
      this.setState({serverName:e.target.value});
    }

    addServer(){       
      let tmpArr= this.state.serverData.slice(0);    
      tmpArr.push({name: this.state.serverName, status: true});
      this.setState({serverData:tmpArr},()=>{
        console.log(this.state.serverData);  
      });     
    }

    render(){
        console.log('Render intialised');
        let {serverData,serverName} = this.state; 
        return (
          <div className='base'>
              <div>
                   <label htmlFor="name">Server name: </label> 
                   {/* <input type="text" id="name" name="name" defaultValue={serverName}  onChange={(e)=>{this.changeImpl(e)}}/> <br/>                    */}
                   <input type="text" id="name" name="name" value={serverName}  onChange={(e)=>{this.changeImpl(e)}}/> <br/>  
                   <label htmlFor="status">Server status: </label>
                   <select id="status" onChange={this.handleChange2} >
                        <option value="true">online</option>
                        <option value="false">offline</option>
                   </select>                 
              </div>
              <div>     
                    <br/>               
                    <button onClick={()=>{this.addServer()}}>Add data</button>
              </div>
              {/* <Cockpit serverData={serverData}/> */}
              <hr/> 
              <div>
                    <button onClick={()=>{this.toggleStatus()}}>Toggle class</button> 
              </div>               
              <Servers serverData={serverData} />   
            </div>  
        );
    }

}

export default App;
