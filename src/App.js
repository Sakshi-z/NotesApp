
import { useState, useEffect } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () =>{
  const [notes, setNotes]= useState([
    {
    id:nanoid(),
    text:"This is my first Note!",
    date:"15/04/2021",

  },
  {
    id:nanoid(),
    text:"This is my second Note!",
    date:"01/05/2021",

  },
  {
    id:nanoid(),
    text:"This is my third Note!",
    date:"05/05/2021",

  },
  {
    id:nanoid(),
    text:"This is my fourth Note!",
    date:"07/06/2021",

  },
  {
    id:nanoid(),
    text:"This is my new Note!",
    date:"09/07/2021",

  },
]);

 const [searchText, setSearchText]= useState('');

 const[darkMode, setDarkMode]=useState(false);

 useEffect(()=>{
   const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data')

   );
   if(savedNotes){
    setNotes(savedNotes);
   }
 },[]);
  
  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  },[notes]);

  const AddNote=(text)=>{
    const date= new Date();
    const newNote={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  };
  const deleteNote=(id)=>{
  const newNotes=notes.filter((note)=>note.id!==id);
  setNotes(newNotes);
  }
  return( 
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={AddNote} handleDeleteNote={deleteNote}/>
  </div>
    </div>
  );
}
export default App;