import React from 'react';

function Update({ SubmitNote,upnote }) {
  return (
    <div>
      <form onSubmit={SubmitNote} >
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label fs-5">Edit Your Title</label>
      <input 
      type="text"
      placeholder='Title'
      name='title'
      defaultValue={upnote.title}
      className="form-control"
      />
  </div>
  <div className="form-group fs-5">
    <label htmlFor="exampleFormControlTextarea1">Edit Your Note</label>
      <textarea
      placeholder='type something...'
      name='content'
      cols='50'
      rows='5'
      defaultValue={upnote.content}
      className="form-control"
      ></textarea>
  </div>
  <button type='submit' className="btn btn-outline-success my-2">Submit</button>
    </form>
    </div>
  );
}

export default Update;
