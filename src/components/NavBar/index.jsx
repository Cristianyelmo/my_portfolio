import { useState } from "react"


const NavBar = ()=>{
  const[toggle,setToggle]=useState(false)
    return(
   <nav className="flex justify-center px-7 py-5">



    <ul className="hidden sm:flex sm:space-x-14 sm:flex-start sm:text-[20px]">
    <li><a href="#sobre_mi" className="text-white">Sobre mi</a></li>
    <li><a href="#tecnologias" className="text-white">Tecnologias</a></li>
    <li><a href="#projectos" className="text-white">Proyectos</a></li>
      <li><a href="#contacto" className="text-white">Contacto</a></li>
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
<a href="#sobre_mi" className="text-white">Sobre mi</a>
  </li>


  <li  
 
 onClick={()=>{
   setToggle(!toggle)
   }}>
<a href="#tecnologias" className="text-white">Tecnologias</a>
 </li>

 <li  
 
 onClick={()=>{
   setToggle(!toggle)
   }}>
  <a href="#projectos" className="text-white">Proyectos</a>
 </li>


 <li  
 
 onClick={()=>{
   setToggle(!toggle)
   }}>
<a href="#contacto" className="text-white">Contacto</a>
 </li>










</ul>










   </div>

</div>





   </nav>
    )
  }
  
  export default NavBar;
  