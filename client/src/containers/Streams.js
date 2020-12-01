import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../assets/ui/button';
import Input from '../assets/ui/input';

import actions from '../redux/streams/actions';

const Streams = () => {
  const data = useSelector(state => state.streams.data);
  const dispatch = useDispatch();
  const writeStream = args => dispatch(actions.writeStream(args));
  const readStream = () => dispatch({ type: actions.READ_STREAM});
  const [text, setText] = useState('');

  return (
    <StreamsWrapper>
			<div className="container">
        <h2>Streams</h2>
        <div className="content">
          <div className="buttons">
            <Button text="Read" onClick={() => readStream()}/>
            <Button text="Write" onClick={() => writeStream(text)}/>
            <Input onChange={setText}/>
          </div>
          <div>{data}</div>
        </div>
			</div>
    </StreamsWrapper>
  )
}

const StreamsWrapper = styled.div`
	.container {
		h2 {
      text-align: center;
    }
    .buttons {
      display: flex;
      margin-bottom: 20px;
      .button {
        margin-right: 20px;
      }
      input {
        height: 100%;
        max-height: 100%;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
	}
`

export default Streams;