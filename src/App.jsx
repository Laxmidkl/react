import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white-500 text-l text-green-950 '>

      <div className='flex gap-16 h-20 relative left-96 top-7'>
        <div>Home</div>
        <div>About</div>
        <div>service</div>
        <div>Blog</div>
        <div>contact</div>
      </div>


      <div className="h-screen w-full bg-cover"

        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2165688.jpg&fm=jpg)`,
        }}


      >
      </div>



    </div>
  )
}

export default App
