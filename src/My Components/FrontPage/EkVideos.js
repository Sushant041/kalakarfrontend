import React, { useState } from 'react';
import './EkVideos.css';

const EkVideosvideos = [
  {
    src: 'assets/Ekvideos/Assam State.mp4'
  },{
    src: 'assets/Ekvideos/Chhau- Dasavatar.mp4'
  },{
    src: 'assets/Ekvideos/Chhau Event at Bhubaneshwar.mp4'
  },{
    src: 'assets/Ekvideos/Kamakhyanagar Program 1.mp4'
  },{
    src: 'assets/Ekvideos/Kamakhyanagar Program 2.mp4'
  },{
    src: 'assets/Ekvideos/Kamakhyanagar Program 3.mp4'
  },{
    src: 'assets/Ekvideos/Odisha State.mp4'
  },{
    src: 'assets/Ekvideos/Dhuduki.mp4'
  },
];

export function EkVideos() {
  return (
    <div id='EkVideos' className='EkVideos_Page'>
      <h1 className='EkVideos_heading1'>eK VIDEOS</h1>
      <div className='EkVideos_Media'>
        {
          EkVideosvideos.map(video => (
            <div key={video.src} className='EkVideos_Media_Items'>
              <video
                src={video.src}
                className='EkVideos_Media_Item'
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                controls
                muted
              />
            </div>
          ))
        }

      </div>
    </div>
  );
}
