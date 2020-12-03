import React, {useState, useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Note from './Note';
import Pagination from '../../assets/ui/pagination';

import actions from '../../redux/notes/actions';

const NotesList = () => {
  const data = useSelector(state => state.notes.data);
  const dispatch = useDispatch();
  const fetchData = useCallback(args => dispatch({type: actions.FETCH_DATA}), [dispatch]);
  const removeNote = arg => dispatch(actions.removeItem(arg))

  useEffect(() => {
    (async () => await fetchData())();    
  }, [fetchData]);

  const [currentPage, setPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const handleClick = (number) => {
    setPage(number);
  }

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);
  
  const list = data.length > 0
    ? currentItems.map((item, index) => {
        return <li key={index}><Note data={item} removeNote={removeNote}/></li>
    })
    : <li>Add some notes!!!</li>

  return (
    <NotesListWrapper>
      <ul>{list}</ul>
      <Pagination count={data.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onClick={handleClick}/>
    </NotesListWrapper>
  )
}

const NotesListWrapper = styled.div`
  padding: 20px;
`;

export default NotesList;