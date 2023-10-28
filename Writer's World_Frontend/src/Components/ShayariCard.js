import React from 'react'
import './Components.css'

function ShayariCard(props) {
  return (
    <pre className='shayari_card'>
      {props.text}
    </pre>
  )
}

export default ShayariCard