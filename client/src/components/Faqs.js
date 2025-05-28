"use client"
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import questionData from "./questionData"
import QAelement from './QAelement'
import BottomCTA from './BottomCTA'

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="faqs" className='faqs-section'  
    // style={{
    //   transform: isInView ? "none" : "translateY(540px)",
    //   opacity: isInView ? 1 : 0,
    //   transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"
    // }}
  >
      {children}
    </section>
  );
}


export default function Faqs() {
  const [questions, setQuestions] = React.useState(questionData)

  function toggleAnswer(id) {
    setQuestions(prevData => prevData.map(data => {
      return data.id === id ? 
        {...data, showAnswer: !data.showAnswer} : {...data, showAnswer: false}
    }))
  }

  const allQuestions = questions.map((item, index) => {
    return <QAelement
      key={index}
      question={item.question}
      answer={item.answer}
      showAnswer={item.showAnswer}
      toggleAnswer={() => toggleAnswer(item.id)}
    />

  })

  return (
    <Section>
      <div className='faqs-content section-content'>
        <div className='faqs-question-container'>
        <h1 className='faqs-header section-header'>Frequently Asked <br></br>Questions</h1>
          {allQuestions}
        </div>

        <BottomCTA />
      </div>
    </Section>
  )
}