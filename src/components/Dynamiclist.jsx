import React from 'react'

const Dynamiclist = ({data,type}) => {

  return (
    <div className='div'>
        {type === "ul" && <ul>
            {data.map((x,i )=> 
            <li key={i}>{x}</li>)}
            
            </ul>}
    {type === "ol" && <ol>
            {data.map((x,i )=> 
            <li key={i}>{x}</li>)}
            </ol>}

    </div>
  )
}

export default Dynamiclist