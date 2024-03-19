import React, { useEffect, useState } from 'react'
import "./Hero.css"
import s5 from "./Images/slider-layer5.png"
import s4 from "./Images/slider-layer4.png"
import s6 from "./Images/slider-layer6.png"
import s8 from "./Images/slider-layer8.png"
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
function Container({image,id, T1}) {
    const [x,setx]=useState(0);
    useEffect(()=>{
        const l=document.getElementsByClassName("l")
onmousemove=(e)=>{
    if(e.screenX>x){
        setx(e.screenX)
for (const el of l) {
    el.style.postion="absolute"
    el.style.marginLeft="5px"
  setTimeout(() => {
    el.style.marginLeft="-5px"
  }, 1000);
 
}
 
    }else{
        setx(e.screenX)
        for (const el of l) {
            el.style.marginLeft="5px"
          setTimeout(() => {
            el.style.marginLeft="-5px"
          }, 1000);
         
        }
    }
console.log(e)
}
 
    }
    )
  return (
    <div className='Container'>
        <div className="images">
            <div className="imagescont">
            <img src={s5} alt="" className="leave5 l" />
       <img src={s4} alt="" className="leave4 l" />
       <img src={s6} alt="" className="leave6 l" />
       <img src={s8} alt="" className="leave8 l" />
            </div>
    
   
        </div>
        <div className="ContainerLeft">
<h1 className="TextTop " id="top">
{T1}
</h1>
<h5 className="TextBottom top" id="bottom">
{"Leading Brand for Organic Foods"}
</h5>
        </div>
        <div className="ContainerRight" id={image}>
<img src={image}  id={id}/>
        </div>
 

    </div>
  )
}

export default Container