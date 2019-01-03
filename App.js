import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                 txtchange:'',
                 textchange:[],
                 qutchange :'',
                 quantitychange:[],
                 flag:false,
                 count:0,
        };
        this.click=this.click.bind(this);
        this.textchange=this.textchange.bind(this);
    }
    click(){
        this.setState({flag:true,count:this.state.count+1});
      }
    textchange(e,i){
       let txtchange = this.state.textchange;
       txtchange[i]=e.target.value;
       this.setState({textchange:txtchange});
    }
    quantitychange(e,i){
       let qutchange = this.state.quantitychange;
       qutchange[i]=e.target.value;
       this.setState({quantitychange:qutchange});
    }
    redirect(){
        const path = '/finalpage'
        browserHistory.push(path);
    }
        render(){
                 let dummyarray=[];
                 for(let i =1;i<=this.state.count;i++)
                 {
                     dummyarray.push("string");
                 }
            return(
               <div>
                   <button onClick={this.click}>add new list</button>
                   {this.state.flag ? dummyarray.map((item,naveen) =>{
                    return (<div> <div> Enter the Item Name <input type='text'  value ={this.state.textchange[naveen]} onChange ={(naveen)=>this.textchange(naveen)}/></div><br/>
                   <div> Enter the Quantity  <input type='number' value={this.state.quantitychange[naveen]} onChange={(naveen)=>this.quantitychange(naveen)}/> </div><br/>
                   </div>)}): '' } 
                   <br/><br/>
                   <button  >SUBMIT</button>
                </div>
            );
        }
}
export default App;