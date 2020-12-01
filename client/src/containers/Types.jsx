// // @flow

// import React, { useState } from 'react';
// import styled from 'styled-components';

// type Props = {
//   string: string,
//   number: number
// }

// const Types = (props: Props) => {
//   const [res, setRes] = useState<string>('');
//   const { string, number } = props;

//   const sum = (event: SyntheticEvent<HTMLButtonElement>) => {
//     setRes(string + number)
//   }

//   return (
//     <div>
//       <p><button href="" onClick={(e) => sum(e)}>Click</button></p>
//       <p>{string}</p>
//       <p>{number}</p>
//       <p>{res}</p>
//     </div>
//   )
// }

// export default Types;