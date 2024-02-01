import React, { useState } from 'react'

const InputField = () => {
  const [text, setText] = useState('')

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  return (
    <input
      type="text"
      value={text}
      onChange={handleInputChange}
      className="w-1/2 h-1/2 bg-red-500"
    />
  )
}

export default InputField
