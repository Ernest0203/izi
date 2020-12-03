import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Modal from '../assets/ui/modal';
import Input from '../assets/ui/input';
import Button from '../assets/ui/button';

import actions from '../redux/notes/actions';

const ModalAddNote = (props) => {
  const [newNote, setValue] = useState({});
  const modalIsOpen = useSelector(state => state.general.modalIsOpen);
  const dispatch = useDispatch();
  
  const modalClose = () => {
    dispatch({type: 'MODAL_TOGGLE'});
    window.document.body.style.overflow = 'visible';
  }
  
  const saveNote = () => {
    if (!newNote.title || !newNote.text) {
      alert('Please fill title and text fields');
      return;
    }
    const formData = new FormData();
    Object.keys(newNote).forEach(key => formData.append(key, newNote[key]));
    dispatch(actions.createItem(formData));
    modalClose();
    setValue({});
  }

  const setField = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      if (!file.type.match(/image\/*/)) { 
        alert('This file is not image');
        return;
      }
      setValue({ ...newNote, file: file })
      return;
    }
    setValue({ ...newNote, [e.target.name]: e.target.value })
  };

  return (
    <ModalWrapper>
      <Modal modalIsOpen={modalIsOpen} modalClose={modalClose}>
        <h4>New note</h4>
        <Input type="text" name="title" placeholder="Title" value={newNote.title || ''} onChange={setField}/>
        <Input type="text" name="text" placeholder="Text" textarea={true} value={newNote.text || ''} onChange={setField}/>
        <div><input type="file" name="file" id="file" onChange={(e) => setField(e)}/></div>
        <Button text="save" onClick={saveNote}></Button>
      </Modal>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  h4 {
    text-align: center;
    text-transform: uppercase; 
    margin-bottom: 15px;
  }
  .button {
    margin-top: 15px;
  }
`;

export default ModalAddNote;