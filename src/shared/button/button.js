import React from 'react'


const Button = ({name , ...rest}) => {  
  return <button {...rest}>{name}</button>
}

export default Button;
