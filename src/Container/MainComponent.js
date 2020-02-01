import React,{Component} from 'react';
import Header from '../Components/HeaderComponent';
import Jobs from '../Components/Jobs';
const JOB_API_URL = 'http://localhost:3001/api/jobs';

class Main  extends  Component{

    state={
        data :null
    }

    async componentDidMount(){
        const response = await fetch(JOB_API_URL);
        let json = await response.json();
        this.setState({
            data:json
        });
    }


    render(){
        if (this.state.data == null){
            return(
                <div className="fa fa-spinner fa-lg"/>
            );
        }
        let arrays = [], size = 3;
        while (this.state.data.length > 0)
        arrays.push(this.state.data.splice(0, size));
        console.log(arrays);
        return(  
        <React.Fragment>
            <Header/>
            {arrays.map((array,index) => (
            <Jobs jobs={array}/>
            ))}
        </React.Fragment>
        );
    }
}

export default Main;