import './App.css';
import React, { useState } from 'react';
import ChatBox from './components/Messaging/ChatBox';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar';
import LeftSide from './components/LeftSidebar/LeftSide';
import TimeLine from './components/TimeLine/TimeLine';
import RightSide from './components/RightSidebar/RightSide';
import MyNetwork from './components/Network/MyNetwork'
import ManageMyNetwork from './components/Network/ManageMyNetwork';
import Jobs from './components/Jobs/Jobs';

function App() {

  const [activeView, setActiveView] = useState('timeline');

  return (
    <div>
      <NavBar setActiveView={setActiveView} />

      <div className='container mx-auto px-4 py-3'>
        <div className='flex flex-col lg:flex-row gap-1 '>

          {/* --- Timeline View --- */}
          {activeView === "timeline" && (
            <>
              <div className='p-3 basis-full lg:basis-3/12'>
                <LeftSide />
              </div>

              <div className=' p-3 basis-full lg:basis-6/12 min-w-0 max-w-3xl mx-auto'>
                <TimeLine />
              </div>

              <div className=' p-3 basis-full lg:basis-3/12'>
                <RightSide />
              </div>
            </>
          )}

          {/* --- Network View --- */}
          {activeView === "network" && (
            <>
              <div className='p-3 basis-full lg:basis-3/12'>
                <ManageMyNetwork />
              </div>

              <div className='p-3 basis-full lg:basis-9/12   mx-auto'>
                <MyNetwork />
              </div>
            </>
          )}
            {/* --- Messaging View --- */}
          {activeView === "messaging" && (
            <>
              <div className="lg:grid grid-cols-12 ">
                <div className='col-span-2 p-4'>
                  <Sidebar />
                </div>
                <div className='col-span-10'>
                  <ChatBox />
                </div>
              </div>
            </>
          )}
           {/* --- Messaging View --- */}
          {activeView === "jobs" && (
            <>
              <div className='p-3 basis-full lg:basis-3/12'>
                <LeftSide />
              </div>

              <div className='p-3 basis-full lg:basis-9/12   mx-auto'>
                <Jobs />
              </div>
            </>
          )}

         
        </div>
      </div>
    </div>
  );
}

export default App;
