const About = ()=>{

    return(
    <div className=" px-5 text-center py-9 " id="sobre_mi">
     <h1 className=" text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-[30px]">Sobre mi </h1>
{/*  <div className="flex">
 



     </div>
     </div>   */}
<div className="flex  justify-center flex-col items-center">

<div className="poligon mb-5 ">

<div className="poligon1 overflow-hidden">

     <div >
         
     <img className="h-[210px] w-[210px]" src="./Perfil.png"/>
    
     </div>

</div>
</div>


<div className="poligon-about  h-fit p-2  ml-[10px] max-w-xl ">

     <div className="poligon1-about h-fit p-5 max-w-xl ">
 
         <p className="text-center">
          Mi pasión por la creación en la tecnología arranca cuando me compre una tableta y una notebook, desde ahí de forma autodidacta aprendí a hacer animaciones, música y aprender herramientas de diseño y 3D, algunas en forma autodidacta y otras de la carrera de Diseño industrial. Hace un año gané una beca para el bootcamp de programación full stack de Formar que me hizo despertar otro interés en la creación mediante la tecnología, la programación, buscando crear páginas web o aplicaciones atractivas y dinámicas, siendo algo interesante y desafiante que disfruto cada día. Me gustaría seguir aprendiendo otros lenguajes como otras áreas de la programación como la programación móvil y desktop.
         </p>
          

     </div>
</div>
</div>
   
    </div>


    )
  }
  
  export default About;