import React from 'react'
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import m5 from "../assets/m5.png"
import m6 from "../assets/m6.png"
import m7 from "../assets/m7.png"
import m8 from "../assets/m8.png"

const Model = () => {
  return (
    <div className='flex' style={{marginTop:"2vw"}}>
      <div className='rounded-full bg-orange-50' style={{width:"8vw",height:"8vw",marginTop:"10vw",marginLeft:"16vw"}}>
        <img src={m1} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-blue-100' style={{width:"8vw",height:"8vw",marginTop:"5vw"}}>
        <img src={m2} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-fuchsia-700' style={{width:"8vw",height:"8vw",marginLeft:"5vw"}}>
        <img src={m3} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-yellow-200' style={{width:"8vw",height:"8vw",marginTop:"7vw"}}>
        <img src={m4} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-violet-400' style={{width:"8vw",height:"8vw",marginLeft:"5vw"}}>
        <img src={m5} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-orange-400' style={{width:"8vw",height:"8vw",marginTop:"6vw"}}>
        <img src={m6} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-green-50' style={{width:"8vw",height:"8vw"}}>
        <img src={m7} style={{width:"8vw"}}/>
      </div>
      <div className='rounded-full bg-blue-400' style={{width:"8vw",height:"8vw",marginTop:"10vw"}}>
        <img src={m8} style={{width:"8vw"}}/>
      </div>
    </div>
  )
}

export default Model
