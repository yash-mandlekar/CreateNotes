import React, { useState } from 'react'
import Nav from './Components/Nav/Nav.js'
import Create from './Components/Create/Create.js'
import Trash from './Components/Trash/Trash.js'
import Display from './Components/Display/Display.js'
import Update from './Components/Update/Update.js'
import { Routes, Route, useNavigate } from "react-router-dom";
import moment from 'moment'

const App = () => {
  let navigate = useNavigate();
  const [note, setnote] = useState([
    { title: "Animals", content: "Elephant,Tiger",createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),modified:moment().format('MMMM Do YYYY, h:mm:ss a')},
    { title: "Fruits", content: "Apple,Banana",createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),modified:moment().format('MMMM Do YYYY, h:mm:ss a')},
  ]);
  const [trash, settrash] = useState([
    { title: "lalala", content: "hvnsukahn,vnakjn",createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),modified:moment().format('MMMM Do YYYY, h:mm:ss a') },
    { title: "dadada", content: "cjamskdc,ancskj",createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),modified:moment().format('MMMM Do YYYY, h:mm:ss a') },
  ]);

  const submit = (e) => {
    e.preventDefault();
    const { title, content } = e.target;
    const copy = [...note];
    copy.push({ title: title.value, content: content.value ,createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),modified:moment().format('MMMM Do YYYY, h:mm:ss a') })
    setnote(copy);
    navigate("/Display")
  }
  const deleteNote = (e) => {
    let copytrash = [...trash]
    copytrash.push(note[e.target.value])
    settrash(copytrash);
    let copynote = [...note];
    copynote.splice(e.target.value, 1);
    setnote(copynote)
  }
  const permanentDelete = (e) => {
    let copytrash = [...trash]
    copytrash.splice(e.target.value, 1);
    settrash(copytrash);
  }
  const [upnote, setupnote] = useState('');
  const updateNote = (e) =>{
    setupnote(note[e.target.value]);
    let copynote = [...note];
    copynote.splice(e.target.value, 1);
    setnote(copynote)
  }
  const resto =(e)=>{
    let copynote = [...note];
    copynote.push(trash[e.target.value]);
    setnote(copynote);
    let copytrash = [...trash]
    copytrash.splice(e.target.value,1)
    settrash(copytrash);
  }

  const SubmitNote = (e)=>{
    e.preventDefault();
    console.log();
    const { title, content } = e.target;
    const copy = [...note];
    copy.push({ title: title.value, content: content.value,createdAt:note.map((e,i)=>(e.createdAt)),modified:moment().format('MMMM Do YYYY, h:mm:ss a')})
    setnote(copy);
    navigate("/Display")
  } 
  
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path="/"
          element={<Create
            submit={submit}
          />} />

        <Route path="/Display"
          element={<Display
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />} />

        <Route path="/update"
          element={<Update updateNote={updateNote} 
          SubmitNote={SubmitNote} 
          upnote={upnote} 
          />} />

        <Route path="/Trash"
          element={<Trash
            trash={trash}
            resto={resto}
            permanentDelete={permanentDelete}
          />} />
      </Routes>



    </div>
  )
}
export default App;