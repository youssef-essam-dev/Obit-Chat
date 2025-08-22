import React from 'react'
import './RightSide.css'
export const RightSide = () => {
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
          <div className='flex ' >
            <div className='w-14 h-14 mx-3 rounded-full overflow-hidden border-2 border-white'>
              <img
                className='w-full h-full object-cover'
                src='./images/3513d41a68ee48dbeff0ff391aa2c495.jpg'
                alt='XAYAH'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-base font-semibold m-0'>XAYAH</h2>
              <p className='text-xs text-gray-600 m-0'>Company • Education Administration Programs</p>
              <button className=' m-1 px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'>
                Follow
              </button>
            </div>

          </div>
          <div className='flex '>
            <div className='w-14 h-14 mx-3 rounded-full overflow-hidden border-2 border-white'>
              <img
                className='w-full h-full object-cover'
                src='./images/8ac73fdd4f919ba196550e4d67209f48.jpg'
                alt='QIYANA'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-base font-semibold m-0'>QIYANA</h2>
              <p className='text-xs text-gray-600 m-0'>LLM | Python | genAI | LangChain | FastAPI | Django</p>
              <button className='m-1 px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'>
                Follow
              </button>
            </div>
          </div>
          <div className='flex '>
            <div className='w-14 h-14 mx-3 rounded-full overflow-hidden border-2 border-white'>
              <img
                className='w-full h-full object-cover'
                src='./images/07daf287389c4d4dd422c3aa920e9c98.jpg'
                alt='THRESH'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-base font-semibold m-0'>THRESH</h2>
              <p className='text-xs text-gray-600 m-0'>Frontend Developer | Expert in React.js & Next.js | Building Scalable Web</p>
              <button className='m-1 px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'>
                Follow
              </button>
            </div>
          </div>
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
