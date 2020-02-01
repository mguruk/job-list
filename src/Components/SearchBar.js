import React,{Component} from 'react';
import {  Input } from 'reactstrap';
import styles from './../mystyle.module.css';

class SearchBar extends Component{
 
    onChangeHandler = event => (
       console.log(event.target.value)
    )

    render(){
        return(
            <div className={styles.Borderbox}>
            <span style={{display: "inline-block",padding:"10px"}}  className="fa fa-search fa-lg"></span>
                    <Input  type ="text" placeholder="search" size="80" onChange= {(event) => this.onChangeHandler(event) } />
            </div>
        );
    }
 
}


export default SearchBar;