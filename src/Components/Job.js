import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  card: {
    marginLeft:'6%'
  },
  media: {
    height: 200,
    width: 250
  },
});


const Job = (props) =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  function handleClickOpen() {
    setOpen(true);
  }  

  function handleClose() {
    setOpen(false);
  }

  
  return (
    <React.Fragment>
      <Card className={classes.card} style={{  width: 250}} key={props.job.id} onClick={props.onClick} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.job.company_logo}
          title="company logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.job.company}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {props.job.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {
                        console.log('clicked')
                        handleClickOpen();
                        selectJob(props.job) }} >
           View Descrition
        </Button>
        <Button size="small" color="primary">
        <a href={props.job.url}>Apply Now</a>
        </Button>
      </CardActions>
      
      <Modal isOpen={open} job={selectedJob} >
        <ModalHeader >Description</ModalHeader>
        <ModalBody
        dangerouslySetInnerHTML={{ __html: selectedJob.description }}
       
        />
        <ModalFooter>
          <Button color="primary"  href={selectedJob.url}>Apply Now</Button>
          <Button color="secondary" onClick={handleClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </Card>
    </React.Fragment>
  );
}

export default Job;