import React from 'react';
import Image from 'next/image';
import style from './live.module.css';
const liveView=()=>(
    <div className={style.live}>
        <Image src="/live.jpg" alt="image" width="154" height="164" />
    </div>
)
export default liveView;