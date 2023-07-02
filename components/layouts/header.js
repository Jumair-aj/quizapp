import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'

const Header = ({setShowModal, setShowModal1}) => {
const router = useRouter()
    
  return (
   <header className='header container'>{router.pathname !='/' ?

     <IoMdArrowRoundBack size={50} className='pointer-cursor' onClick={()=>router.push('/')}/> : <span></span>   }
    <div>
    <button className='addQuizBtn pointer-cursor' onClick={()=>setShowModal(true)}>+ Add Quiz</button>
    <button className='addSubjectBtn pointer-cursor' onClick={()=>setShowModal1(true)}>+ Add Subjects</button>
    </div>
   </header>
  )
}

export default Header