import React from 'react'
import {Link} from "react-router-dom"


export default function Vlogs(props){
    return(
        <Link to='/editvlogs/:id'>
       <div>
        <h3> Heading: {props.list.heading}</h3>
        <h3> Date: {props.list.date}</h3>
        <h3> {props.list.vlog_string}</h3>
       <button onClick={()=>props.delete(props.list.id)}>delete</button>
        </div>
        </Link>
        
    )
}