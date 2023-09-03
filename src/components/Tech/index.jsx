

import EarthCanvas2 from "../Canvas/Earth2";

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