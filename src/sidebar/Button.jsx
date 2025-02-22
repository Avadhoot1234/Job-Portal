import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  return (
    <button onClick={onClickHandler} value={value} className={`px-4 py-1 border-none text-base hover:bg-blue-600`}>
        {title}
    </button>
  )
}

export default Button
