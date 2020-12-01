import React, { useState } from 'react';

type Props = {
  string: string,
  number: number
}

const Typescript = (props: Props) => {
  const [res, setRes] = useState<string>('');
  const { string, number } = props;

  const sum = (event: React.MouseEvent<HTMLElement>) => {
    setRes(string + number)
  }

  return (
    <div>
      <p><button onClick={(e) => sum(e)}>Click</button></p>
      <p>{string}</p>
      <p>{number}</p>
      <p>{res}</p>
    </div>
  )
}

export default Typescript;