import logo from "../assets/logo.png"
import search from "../assets/search.png"

const Navbar = () => {
  return (
    <div style={{display:"flex",paddingTop:"3vw",borderStyle:"outset"}}>
      <img src={logo} style={{width:"3vw",height:"3vw",marginLeft:"3vw"}}/>
      <h1 style={{marginLeft:"20vw"}}>Learn :</h1>
      <h1> How do I participate? :</h1>
      <h1> Universities</h1>
      <h1> Corporate</h1>
      <img src={search} style={{marginLeft:"15vw",height:"5vw"}}/>
    </div>
  )
}

export default Navbar
