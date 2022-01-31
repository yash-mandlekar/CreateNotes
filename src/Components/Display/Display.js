import React from 'react';
import { Link } from 'react-router-dom'
import './Display.css'

function Display({ note,deleteNote,updateNote }) {
    
  return (
    <div>
      <h1>Noteiâś :</h1>
      <ul className="list-group">
      {note.map((e,i)=>(
            <li className="list-group-item mb-2" style={{display: "flex"}} key={i}>
              <div className='span'>
              <span>{e.title} </span>
              <span>{e.content}</span>
            </div>Created-
              <span>{e.createdAt}</span>
              <span>{e.modified}</span>
          <button className="btn btn-outline-danger mx-2 del" onClick={deleteNote} value={i}>Deletiá<ion-icon name="trash-outline"></ion-icon></button>&nbsp;
            <Link id='displaylink' to='/Update'>
          <button onClick={updateNote} className="btn btn-outline-info mx-2 del" value={i} >Update<ion-icon name="sync-outline"></ion-icon></button>
            </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Display;
