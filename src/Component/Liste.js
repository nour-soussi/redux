import React from 'react'
import {useSelector} from "react-redux"
import CardTask from "./CardTask.js"
import Spinner from 'react-bootstrap/Spinner';

function Liste() {
const tasks=useSelector(state=>state)
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {tasks.length>0 ? tasks.map((elt)=>(<CardTask key={elt.id} task={elt}/>)) : <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>}
        </div>
    )
}

export default Liste