import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

const JobModal = (props) => {



  return (
    <div>
      <Modal isOpen={props.open} >
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          {props.job.description}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Do Something</Button>{' '}
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default JobModal;