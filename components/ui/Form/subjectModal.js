import axios from "axios";
import { Field, FieldArray, Formik } from "formik";
import React from "react";

export default function SubjectModal({setShowModal1}) {
  return (
    <div className="modal">
      <button onClick={()=>setShowModal1(false)} className="closeBtn">CLOSE</button>
      <Formik
       initialValues={{  subject: ''}}
  
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
         try{
axios.post(process.env.NEXT_PUBLIC_API_URI+'/subject',values).then((res)=>
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
         
           <label htmlFor="subject">Subjects</label>
           <input
             id="subject"
             type="text"
             onChange={formik.handleChange} 
             value={formik.values.subject}
           />
           
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </div>
  );
}
