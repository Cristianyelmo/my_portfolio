

import { techIcon3D } from "../../constans";


const Tech = ()=>{

    return(
        <div className="" id="tecnologias">
        <h1 className=" text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-[30px]">Tecnologias</h1>
        <div className="flex flex-wrap justify-center">
{ techIcon3D.map((tech)=>(
            <div >
         
        <div className="w-[150px] h-[150px] ">
              <img src={tech.url}/>
               
            </div >
              <div className=" w-[80px] ml-[34px]  py-2"> 
            
            <p className="text-center text-white mt-[10px] ">{tech.name}</p>
            
            </div>  
            </div>
            ))

}


      </div>
       

       
        
        </div>
    )
  }
  
  export default Tech;