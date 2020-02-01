import React,{Component} from 'react';
import Job from './Job.js';
import { CardDeck} from 'reactstrap';                                                                         

class Cards extends Component{

render(){
    // console.log(this.props.dataList);
    return(

        <CardDeck style={{width:"80%",margin: "3% 1% 8% 5%"}}>  
         {        
        this.props.dataList.map((array,index) =>(
           <Job job={array} key={index}/>

        ))
        }   
        </CardDeck>  
    );
}
}


export default Cards;