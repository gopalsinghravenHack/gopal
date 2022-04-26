import React from 'react'
// import   {Link}    from "react-router-dom"
import Formff from '../FreeFire/Formff'
import './Home.css'


const HOME = () => {
  
  
   
    

   return(
   
     <div className="container">
            <div className="navbar"> 
            
               <div className="row">
                 <div className="col-1">
                  <h2>Welcome<br/>Bhim</h2>
                  <h3>27._.eshorts gaming</h3>
                  <p>First match in BHIM</p>
                  <h4>all Details</h4>
                  <button type="button "> Details  <img src="img\arrow.png" /></button>

                 </div>
                 <div className="col-2">
                    <img src="img\backguond all gaming.png" className="controller"/> 
                   <div className="color-box"><img src="img\backguond.jpg"  width="1000px" height="100%" /></div>

                 </div>
               </div>
            </div>

           {/* all games */}
           <div className="gaming-list">
              <div className="lift-col-1">
              <p></p>
              <h1></h1>
                  <div className="games">
                     <div className="games-img">
                        <img src="img\all gaming pic\bgmi1.jpg"  />
                        </div>
                        <div className="games-info">
                        <p> battlegrounds mobile india</p>
                            <h3>BGMI</h3>
                            <p> </p>
                         
                            <button>join now </button>
                             

                        </div>

                        
                  </div>
                  <div className="games">
                     <div className="games-img">
                        <img src="img\all gaming pic\free fire.jpg"  />
                        </div>
                        <div className="games-info">
                        <p> </p>
                            <h3>Free Fire</h3>
                            <p> </p>
                            {/* <button  > join now </button>  */}
                   </div>

                        
                  </div>
              </div>
           </div>


            
         </div>







   )
        



}
export default HOME