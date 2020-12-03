import React from 'react';
import styled from 'styled-components';

const Pagination = (props) => {
   const { count, itemsPerPage, currentPage } = props;

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(count / itemsPerPage); i++) {
     pageNumbers.push(i);
   }

   const renderPageNumbers = pageNumbers.map(number => {
     const active = Number(currentPage) === number ? 'active' : '';
     return (
       <li
         className={`paginationItem ${active}`}
         key={number}
         id={number}
         onClick={(e) => {props.onClick(e.target.id)}}
       >
         {number}
       </li>
     );
   });

   return (
    <PaginationWrapper>
      <ul className="pagination">
        {renderPageNumbers}
      </ul>
    </PaginationWrapper>
   );
}

const PaginationWrapper = styled.div`
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    &Item {
      background-color: #fff;
      border: 2px solid #46b156;
      border-radius: 5px;
      color: #46b156;
      font-weight: bold;
      cursor: pointer;
      padding: 5px 9px;
      margin-right: 5px;
    }
    .active {
      background-color: #46b156;
      color: #fff;
    }
  }
`

export default Pagination;