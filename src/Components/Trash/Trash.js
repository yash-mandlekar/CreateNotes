import React from 'react';
import './Trash.css'

function Trash({ trash, permanentDelete, resto }) {
  return (
    <div>
      <h1>Ťrásȟ :</h1>
      <ul className="list-group">
        {trash.map((e, i) => (
          <li className="list-group-item mb-2" style={{display: "flex"}} key={i}>
            <div className='span'>
              <span>{e.title}</span>
              <span>{e.content}</span>
            </div>
            <button className="btn btn-outline-danger mx-4" onClick={permanentDelete} value={i}>Permańentió Deletiá</button>
            <button id='restore' className="btn btn-outline-primary" onClick={resto} value={i}>Restore<ion-icon id='resto' name="refresh-outline"></ion-icon></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trash;
