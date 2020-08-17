import React, { useState } from "react"
import "../styles/layoutStyles.css"

function Layout(props) {
  const { text } = props.location.state
  const [columns, setTextColumns] = useState([{text:text, edit: false}]);
  const [numberOfColumns, setNumColumns] = useState(1);
  const [pageText, setText] = useState(text);

  const handleColumns = (numberOfColumns, text) => {
    setNumColumns(numberOfColumns)
    let slicedText = []
    let length = text.length

    for (let i = 0; i < numberOfColumns; i++) {
      slicedText = [...slicedText, {text: text.substr(0, length/numberOfColumns), edit: false}]
      text = text.substr(length / numberOfColumns)
    }

    setTextColumns(slicedText)
  }

  const handleEdit = (index) => {
    setTextColumns(columns.map((item, indexItem) => {
      indexItem === index ? item.edit = true : item.edit = false
      return item
    }))
  }

  const handleChange = (e, colNumber) => {
    let editedColumns = columns.map((item, indexItem) => {
      if (indexItem === colNumber) {
        item.text = e.target.value
      }

      return item
    })
    let editedColumnsString = editedColumns.map(item => item.text).join()
    setTextColumns(editedColumns)
    setText(editedColumnsString)
  }

  return (
    <div className="page-wrapper">
      <h1>Layout Page</h1>
      <button
        onClick={() => handleColumns(1, pageText)}
        className="columnButton oneColumn"
      >
      </button>
      <button
        onClick={() => handleColumns(2, pageText)}
        className="columnButton twoColumn"
      >
      </button>
      <button
        onClick={() => handleColumns(3, pageText)}
        className="columnButton threeColumn"
      >
      </button>
      <div className="row">
    { columns.map((item, index) => item.edit === false ?
       <div
         onClick={() => handleEdit(index)}
         style={{width: `calc(100%/${numberOfColumns})` }}
         className="text"
       >
         {item.text}
       </div> :
       <textarea
         cols = "30"
         rows = "10"
         onChange={(e)=> handleChange(e, index)}
         value={item.text}
         onBlur={() => handleEdit(item.edit)}
         style={{width: `calc(100%/${numberOfColumns})` }}
         className="text"
       ></textarea>
       )}
      </div>
    </div>
  )
}

export default Layout