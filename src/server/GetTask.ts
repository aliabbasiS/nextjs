"use server"
export const GetTask=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/todos")
    const data=await res.json()
    console.log(data)
    return data
}   
interface task{
    id:number
    title:string
    completed:boolean
}

export const createTask=async(task:task)=>{
    console.log(task)
}