import React from 'react';
import VideoPage from './video-bgd/video';
import Label from './volcano-label/label';
import Time from './time/time';
import LiveView from './live-view/live-view';
import Logo from './logo/logo';

function HomePage() {
    return <div className="container">
        <Label/>
        <LiveView/>
        <Time/>
        <Logo/>
        <VideoPage/>
        <style jsx>
            {`
            .container{
                width:100%;
                overflow-x:hidden;
                overflow-y:hidden;
            }
            `}
        </style>
    </div>
   
  }
  
  export default HomePage