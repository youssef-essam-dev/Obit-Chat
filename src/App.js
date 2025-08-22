import logo from './logo.svg';
import './App.css';

import ChatBox from './components/ChatBox';
import NavBar from './components/NavBar';
import { Sidebar } from './components/Sidebar';
import { LeftSide } from './components/LeftSide';
import { TimeLine } from './components/TimeLine';
import { RightSide } from './components/RightSide';


function App() {
  return (
    <div >
      <NavBar />

      <div className='lg:grid grid-cols-12 gap-4 p-4 bg-[#F3F2EF]  min-h-screen'>
       
        <div className='col-span-3'>
          <LeftSide />
        </div>
        <div className='col-span-6'>
          <TimeLine />
        </div>
        <div className='col-span-3'>
          <RightSide />
        </div>
        
        
      </div>

      {/*   
      <div className="lg:grid grid-cols-12 ">
        <div className='col-span-2 p-4'>
          <Sidebar />
        </div>
        <div className='col-span-10'>
          <ChatBox />
        </div>
      </div>
      */}

    </div>
  );
}

export default App;
