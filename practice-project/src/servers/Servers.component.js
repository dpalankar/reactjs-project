import React,{Component} from 'react';
import Server from '../server/Server.component';

class Servers extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedServer:null
        };
    }
    render(){
        let {serverData} = this.props;
        // let {selectedServer} = this.state.selectedServer;
        let namesList = serverData.map((server)=>{
            return <Server key={server.name} serverName={server.name} serverStatus ={server.status} />;
        });

       
        return (           
            <div>
                <ul>
                    
                    {/* <Server serverName={serverData[0].name} serverStatus = {serverData[0].status} />
                    <Server serverName={serverData[1].name} serverStatus = {serverData[1].status} />
                    <Server serverName={serverData[2].name} serverStatus = {serverData[2].status} /> */}
                    {/* <Server serverName={serverData[3].name} serverStatus = {serverData[3].status} /> */}

                    {/* { namesList } */}    
                    {/* {
                        serverData.map((server)=>{
                            return <Server key={server.name} serverName={server.name} serverStatus ={server.status} />;
                        })
                    } */}
                    { this.renderServer()}
                </ul>
                <hr/>
                { (this.state.selectedServer || this.state.selectedServer===0) && 
                    <div>
                        {serverData[this.state.selectedServer].name} was Clicked
                    </div>
                }
            </div>
            
      );
    }

    clickDiv(){
        console.log('Clicked'+this.i);
    }

    renderServer(){
        return  this.props.serverData.map((server,i)=>{
            return <div onClick={()=>this.setState({selectedServer:i})}>
                        <div>{i}</div>
                        <Server key={`{i}-{server.name}`} serverName={server.name} serverStatus ={server.status} />
                    </div>;
        });
    }
}



export default Servers;
