import React from 'react';
import Link from 'next/link';
import style from './label.module.css';
const label=()=>{
    return(
        <div className={style.label}>
            <h3>
            <Link href="/">
                <a>http://volcano.live/
               <span>*Berline</span> |</a>
            </Link>
            </h3>
            <p>by:
                <span>Radisson</span></p>
        </div>
    )

}
export default label;