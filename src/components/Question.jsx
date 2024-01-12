import {useState} from 'react'
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import React from 'react'

export const Question = ({title,info}) => {
    const[showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                {showInfo ? <HiOutlineMinus/> : <HiOutlinePlus/>}
            </button>
        </header>
        {showInfo && <p>{info}</p>}
    </article>
  )
}
export default Question