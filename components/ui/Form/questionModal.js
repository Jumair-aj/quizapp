import axios from "axios";
import { Field, FieldArray, Formik } from "formik";
import React from "react";
import {GrClose} from 'react-icons/gr'
import { useEffect, useState } from 'react'

export default function QuestionModal({setShowModal}) {
  const [subjects, setSubjects] = useState('')
  useEffect(() => {
    try{
      axios.get(process.env.NEXT_PUBLIC_API_URI+'/subject').then((res)=>{
      setSubjects(res.data)
     }
      )
}
catch(err){
    console.log(err)
  }
}, [])

  return (
    <div className="modal">
      <button onClick={()=>setShowModal(false)} className="closeBtn pointer-cursor"><GrClose size={30}/></button>
      <Formik
       initialValues={{ question: '', answers: [], subject: '',tags: [] }}
  
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
         try{
axios.post(process.env.NEXT_PUBLIC_API_URI+'/question',values).then((res)=>
console.log(res)
) .catch(function (error) {
  // handle error
  console.log(error);
})
         }catch(err){
          console.log(err)
         }
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <label htmlFor="question">Question</label>
           <input
             id="question"
             type="text"
             onChange={formik.handleChange}
             value={formik.values.question}
           />
           {/* {formik.touched.firstName && formik.errors.firstName ? (
             <div>{formik.errors.firstName}</div>
           ) : null} */}
 
           <label htmlFor="lastName">Answer</label>
           {/* <input
             id="lastName"
             type="text"
             onChange={formik.handleChange}
             value={formik.values.firstName}
           /> */}
           <FieldArray name="answers">
          {({ push, remove }) => (
            <div>
              {/* Render existing inputs */}
              {formik.values.answers.map((answer, index) => (
                <div key={index}>
                 <Field name={`answers[${index}].answer`} placeholder="Name" />
                  {/* <Field name={`answers[${index}].rightChoice`} placeholder="Email" /> */}
                <div>
                    <label>
                      <Field
                        type="radio"
                        name={`answers[${index}].rightAnswer`}
                        value={"true"}
                        id="rightAnswer"
                      />
                     
                    </label>
                    </div>
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                </div>
              ))}

              {/* Add new input */}
              <button
                type="button"
                onClick={() => push({ answer: '', rightAnswer: false })}
              >
                Add Input
              </button>
            </div>
          )}
        </FieldArray>
           <label htmlFor="subject">Subjects</label>
           {/* <input
             id="subject"
             type="text"
             onChange={formik.handleChange} 
             value={formik.values.subject}
           /> */}
            <select onChange={formik.handleChange} 
             value={formik.values.subject}>{
    subjects.map( (x,y) => 
      <option key={y}>{x}</option> )
  }</select>
           <label htmlFor="tags">Tags</label>
           <input
             id="tags"
             type="text"
             onChange={formik.handleChange}
             value={formik.values.tags}
           />
           {/* {formik.touched.lastName && formik.errors.lastName ? (
             <div>{formik.errors.lastName}</div>
           ) : null} */}
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </div>
  );
}
