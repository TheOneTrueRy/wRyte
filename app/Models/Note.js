import { generateId } from "../Utils/generateId.js"


export class Note{
  constructor(data){
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.date = data.date || new Date().toLocaleDateString('en-US')
    this.body = data.body || ''
    this.lastUpdated = data.lastUpdated
  }

  get ActiveNoteTemplate(){
    return `
  <div class="container-fluid hundo">
    <div class="row hundo pb-5" id="noteRow">
      <div class="col-8 offset-2 noteCard rounded hundo">
        <div class="row hundo">
          <div class="col-4 ps-4 pt-4">
            <h2 id="noteTitle">${this.title}</h2>
            <h5>Date Created: ${this.date}</h5>
            <h5>Last Updated: ${this.lastUpdated}</h5>
          </div>
          <div class="col-6 d-flex align-items-center justify-content-center g-0">
            <textarea name="body" id="noteText" cols="100" rows="22" class="rounded" placeholder="Your notes go here!">${this.body}</textarea>
          </div>
          <div class="col-2 text-end pt-4 pe-4">
            <button id="deleteNote" onclick="app.notesController.deleteNote(${this.id})"><i class="mdi mdi-trash-can fs-2"></i></button>
          </div>
          </div>
        </div>
      </div>
  </div>
    `
  }
}