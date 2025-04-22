import React from 'react'
import { BsArrowUpCircle } from "react-icons/bs"


export default function QAelement(props) {

  return (
    <div className='faqs-copy'>
      <div className='faqs-question' onClick={props.toggleAnswer}>
        <div>
          <BsArrowUpCircle className={`faqs-icon ${props.showAnswer ? "open" : ''}`} />
        </div>
        <p>{props.question}</p> 
 
      </div>
      {props.showAnswer && <p className='faqs-answer'>{props.answer}</p>}
    </div>
  )
}