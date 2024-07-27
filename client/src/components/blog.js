import React  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Blog = () =>

 

{



  const [post, setpost] = useState([])
  
  useEffect( () => {
    axios.get("http://localhost:4000/profile")
    //  axios.get("http://10.0.2.2:4000/profile")
    .then((res) => {
      // console.log(res.data)
      setpost(res.data)
    })
  
    
  }, [setpost])
  const navigate = useNavigate(); 
  const handleClick = () => {
 
    navigate("/create")
  }
  
  const getpost = () => {
      
    if (post.length >0) {
      const data =
      post.map(post => (
   
        <PostCard
          id={post._id}
          username={post.username}
          title={post.title}
          description={post.description}
          image={post.imageURL}
          video={post.videoURL}
                         
            />
            

          ))
      return data
      
    }
    else {
      return <>
        <h1 className=" text-lg md:text-2xl flex justify-center items-center text-center self-center w-full"> NO POST FOUND</h1>
        <p className=' font-light text-[#CDCDE0] sm:self-center  flex justify-center items-center text-center self-center w-full'>
                    Publish a new Post?
                    <button type="button" onClick={handleClick} className=' text-[#FFA101]'>
                        Click here
                    </button> </p>
       

        
      </>
    }

     
    }
  
    // console.log(post)
            
return(

    <>
      <section className=" bg-mainbg text-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className=" container">
          <div className=" -mx-4 flex flex-wrap">
            <div className=" w-full px-4">
              <div className=" mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className=" mb-2 block text-lg font-semibold text-[#FF8C00]">
                  Our Videos
                </span>
                <h2 className= " mb-4 text-3xl font-bold  text-gray-400 sm:text-4xl md:text-[40px]">
                  Our Recent Videos
                </h2>
                <p className=" text-[#CDCDE0] ">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

                <div className=" blog -mx-4 flex flex-wrap">
          {getpost()}   
          {/* this fetch the post and show on screen */}
            </div>
           </div>
           </section>
          

    </>
  );
};

export default Blog;
// code to genetrate cards
const PostCard = ({ username, id,video, image, title, description }) => {

  return (
    <>
          <div id={id} className="  post bg-red-150  relative  w-full px-4 md:w-1/2 lg:w-1/3">
     <a href={video}>   <img src={image} alt=""
          
          className=" img flex w-[87%] top-9  h-[200px]  z-10  cursor-pointer   transition-all  ease-in duration-800  object-cover  " />
          </a>
              <p className="  self-start flex">{username}</p>
              <div  className=" post mb-10 w-full relative">
      <div>
          
            <h3 className="  text-yellow-500">
              <a
                href={video}
                className=" mb-4 inline-block text-xl font-semibold text-yellow-500 hover:text-gray-300 dark:text-white sm:text-2xl md:text-xl lg:text-xl xl:text-2xl capitalize no-underline" 
              >
                {title}
              </a>
            </h3>
            <p className=" text-base text-body-color dark:text-dark-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
