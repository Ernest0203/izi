import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const { modalIsOpen } = props;
  const style = { display: modalIsOpen ? 'flex' : 'none' };

  const modalClose = (e) => {
    if (e.target !== e.currentTarget) return false;
    window.document.body.style.overflow = 'visible';
    props.modalClose();
  }

  return (
    <ModalWrapper>
      <div className="modalContainer" style={style} onClick={(e) => modalClose(e)}>
        <div className="modal">
          <div className="buttonClose" onClick={(e) => modalClose(e)}>X</div>
          {props.children}
        </div>
      </div>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  .modalContainer {
    background-color: rgba(0,0,0, 0.3);
    display: flex;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    .modal {
      background-color: #f3f3f3;
      border-radius: 3px;
      margin: auto;
      padding: 30px;
      width: 35%;
      position: relative;
    }
    .buttonClose {
      position: absolute;
      top: 2px;
      right: 5px;
      font-weight: bold;
      font-size: 16px;
      color: #d04141;
      cursor: pointer;
    }
}
`

export default Modal;