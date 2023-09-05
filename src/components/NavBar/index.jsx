import { useState } from "react"
import {Link} from 'react-scroll'

const NavBar = ()=>{
  const[toggle,setToggle]=useState(false)
    return(
   <nav className="flex justify-center px-7 py-5">



    <ul className="hidden sm:flex sm:space-x-14 sm:flex-start sm:text-[20px]">
    <li><Link to="sobre_mi" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Sobre mi</Link></li>
    <li><Link to="tecnologias" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Tecnologias</Link></li>
    <li><Link to="projectos" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Proyectos</Link></li>
    <li><Link to="contacto" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Contacto</Link></li>
    </ul>



    <div className='sm:hidden flex flex-1 justify-end
items-center'>
  <img src={toggle ? './close.svg' : './menu.svg'} alt='menu'
  className='w-[28px] h-[28px] object-contain cursor-pointer'
  onClick={()=> setToggle(!toggle)} />

   <div className={`${!toggle ? 'hidden' : 'flex'}
   p-6 bg-black absolute top-20 
   right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>



<ul className='list-none flex justify-end items-start flex-col gap-4 '>


  <li  
 
  onClick={()=>{
    setToggle(!toggle)
    }}>
<Link to="sobre_mi" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Sobre mi</Link>
  </li>


  <li  
 
 onClick={()=>{
   setToggle(!toggle)
   }}>
<Link to="tecnologias" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Tecnologias</Link>
 </li>

 <li  
 
 onClick={()=>{
   setToggle(!toggle)
   }}>
<Link to="projectos" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Proyectos</Link>
 </li>


 <li  
 
 onClick={()=>{
   setToggle(!toggle)
   }}>
<Link to="contacto" spy={true} smooth={true} offset={50} duration={500}  className="text-white cursor-pointer">Contacto</Link>
 </li>










</ul>










   </div>

</div>





   </nav>
    )
  }
  
  export default NavBar;
  