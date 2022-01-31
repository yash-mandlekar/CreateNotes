import React from 'react';
import { Link } from 'react-router-dom'

function Create({ submit }) {
  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fs-5">Enter Your Title</label>
        <input
          type="text"
          placeholder='Title'
          name='title'
          className="form-control"
        />
      </div>
      <div className="form-group fs-5">
        <label htmlFor="exampleFormControlTextarea1">Enter Your Note</label>
        <textarea
          placeholder='type something...'
          name='content'
          cols='50'
          rows='5'
          className="form-control"
        ></textarea>
      </div>
      <button type='submit' className="btn btn-outline-success my-2">Submit</button>
    </form>

  );
}

export default Create;
