import { useState } from "react";

export default function InputForm({addTodo}){
    const [value, setValue] = useState('');
    function handleSubmit(e){
        e.preventDefault()
        setValue('')
        addTodo({
            id: Date.now(),
            title: value,
            completed: false
        })
    }

    return(
        <form className="text-slate-50 border-white border-[1px] w-[320px] sm:w-2/3 lg:w-[600px] flex p-4 rounded-lg mt-4">
            <input value={value} onChange={(e) => setValue(e.target.value)} required type="text" className=" flex-1 bg-inherit outline-none border-none" placeholder="Create a new todo..." />
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}