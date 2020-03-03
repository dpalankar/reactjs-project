import React,{Component} from 'react';

class Cockpit extends Component{
    // serverData =[]
    
    constructor(props){
        super(props);
        this.state ={name:'',status:true};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.addData = this.addData.bind(this);
    }
    handleChange1(e) {
        this.setState({ name: e.target.value});
    }
    handleChange2(e) {
        this.setState({ status: e.target.value});
    }
    addData(){        
        let status = (this.state.status =="true");
        this.props.serverData.push({name: this.state.name, status: status});        
        // let tmpArr= this.props.serverData.splice(0);
        // tmpArr.push({name: this.state.name, status: status});  
        this.setState({serverData:this.props.serverData});
      }
    render(){        
        let {serverData} = this.props;        
        return (
            <div className=''>
                <div>                    
                    <button onClick={()=>{this.addData()}}>Add data</button>
                </div> 
                <br/>
                <div>
                   <label htmlFor="name">Server name: </label> 
                   <input type="text" id="name" name="name" defaultValue={this.state.name}  onChange={this.handleChange1}/> <br/>
                   <label htmlFor="status">Server status: </label>
                   <select id="status" onChange={this.handleChange2} >
                        <option value="true">online</option>
                        <option value="false">offline</option>
                   </select>
                </div>
                <br/>                
            </div>            
      );
    }
}

class RandomClass extends Component{
    render(){
        return (
            <div>
              RandomClass Component
            </div>    
      );
    }
}

export {RandomClass};
export default Cockpit;