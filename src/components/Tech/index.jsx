
import EarthCanvas from "../Canvas/Earth";
import EarthCanvas2 from "../Canvas/Earth2";
import EarthCanvas3 from "../Canvas/Earth3";
import Firebase from "../Canvas/Firebase";
import Github from "../Canvas/Github";
import Javascript from "../Canvas/Javascript";
import MySql from "../Canvas/MySql";
import NextJs from "../Canvas/NextJs";
import Postman from "../Canvas/Postman";
import Tailwind from "../Canvas/Tailwind";
import R3d from "../Canvas/react";
import C3d from "../Canvas/css";
import Html3d from "../Canvas/html";
import { techIcon3D } from "../../constans";


const Tech = ()=>{

    return(
        <div className="">
        <h1 className=" text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-[30px]">Tecnologias</h1>
        <div className="flex flex-wrap justify-center">
{ techIcon3D.map((tech)=>(
            <div >
              
        <div className="w-[150px] h-[150px] ">
              <EarthCanvas2 icon={tech.url}/>
               
            </div>
            <p className="text-center text-white">{tech.name}</p>

            </div>
            ))

}


      </div>
       

       
        
        </div>
    )
  }
  
  export default Tech;