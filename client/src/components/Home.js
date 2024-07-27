import React, { useEffect } from 'react'
import Footer from './Footer'
import { aora, logo } from '../components/assets/index'
import Blog from './blog'
import {redirect, useFetcher, useNavigate} from 'react-router-dom'


     
import { FaSearch } from 'react-icons/fa'
import LogOut from './LogOut'
const Home = () => {
  useEffect(() => {
    if (window.localStorage.getItem("auth") === "false") {
      navigate("/login")
    }
  })
  
  const navigate = useNavigate()
  


    return (
      <div className=' bg-mainbg  w-screen h-screen   '>
    
        <div className='header flex  justify-between py-4 px-3 h-24 '>


          <p className='max-w-screen  flex flex-col text-[#FFA300] font-light text-[1rem]  '>
            Welcome back

            <span className=' text-white font-semibold text-[1.2rem]  '>

              Harsh_Kapoor
          
            </span>
          </p>



          <img src={logo} alt=""
            className=' self-center h-12 w-12  '
          ></img>



        </div>
        <div div className=' relative'>

          <input type="email" placeholder='search a video topic' value="" required
                        
            onChange={(e) => {
                           /**setvalue */ (e.target.id = e.target.value)
              e.target.value = ""

            }}
                       
                    

            className=' bg-[#1E1E2D] rounded-[8px]  text-lg p-[15px] md:w-[80%] sm:w-[90%]  mt-2 mb-2 relative  
                                          '/>
          <FaSearch className=' text-[#CDCDE0] absolute top-7 right-11 text-xl md:right-28' />

        </div>
        <p className=' flex  self-start px-3 text-[#CDCDE0]'>Trending Videos</p>

        <div class="flex flex-col bg-mainbg  m-auto p-auto">

<div
  class="flex overflow-x-scroll pb-10 hide-scroll-bar"
>
  <div
    class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
            >
              
    
        <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
           <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
              <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
              <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
              <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
              <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
              <Slider
          video="https://media.istockphoto.com/id/2149295310/video/namaste-portrait-of-happy-indian-girl-on-a-desert-india.mp4?s=mp4-640x640-is&k=20&c=6188p-XkNPIzVEicXtS1ekM5lXFzvm6rP6DgGBuPou8=" />
      </div>
     
     </div>
     </div>
     


        <Blog />


        <Footer />
   
      </div>
         
    
         


    )
}
  
const Slider = ({ video,id}) => {
  return (

  
          <div class="inline-block px-3">
            <div if={id}
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  border hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ><> <a href={video}><video muted autoPlay loop className=' w-full h-full' src={video}> </video></a></>
          
      </div>
    </div>  
    
      
      


    );
}

export default Home
