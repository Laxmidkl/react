import React, { useState } from 'react'

function Service() {
 const [num, setnum] = useState(0)
  return (





















    <div className='relative z-50'>
<button onClick={()=>{
 setnum(num+1)
}} type="button" className="text-white rounded-lg border border-gray-200 bg-blue-500 h-10 w-40 " >Button1</button>
<div>
  {num}
</div>

{
  num>0 && <button onClick={()=>{
    setnum(num-1)
  }} type="button" className="text-white rounded-lg border border-gray-200 bg-purple-500 h-10 w-40 " >Button2</button>
}
    </div>





  )
}


export default Service