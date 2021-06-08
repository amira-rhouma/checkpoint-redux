import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {editTask} from '../../actions/actions'


function Edit({task}) {
  const [show, setShow] = useState(false);
  const [editedText, setEditedText] = useState(task.text)
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type='text' value={editedText}
            onChange={(e)=>setEditedText(e.target.value)}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTask({id:task.id,text:editedText}));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit
