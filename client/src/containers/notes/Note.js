import React from 'react';
import styled from 'styled-components';

const Note = ({ data, removeNote }) => {
  const { _id, title, text, imageUrl } = data;

  const remove = (e) => {
    e.preventDefault();
    removeNote(_id);
  }

  return (
    <NoteWrapper>
      <div className="note">
        <h3 className="noteTitle">{title}</h3>
        <div className="noteContent">
          <div className="noteText">{text}</div>
          <div className="noteImage">
            { imageUrl ? <img src={`http://${imageUrl}`} alt=""/> : ''}
          </div>
        </div>
        <div className="noteRemove">
          <a href=" " onClick={(e) => remove(e)}>Remove</a>
        </div>
      </div>
    </NoteWrapper>
  )
}

const NoteWrapper = styled.div`
  .note {
    border: 2px solid #46b156;
    border-radius: 3px;
    padding: 20px 20px 20px;
    margin-bottom: 20px;
    &Title {
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 25px;
    }
    &Content {
      display: flex;
      justify-content: space-between;
    }
    &Text {
      margin-right: 30px;
    }
    &Remove {
      padding-top: 15px;
      text-align: right;
      a {
        color: red;
        font-size: 11px;
        text-transform: uppercase;
      }
    }
  }
`;

export default Note;