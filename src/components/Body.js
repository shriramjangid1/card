import React from "react";
import avtar from './images/OIP.jfif'

const Body = () => {
  return (
    <div className="card--div">
      <div className="card">
        <img src={avtar} className='avtar'/>
        <h4 className="userName">Lucifer Morningstar</h4>
        <h5 className="companyName">FrontEnd Devloper at Hell Infotech</h5>
        <button className="email__btn">Email</button>
        <p>
          <b>About Me&darr;</b><br />
          Am a FrontEnd Devloper and make interactive websites<br />
          on earth at <b>TIRANIYA DEVLOPMENT</b> with sahdevil<br />
          and creating websites is so fun with react 💗<br/><br/>
  
          <b>Interest &darr;</b><br />
          Am the only Satan you will ever know <br />
          in this <b>universe</b><br />
          and creating websites is so fun with sahdevil 💗
        </p>
      </div>
    </div>

  )
}


export default Body