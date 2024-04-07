
export default function ClearButtons({clearAll, clearCompleted}){
    return(
        <div className="py-2 sticky bg-slate-900 bottom-0 flex flex-wrap w-full justify-evenly border-t-[0.5px] border-slate-50 border-opacity-25" >
            <button onClick={clearAll} className="active:text-blue-400 outline-none font-bold border-none" >Clear All</button>
            <button onClick={clearCompleted} className="active:text-blue-400 outline-none font-bold border-none" >Clear Completed</button>
        </div>
    )
}