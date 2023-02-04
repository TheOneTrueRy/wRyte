import { generateId } from "../Utils/generateId.js"


export class Note{
  constructor(data){
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.data = data.date || new Date().toLocaleDateString('en-US')
    this.body = data.body || ''
  }
}