import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white-500 text-l text-green-950 '>

      <div className='flex gap-16 h-20 relative left-96 top-7 cursor-pointer'>
        <div>Home</div>
        <div>About</div>
        <div>service</div>
        <div>Blog</div>
        <div>contact</div>

        <div className='h-12 w-52 bg-green-600 relative bottom-2 rounded-xl overflow-clip group cursor-pointer '>
          <div className='flex relative items-center  left-7 top-3 gap-3 text-white font-bold z-10 '>
            <BsFillTelephoneFill />
            (10)892-293-2678
          </div>
          <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out  absolute top-0'></div>
        </div>
      </div>


      <div className="h-screen w-full bg-cover"

        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2165688.jpg&fm=jpg)`,
        }}>

        <div className='text-white font-bold text-7xl relative text-center top-48'>Agricultural solution</div>
        <div className='text-white font-bold text-xl relative text-center top-60 '>High-performing products that keep large turf areas beautiful and healthy-while <br />saving your time, water and energy </div>
      </div>


      <div className=' w-full h-4/6  my-28 flex'>
        <div className='max-w-screen-sm w-5/12  border-green-800 border-2 relative  left-20 '>
          <div className='h-full max-w-2xl  bg-cover relative bottom-9 right-9'

            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1412701970/photo/farmer-ploughing-his-fields-to-the-delight-of-seagulls.jpg?s=612x612&w=0&k=20&c=iOF_3ZI6UCoY73gxXSuzDMBUJ3k3Os96HVTmnTvuAnc=)`,
            }}


          >  </div>
        </div>

        <div className='h-5/6 max-w-md   relative left-40 text-green-800 text-6xl font-semibold ' > 20+ years agricultural cooperative

          <div className='text-xl my-8'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</div>

          <div className='text-xl'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</div>



          <div className='h-12 w-52 bg-green-600 relative bottom-2 rounded-xl  cursor-pointer  group  overflow-clip my-12'>
            <div className='flex relative items-center  left-4 top-3 gap-3 text-white font-bold z-10 text-xl'>
              <BsFillTelephoneFill />
              More About Us
            </div>
            <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out absolute top-0'></div>
          </div>

        </div>



      </div>

      <div className='text-green-800 font-bold text-5xl relative text-center '>Services we provide</div>



      <div className=' w-full h-96  my-20 flex gap-6 text-green-700'>
        <div className='w-2/4 h-96 bg-green-100 flex overflow-hidden'>
          <div className='h-full w-2/4  bg-cover '
            style={{
              backgroundImage: `url(https://media.gettyimages.com/id/a0125-000186/photo/tractor-plowing-soil.jpg?s=612x612&w=0&k=20&c=8CAVs93SBKkJOthSndUHnaOJ4YmIWH7VlsmeYPqupu4=)`,
            }}>

          </div>

          <div className='w-2/4'>
            <div className='relative left-5 my-10'>01</div>
            <div className='relative left-5 leading-7 '> Field Ready Technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness.</div>

            <div className='h-10 w-52 bg-green-600 relative left-5 bottom-2 rounded-xl  cursor-pointer  group  overflow-clip my-12'>
              <div className='flex relative items-center  left-9 top-1 gap-3 text-white font-bold z-10 text-lg'>
                Get The Service
              </div>
              <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out absolute top-0'></div>
            </div>
          </div>




        </div>


        <div className='w-2/4 h-96 bg-green-100 flex overflow-hidden'>
          <div className='h-full w-2/4  bg-cover '
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1595251823086-930f6265cccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwb3J0YXRpb24lMjBpJTIwJTIwZmllbGR8ZW58MHx8MHx8fDA%3D)`,
            }}>
          </div>


          <div className='w-2/4'>
            <div className='relative left-5 my-10'>02</div>
            <div className=' relative left-5  leading-7 '> Transportation Technological information and others, in addition to information about companies in the sector, list of any list ofz and all companies related to agribusiness.</div>

            <div className='h-10 w-52 bg-green-600 relative left-5 bottom-2 rounded-xl  cursor-pointer  group  overflow-clip my-12'>
              <div className='flex relative items-center  left-9 top-1 gap-3 text-white font-bold z-10 text-lg'>
                Get The Service
              </div>
              <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out absolute top-0'></div>
            </div>
          </div>

        </div>


      </div>



    </div>
  )
}

export default App
