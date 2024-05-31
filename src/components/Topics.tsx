import topic1 from "../assets/topic1.png"
import topic2 from "../assets/topic2.png"
import message from "../assets/message.png"

const Topics = () => {
  return (
    <div className="text-center bg-yellow-50 " style={{paddingTop:"5vw"}}>
      <h1 >TOPICS</h1>
      <h1 className="text-4xl font-serif">Most Searched Ones</h1>
      <div className="flex" style={{marginTop:"7vw"}}>
      <div  style={{backgroundImage:`url(${topic1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"20vw",height:"10vw",marginLeft:"20vw"}}>
       <h1 className="text-center text-white" style={{paddingTop:"5vw"}}>Eligibility</h1> 
      </div>
      <div  style={{backgroundImage:`url(${topic2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"20vw",height:"10vw",marginLeft:"2vw"}}>
       <h1 className="text-center text-white" style={{paddingTop:"5vw"}}>F1 Visa Students</h1> 
      </div>
      <div  style={{backgroundImage:`url(${topic2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"20vw",height:"10vw",marginLeft:"2vw"}}>
       <h1 className="text-center text-white" style={{paddingTop:"5vw"}}>Universities</h1> 
      </div>
      </div>
      <div className="flex">
      <div  style={{backgroundImage:`url(${topic2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"20vw",height:"10vw",marginLeft:"20vw",marginTop:"2vw"}}>
       <h1 className="text-center text-white" style={{paddingTop:"5vw"}}>Admission</h1> 
      </div>
      <div  style={{backgroundImage:`url(${topic2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"20vw",height:"10vw",marginLeft:"2vw",marginTop:"2vw"}}>
       <h1 className="text-center text-white" style={{paddingTop:"5vw"}}>Companies</h1> 
      </div>
      <div  style={{backgroundImage:`url(${topic2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"20vw",height:"10vw",marginLeft:"2vw",marginTop:"2vw"}}>
       <h1 className="text-center text-white" style={{paddingTop:"5vw"}}>Jobs</h1> 
      </div>
      </div>
      <div className="flex">
      <h1 style={{marginLeft:"46vw"}}>Didn't find your topic?</h1>
     <img src={message} style={{width:"1vw",height:"1vw"}}/>
     <h1>Start discussing</h1>
      </div>
    
    </div>
  )
}

export default Topics
