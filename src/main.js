import { getData } from "./crud/getAll"
import { addTask } from "./crud/add" 
import { deleteTask } from "./crud/delete"

export const db = JSON.parse(localStorage.getItem('db')) || []



 
getData()

const addClick = document.querySelector('.addClick')
const deleteClick = document.querySelectorAll('.deleteClick')

addClick.addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopImmediatePropagation()
    addTask()
})

deleteClick.forEach((button, i)=>{
  button.addEventListener("click", (e)=>{
    e.preventDefault()
    deleteTask(i)
  })
})
