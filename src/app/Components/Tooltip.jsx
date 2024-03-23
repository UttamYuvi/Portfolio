"use client"
import React,{useState} from 'react'

const Tooltip = ({text,children,right,top}) => {

    const [visible,setVisible]=useState(false)
  return (
    <div style={{position:'relative',display:"inline-block"}} 
    onMouseEnter={()=>setVisible(true)} 
    onMouseLeave={()=>setVisible(false)}  >
        {children}
        {visible && <div style={{position:'absolute',left:right,top:top,background:'rgba(0,0,0,0.8)', color:'#fff',padding:10, borderRadius:4, zIndex:1,fontSize:12}} >{text}</div>}
    </div>
  )
}

export default Tooltip;