import React from 'react';
import Job from './Job';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import {CardDeck} from 'reactstrap';

const useStyles = makeStyles(theme => ({
        root: {
          "display": 'flex',
          "flexWrap": 'wrap',
          "justifyContent": 'space-around',
        },
        gridList: {
          "width": 1000,
          "height": 'auto',
          "overflowY": 'auto',
          "marginBottom": '10%'
        },
        indvCell: {
          "borderRadius": '10%',
        },
    icon: {
      color: 'white',
    },
  }));
  


const Jobs = (props) => { 
  
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <GridList cellHeight={230} className={classes.gridList} style={{ margin: '4%' }}>
        {props.jobs.map((arrays,index) => (
         
             <Job job={arrays}  key={index}  />
              
         ))}
        </GridList>
        </div> 
    );
}


export default Jobs;