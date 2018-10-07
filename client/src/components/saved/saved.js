import React from "react";

const Saved = props => (
    <span className = "savedArticles" >
    <hr></hr>
    <h3>{props.title}</h3>
    <a href={props.url}> {props.url} </a><p> Written on: {props.date}</p>
    <button onClick ={() => props.deleteButton(props.id)} className="btn btn-sm btn-outline-info">Delete</button>
    <hr></hr>
    </span>
);
export default Saved;