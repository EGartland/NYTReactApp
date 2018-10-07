import React from "react";

const Results = props => (
    <span >
        <hr></hr>
    <h3>{props.title}</h3>
    <a href={props.url}>{props.url}</a>
     <h4>{props.date}</h4>
     <button  onClick= {() => props.saveButton(props.id)} className ="btn btn-sm btn-outline-info">Save Article</button>
   <hr></hr>
    </span>
)
export default Results;