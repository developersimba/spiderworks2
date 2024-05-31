import lens from "../assets/lens.jpg"
import message from "../assets/message.png"
import bulb from "../assets/bulb.png"

const Forum = () => {
  return (
    <div className="w-screen">
      <h1 className="text-xs" style={{marginLeft:"5vw",marginTop:"2vw"}}>HOME/FORUM</h1>
      <h1 className="text-center">FORUM</h1>
      <h1 className="text-center text-3xl font-serif" style={{marginTop:"2vw"}}>Discuss and evolve</h1>
      <h1 className="text-center" style={{marginTop:"2vw"}}>Engage with Fellow Professionals:Join the Program Forum Discussion</h1>
      <div className="align-middle justify-center flex border rounded-full" style={{width:"40vw",height:"4vw",marginLeft:"32vw",marginTop:"2vw"}}>
        <input placeholder="Search Topics" className="outline-none"/>
        <img src={lens} className="rounded-full" style={{width:"5vw",height:"4vw",marginLeft:"20vw"}}/>
      </div>
      <div className="flex" style={{marginTop:"5vw"}}>
      <div style={{marginLeft:"40vw"}} className="flex">
        <img src={message} style={{width:"2vw",height:"2vw"}}/>
        <h1> START DISCUSSING</h1>
      </div>
      <div style={{marginLeft:"4vw"}} className="flex">
        <img src={bulb} style={{width:"2vw",height:"2vw"}}/>
        <h1>VIEW TOPICS</h1>
      </div>
      </div>
     
    </div>
  )
}

export default Forum
