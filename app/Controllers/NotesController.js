import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawNotes(){

}

function _drawNote(){
  // NOTE document.getElementById('noteTitle').style.color = "this.color";
  let activeNote = appState.note
  setHTML('centerPage', activeNote.ActiveNoteTemplate)
  document.getElementById('noteTitle').style.color = appState.note.color
}

export class NotesController{
  constructor(){
    _drawNotes
  }

  SetActiveNote(noteID){
    let activeNote = appState.notes.find(note => note.id == noteID)
    appState.note = activeNote
    _drawNote()
  }
}