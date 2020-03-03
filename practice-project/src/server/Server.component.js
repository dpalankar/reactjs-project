import React,{Component} from 'react';

class Server extends Component{
    name ='Milky'
    status = true
    constructor(props){
        super(props);
    }
    render(){
        let {serverName,serverStatus} = this.props; 
        return (
                <li>
                    Server name :{serverName || this.name}. 
                    Status:{(serverStatus && this.status) ? 'Online':'Offline'}
                </li> 
         );
    }
}


export default Server;