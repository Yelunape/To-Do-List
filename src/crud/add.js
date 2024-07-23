import { db } from "../main"


const data = document.querySelector('#data')

export const addTask=()=>{
    if (!data.value) {
        alert('Ingresa una tarea')
    }else{
        db.push({task:data.value, edit:'editClick', delete:'deleteClick'})
        localStorage.setItem('db', JSON.stringify(db))
    }
    data.value = ''
    location.reload()
}