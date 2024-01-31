import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoImages } from "react-icons/io5";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, "name must be 5 character").required(" name is required"),
  email: Yup.string().email("not email").required("Email is required"),
});

function Contact() {
  const [asd, setasd] = useState(0);

  const formarray=[
    {name:"entermessage",type:"textarea",placeholder:"enter your entermessage"},

    {
      subData:[
    {name:"name",type:"text",placeholder:"enter your named"},
    {name:"email",type:"email",placeholder:"enter your email"},
      ]
    },
    {name:"entersubject",type:"text",placeholder:"enter your subject"},
    {name:"upload",type:"file",placeholder:"enter your upload"},
    



    
  ]
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        entersubject: "",
        entermessage: "",
        upload: "",
      }}
      // validationSchema={schema}
      onSubmit={(hy) => {
        console.log(hy);
      }}
    >
      {({ handleSubmit,setFieldValue,values }) => {
        return (
          <Form onSubmit={handleSubmit} className="flex flex-col gap-10 w-3/5  h-1/2   pl-6 ">

            <div className="text-3xl text-green-900  font-bold">
              Get in Touch
            </div>
            {/* <Field name="entermessage" type="text" placeholder="Enter Message"className="outline-none  border-2 border-gray-200 h-40 w-full" /> */}
           


<div className="grid  gap-5">
  {
    formarray.map((val,i)=>{
     if(val.subData){
    return(
      <div className=" grid grid-cols-2 gap-5">
        {
          val.subData && val.subData.map((item,ind)=>{
            return(
              <div key={i}>
                <Field name={item.name} type={item.type} placeholder={item.placeholder}  className="outline-none px-3  border-2 border-gray-200 h-14 w-full" />
                  <ErrorMessage name={item.name} component={"div"} />
              </div>
            )
           })
        }
      </div>
    )
     }else if(val.type==='textarea'){
      return <div className=" w-full">
 <textarea rows={10} className="border w-full resize-none p-3" placeholder={val.placeholder} onChange={(e)=>{
              setFieldValue(val.name,e.target.value)
            }}></textarea>
            
            {/* <ReactQuill theme="snow" className="h-44" value={values.entersubject} onChange={()=>setFieldValue('entersubject',e)} /> */}
            <ErrorMessage name={val.name} component={"div"} />
      </div>
     }
     else if(val.type==='file'){
return(
  <div>
     <input onChange={(e)=>{
             setFieldValue(val.name,e.target.files[0])
            }} accept=".png,.jpg,.jpeg"  type={val.type} name={val.name} id={val.name} className="hidden" />

           <label htmlFor={val.name} className="h-44 w-full border-2 border-gray-200 flex items-center justify-center">
           {
              values[val.name]?<img className="h-full" src={URL.createObjectURL(values[val.name])} />:<div>
                <IoImages className="h-12 w-12 text-gray-400   " />
              </div>
            }
           </label>
  </div>
)
     }
     
     else{
      return(
        <div key={i}>
          <Field name={val.name} type={val.type} placeholder={val.placeholder}  className="outline-none  border-2 border-gray-200 h-14 w-full" />
            <ErrorMessage name={val.name} component={"div"} />
        </div>
      )
     }
    })
  }
</div>
             {/* <div className="flex gap-6 w-full">

            <Field name="name" type="text" placeholder="Enter your name"  className="outline-none  border-2 border-gray-200 h-14 w-full" />
            <ErrorMessage name="name" component={"div"} />

            <Field name="email" type="text" placeholder="Email" className="outline-none  border-2 border-gray-200 h-14 w-full" />
            <ErrorMessage name="email" component={"div"} />

              </div> */}



            {/* <Field name="entersubject" type="text" placeholder="Enter Subject"className="outline-none  border-2 border-gray-200 h-14 w-full" />
            <ErrorMessage name="entersubject" component={"div"} /> */}

           


            <input  type="submit" value={"submit"}  placeholder="submit " className="outline-none  border-2 text-green-800 border-green-800 text-center  h-14  w-32 cursor-pointer hover:text-white hover:bg-green-600 hover:border-none " />
          </Form>
        );
      }}
    </Formik>
  );
}

export default Contact;
