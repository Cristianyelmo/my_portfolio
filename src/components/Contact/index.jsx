import { useState } from "react";
import Head_3D from "../Canvas/Head_3D";
import { AiFillBehanceCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
const Contact = ()=>{
const [download,setDowload] =useState(false)
    return(
        <div id="contacto">
        <h1 className=" text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-[30px]">Contacto</h1>

<div className="flex justify-center flex-wrap">
  



<div className="h-[400px] w-full sm:w-[450px] flex flex-wrap ">
        <Head_3D/>
    </div>  
    <div className="" >
   {!download ? <h1 className="text-animation text-white text-center text-[30px]">Descarga mi cv</h1> :
   <h1 className=" text-white text-center text-[30px]">Gracias! :)</h1>}
<div className="  flex justify-center ">

    {!download ?
    <a href='./Amarilla-Cristian-CV-Desarrollo-web full-stack.pdf' download='Amarilla-Cristian-CV-Desarrollo-web full-stack' >
   <img className=' h-[220px]'src="./animation-portfolio-2d-dowload.gif" onClick={()=>setDowload(true)}/> 

</a>
:

<img className=' h-[220px]'src="./animation-portfolio-2d-download-success.gif"/> }
</div>


    <div className="space-x-1 flex px-4 py-7">
        <a href="https://github.com/Cristianyelmo" target="_blank">
<div className="poligon-Projects-4 ">

<div className="poligon-Projects4 overflow-hidden flex justify-center ">

<AiFillGithub className="text-5xl mt-[25px]"/>



</div>
</div>
</a>


<a href="https://www.linkedin.com/in/amarillacristian/" target="_blank">
<div className="poligon-Projects-4 ">

<div className="poligon-Projects4 overflow-hidden flex justify-center ">

<AiFillLinkedin className="text-5xl mt-[25px]"/>



</div>
</div>
</a>


<a href="https://www.behance.net/cristiaamarill" target="_blank">
<div className="poligon-Projects-4 ">

<div className="poligon-Projects4 overflow-hidden flex justify-center ">

<AiFillBehanceCircle className="text-5xl mt-[25px]" />



</div>



</div>
</a>


</div>


</div>
   
</div>

        </div>
    )
  }
  
  export default Contact;