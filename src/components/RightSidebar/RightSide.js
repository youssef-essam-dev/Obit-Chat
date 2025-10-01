import React from 'react'
import './RightSide.css'
import FeedCard from './FeedCard';
const RightSide = () => {

  const feedSuggestions = [
    {
      id: 1,
      name: "XAYAH",
      description: "Company • Education Administration Programs",
      image: "./images/3513d41a68ee48dbeff0ff391aa2c495.jpg"
    },
    {
      id: 2,
      name: "QIYANA",
      description: "LLM | Python | genAI | LangChain | FastAPI | Django",
      image: "./images/8ac73fdd4f919ba196550e4d67209f48.jpg"
    },
    {
      id: 3,
      name: "THRESH",
      description: "Frontend Developer | Expert in React.js & Next.js | Building Scalable Web",
      image: "./images/07daf287389c4d4dd422c3aa920e9c98.jpg"
    }
  ];

  return (
    <div>
      <div className='card-container-rightside '>
        <h2 className='text-lg '> LinkedIn News</h2>
        <span className='text-base font-medium text-gray-600'> Top stories </span>

        <div className='list-iteem-righside'>
          <p className='text-md font-medium m-0'> Nvidia downplays DeepSeek threat</p>
          <span className='-my-1 text-xs text-gray-600'> 5d ago • 23,899 readers</span>
        </div>

        <div className='list-iteem-righside'>
          <p className='text-md font-medium m-0'> Banks turn to socials to build trust</p>
          <span className='-my-1 text-xs text-gray-600'> 2h ago • 3,005 readers </span>
        </div>

      </div>
      <div className='max-w-96 max-h-96 py-2'>
        <img className="w-full h-full object-cover" src=' ./images/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png' />
      </div>


      <div className='card-container-rightside '>
        <h2 className='text-lg font-bold mb-4'>Add to your feed</h2>

        <div className='space-y-2'>
          {feedSuggestions.map((suggestion) => (
            <FeedCard key={suggestion.id} {...suggestion}/>
          ))}

          <div className='mt-1'>
            <span className='text-sm text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md p-1 transition-colors'>
              View all recommendations <i className='fa-solid fa-arrow-right ml-1'></i>
            </span>
          </div>
        </div>

      </div>
      <div className='card-container-rightside flex mt-2  p-2'>
        <i className="fa-brands fa-linkedin mr-3 text-blue-600 inline-block text-2xl  "></i>
        <p className='text-base font-medium text-gray-600'> Try LinkedIn on the Windows App </p>
      </div>

    </div>
  )

}
export default RightSide;