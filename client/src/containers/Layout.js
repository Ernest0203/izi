import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import NotesList from './notes/NotesList';
import ModalAddNote from './ModalAddNote';
import Button from '../assets/ui/button';

const Layout = () => {
	const dispatch = useDispatch();
	const modalOpen = () => {
		window.document.body.style.overflow = 'hidden';
		dispatch({type: 'MODAL_TOGGLE'})
	};

  return (
    <LayoutWrapper>
			<div className="container">
				<div className="nav">
					<Button text="create note" onClick={modalOpen}/>
				</div>
				<div className="content"><NotesList /></div>
				<ModalAddNote />
			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	.nav {
		border-bottom: 2px solid #ddd;
		padding: 20px;
	}
`

export default Layout;