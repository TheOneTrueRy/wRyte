import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"
import { setHTML } from "../Utils/Writer.js"


class NotesService{
  updateNote(updatedBody) {
    let note = appState.note
    note.body = updatedBody
    note.lastUpdated = new Date().toLocaleString()
    saveState('notes', appState.notes)
    appState.emit('note')
    
  }
  deleteNote(noteID) {
    let activeNote = appState.notes.findIndex(note => note.id == noteID)
    appState.notes.splice(activeNote, 1)
    saveState('notes', appState.notes)
    appState.emit('notes')
    setHTML('centerPage', '')
  }
  constructor(){
    
  }
  createNote(formData) {
    let note = new Note(formData)
    appState.notes.push(note)
    saveState('notes', appState.notes)
    appState.emit('notes')
  }
}

export const notesService = new NotesService