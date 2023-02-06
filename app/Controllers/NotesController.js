import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawNotes(){
  if(appState.notes.length == 0){
    setHTML('noteList', '')
  }
  appState.notes.forEach(note => {
    setHTML('noteList', note.NoteListTemplate)
  })
  setText('totalNotes', appState.notes.length)
}

function _drawNote(){
  // NOTE document.getElementById('noteTitle').style.color = "this.color";
  let activeNote = appState.note
  setHTML('centerPage', activeNote.ActiveNoteTemplate)
  document.getElementById('noteTitle').style.color = appState.note.color
}

export class NotesController{
  constructor(){
    _drawNotes()
    appState.on('notes', _drawNotes)
  }

  SetActiveNote(noteID){
    let activeNote = appState.notes.find(note => note.id == noteID)
    appState.note = activeNote
    _drawNote()
  }

  createNote(){
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      notesService.createNote(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }

  deleteNote(noteID){
    let activeNote = appState.notes.findIndex(note => note.id == noteID)
    appState.notes.splice(activeNote, 1)
    saveState('notes', appState.notes)
    appState.emit('notes')
    setHTML('centerPage', '')
  }
}