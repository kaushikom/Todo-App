export default function Todo({todo, activeView, deleteTodo, updateCompleted}){
console.log('Checked :',todo.completed);
const handleDelete = () => {
    deleteTodo(todo.id);
}
const handleUpdate = () => {
    updateCompleted(todo.id);
}
    return(
<li className={`flex w-full items-center gap-4 px-4 border-b-[0.5px] border-slate-50 border-opacity-25 py-2 ${(todo.completed && activeView === 'All')? 'opacity-60' : ''}`}>
    <input className="h-[20px] w-[20px] border-[0.5px] border-slate-50 border-opacity-25 appearance-none bg-slate-900 checked:appearance-auto accent-green-600" type="checkbox" checked= {todo.completed} onChange={handleUpdate} id={todo.id}/>
    <label htmlFor= {todo.id}>{todo.title}</label>
    <button onClick={handleDelete} className="ml-auto text-2xl" >x</button>
    
</li>
    )
}