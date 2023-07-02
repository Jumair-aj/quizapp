import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import QuestionModal from '../ui/Form/questionModal'
import SubjectModal from '../ui/Form/subjectModal'

const HomeLayout = (props) => {
  const [showModal,setShowModal] =useState(false)
  const [showModal1,setShowModal1] =useState(false)

  return (
    <div><Header setShowModal={setShowModal} setShowModal1={setShowModal1}/>
    {showModal && <QuestionModal setShowModal={setShowModal}/>}
    {showModal1 && <SubjectModal setShowModal1={setShowModal1}/>}
    {props.children}
    <Footer/>
    </div>
  )
}

export default HomeLayout