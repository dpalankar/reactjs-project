import React,{Component} from 'react';
import Server from '../server/Server.component';


class Cockpit extends Component{
    status = 'Online';   
    serverData =[
        {
            name:'Arm',status:true
        },
        {
            name:'Milky',status:false
        },
        {
            name:'Star Wars',status:false
        }
    ] ;

    constructor(props){
        super(props);
        this.state ={
            serverData:[
                {name:'Arm',status:true},
                {name:'Milky',status:false},
                {name:'Star',status:false}
            ]
        };
    }

    toggleStatus(){
        console.log('before');        
        console.log(this.serverData);
        // if(this.serverData !=undefined){
        //     this.serverData.forEach(element => {
        //         console.log(element.status+' '+element.name);
        //         element.status ='Online';
        //         console.log('After '+element.status);
        //     });
        // }
        // for (let i = 0; i < this.serverData.length; i++) {
        //     // let status = this.serverData[i].status;
        //     this.serverData[i]['status'] = !    this.serverData[i]['status'];         
        // }
        // console.log(this.serverData);
        let tmpArr= this.state.serverData.splice(0);
        for (let i = 0; i < tmpArr[i]; i++) {
            tmpArr[i].status = ! tmpArr[i].status;
            
        }
        this.setState({serverData:tmpArr});
        console.log('After');        
        console.log(tmpArr);
    }
    render(){
        let {serverData} = this.state;
        return (
            <div className=''>
                <div>
                    {/* <button onClick={this.toggleStatus.bind(this)}>Toggle class</button> */}
                    <button onClick={()=>{this.toggleStatus()}}>Toggle class</button> 
                </div>            
            <hr/>
            <div>
                <ul>
                    <Server serverName={serverData[0].name} serverStatus = {serverData[0].status} />
                    <Server serverName={serverData[1].name} serverStatus = {serverData[1].status} />
                    <Server serverName={serverData[2].name} serverStatus = {serverData[2].status} />
                </ul>
            </div>
            </div>
            // <div>
            //     <ul>
            //         <li>Server name :German Server status:{this.status}</li>
            //         <li>Server name :France Server status:{this.status}</li>
            //         <li>Server name :India Server status:{this.status}</li>
            //         <li>Server name :Australia Server status:{this.status}</li>
            //     </ul>
            // </div> 
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