import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { Pop } from "../Utils/Pop.js"
import { saveState } from "../Utils/Store.js"
import { setHTML } from "../Utils/Writer.js"


class NotesService{
  updateNote(updatedBody) {
    let note = appState.note
    note.body = updatedBody
    // @ts-ignore
    note.lastUpdated = timeago().format((new Date().toLocaleString()))
    saveState('notes', appState.notes)
    appState.emit('note')
    
  }
  deleteNote(noteID) {
    let activeNote = appState.notes.findIndex(note => note.id == noteID)
    appState.notes.splice(activeNote, 1)
    saveState('notes', appState.notes)
    appState.emit('notes')
    setHTML('centerPage', `<h1 class="text-center text-light mt-5"><em>wRyte something down</em></h1>`)
    Pop.toast('Note deleted!','success','top',3000,false)
  }
  constructor(){
    
  }
  createNote(formData) {
    let note = new Note(formData)
    appState.notes.push(note)
    saveState('notes', appState.notes)
    appState.emit('notes')
    Pop.toast('Note created!','success','top',3000,false)
  }
}

export const notesService = new NotesService