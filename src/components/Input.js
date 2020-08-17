import React, { useState } from "react"
import "../styles/inputStyles.css"

function gotToLayoutPage (props, text) {
  props.history.push({
    pathname: `/layout`,
    state: { text: text }
  })
}

function Input(props) {
  const [text, setText] = useState('');

  return (
    <div className="input-field-wrapper">
      <textarea
        className="input-field"
        onChange={(event)=> { setText(event.target.value)}}>
      </textarea>
      <button
        onClick={() => gotToLayoutPage(props, text)}
        className="button"
      >LAYOUT</button>
    </div>
  )
}

export default Input