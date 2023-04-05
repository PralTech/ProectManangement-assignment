import React from "react";
import './Page.css'
import Navbar from "../Navbar/Navbar";
import Left from "../LeftPage/Left";
import Right from "../RightPage/Right";


function Page() {
 
  return (
 <>
          <div className="collapsed-journey-board">
             <Navbar/>
             <Left/>
             <Right/>
          </div>
 </>
  );
}
export default Page;