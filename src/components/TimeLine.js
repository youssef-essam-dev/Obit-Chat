
import React, { useEffect, useState, useRef, useMemo } from 'react';
import './TimeLine.css'
import { PostData } from './PostData';
import { Post } from './Post';

// ProgressBar Component
export const ProgressBar = (percentage) => {
  return (
    <div>

    </div>
  )
}
// Circular Image Component
export const CircularImage = ({ src, alt }) => (
  <div className="circular-image">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);
export const TimeLine = () => {
  const [percentage, setPercentage] = useState(75);
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion
  const [postData, setPostData] = useState(PostData)
  const [postForm, setPostForm] = useState({
    id: '',
    name: " ",
    subtitle: " ",
    image: "",
    date: "",
    content: "",
  });

  const addPost = (updatePost) => {
    setPostData((prev) => [...prev, updatePost]);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!postForm.content.trim()) return;
    const newPost = {
      content: postForm.content,
      
        name: "Youssef Essam", // Replace with actual user name
        subtitle: "Post to anyone", // Replace with actual user subtitle
        date: new Date().toLocaleDateString() // Current date
     
      , id: Date.now()
    };
    addPost(newPost)

    setPostForm({ content: '' });
    setIsExpanded(false);  //  Closes the post box after submission
  }

  return (
    <div>
      {/* Job Search Card */}
      <div className="card-container-timeline ">
        <p className="text-2xl font-bold m-0 flex justify-between items-center">
          <span>Prepare for your job search</span>
          <i className="fa-solid fa-xmark cursor-pointer"></i>
        </p>
        <ProgressBar percentage={percentage} />

        <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          className="w-full"
        />
        <p className="text-xs text-gray-600">{percentage}% complete</p>

        <div>
          <img
            className="max-w-full rounded-2xl p-2"
            src="./images/AAYQAgSuAAgAAQAAAAAAACwog6StkzhzSlK17m4iY5d_Xg.png"
            alt="Job Search"
          />
        </div>
        <p className="text-md font-medium max-w-xl pl-5 text-gray-600 mt-1">
          Add your work experience and skills to show your strengths to recruiters.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 border-none">
          {/* <i className="fa-solid fa-spinner animate-spin mr-2"></i> */} Update Profile
        </button>
      </div>

      {/* Create Post Card */}
      <div className=" relative card-container-timeline  ">
        <div className="flex justify-center items-center">
          <div>
            <CircularImage
              src="./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
              alt="Profile"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Start a post"
              className="w-full p-2 border bg-gray-200 font-medium  border-gray-300 rounded-md focus:ring-1 focus:ring-offset-0"
              onClick={() => setIsExpanded(true)}
            />
          </div>
        </div>

        {isExpanded && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[999]" // Overlay with z-[999]
            onClick={() => setIsExpanded(false)} // Close on clicking outside
          ></div>
        )}

        {isExpanded && (
          <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-lg shadow-lg z-[1000]">
            <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
              <div className='flex cursor-pointer p-2 hover:bg-gray-100 rounded-lg'>
                <div className='circular-image'>
                  <img className='w-full h-full object-cover' src='./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg' alt='' />
                </div>
                <div className="ml-3">
                  <h2 className='text-xl font-bold'>Youssed Essam <i class="fa-solid fa-angle-down"></i> </h2>
                  <p>Post to Anyone</p>
                </div>
              </div>

              <div
                className="cursor-pointer  "
                onClick={() => setIsExpanded(false)} // Close on clicking X
              >
                <i className="fa-solid fa-xmark text-xl p-2  hover:bg-gray-100 rounded-full text-gray-600"></i>
              </div>
            </div>

            {/* Textarea Section */}
            <div className='card-container-timeline '>
              <form id='postForm' onSubmit={handelSubmit}>
                <textarea
                  className='w-full py-2 px-4 outline-none resize-none border-none'
                  rows={6}
                  placeholder='What do you want to talk about?'
                  value={postForm.content}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) { // Limit to 500 characters
                      setPostForm({ content: e.target.value });
                    }
                  }}
                />

                <div>
                  <p className="text-sm text-gray-500 text-right px-4">
                    {postForm.content.length}/500
                  </p>
                </div>
                <div >
                  <div className="flex px-4">
                    <i className="fa-regular fa-face-smile-beam cursor-pointer text-gray-600 text-xl px-3 py-1 m-1 hover:bg-gray-100 rounded-full"></i>
                    <i className="fa-solid fa-image cursor-pointer text-gray-600 text-xl px-3 m-1 hover:bg-gray-100 rounded-full"></i>
                    <i className="fa-solid fa-calendar-day cursor-pointer text-gray-600 text-xl px-3 m-1 hover:bg-gray-100 rounded-full"></i>
                    <i className="fa-solid fa-plus text-xl cursor-pointer text-gray-600 px-3 m-1 hover:bg-gray-100 rounded-full"></i>
                  </div>

                  <div>
                    <hr className='max-w-full h-px bg-gray-600'></hr>
                  </div>

                  {/* Footer (Buttons) */}
                  <div className=' flex justify-between'>
                    <div className='px-4 pb-1 border-t border-gray-200 flex justify-end space-x-3'>
                      <button
                        type="submit"
                        className='px-4 py-2 text-sm font-medium text-white bg-blue-600 border rounded-full hover:bg-blue-700 transition-colors'
                      >
                        Post
                      </button>
                    </div>
                    <div className='px-4 pb-1 border-t border-gray-200 flex justify-end space-x-3'>
                      <button
                        className='px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'
                        onClick={() => setIsExpanded(false)} // Collapse on cancel
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        )}



        {/* Icons Section */}
        <div className="flex justify-around mt-3 ">
          <div className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-500"
            onClick={() => alert("Photo clicked!")}
          >
            <i className="fa-solid fa-photo-film"></i>
            <p className="ml-2 font-medium">Photo</p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500"
            onClick={() => alert("Event clicked!")}
          >
            <i className="fa-solid fa-calendar"></i>
            <p className="ml-2 font-medium">Event</p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500"
            onClick={() => alert("Article clicked!")}
          >
            <i className="fa-solid fa-newspaper"></i>
            <p className="ml-2 font-medium">Article</p>
          </div>
        </div>

      </div>

      {/* Post Card */}

      {postData.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}

      {/* Post Card 
      <div className="card-container-timeline ">
        <div className="flex justify-between">
          <div className="flex">
            <CircularImage
              src="./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
              alt="Profile"
            />
            <div>
              <h2 className="text-lg font-bold m-0">Youssef Essam</h2>
              <p className="text-gray-600 text-xs font-normal m-0">
                FrontEnd React Developer
              </p>
              <span className="text-gray-600 text-xs font-normal">
                1d <i className="fa-solid fa-earth-americas"></i>
              </span>
            </div>
          </div>

          <div>
            <i className="fa-solid fa-ellipsis mr-5 cursor-pointer"></i>
            <i className="fa-solid fa-xmark cursor-pointer"></i>
          </div>
        </div>

        <div>
          <p className="m-3 max-w-full break-words text-sm font-normal">"If opportunity doesn't knock, build a door." - Milton Berle. Pablo Bernasconi's inspiring artwork, exclusively crafted for Aleph, embodies our mission.

            At Aleph Group, Inc, we've been building doors for 20 years, connecting businesses and brands with global audiences and the world's largest platforms.
            We're constantly innovating to shape the future of digital, opening new doors of growth and connection.

            Join us as we continue to make our world bigger, together.
          </p>
          <div className=''>
            <img src="./images/ian-schneider-TamMbr4okv4-unsplash.jpg" className=" max-w-full max-h-full py-2 " alt="Post" />
          </div>

        </div>

        <div className="flex justify-between">
          <div className="px-3">
            <i className="fa-regular fa-thumbs-up"></i>
            <i className="fa-regular fa-heart"></i>
            <span className="text-gray-600 text-xs font-normal px-1">320</span>
          </div>
          <div className="flex px-2">
            <p className="text-gray-600 text-xs font-normal px-2">150 comments</p>
            <p className="text-gray-600 text-xs font-normal">80 reposts</p>
          </div>
        </div>

        <hr className="max-w-full h-0 bg-slate-500 m-0" />

        <div className="flex justify-around mt-2">
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500" >
            <i class="fa-solid fa-thumbs-up"></i>
            <p className="ml-2">Like
            </p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500" >
            <i class="fa-solid fa-comment"></i>
            <p className="ml-2">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500">
            <i class="fa-solid fa-retweet"></i>
            <p className="ml-2">Repost</p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500">
            <i class="fa-solid fa-paper-plane-top"></i>
            <p className="ml-2">Send</p>
          </div>
        </div>
      </div>
      */}
    </div>


  )
}
