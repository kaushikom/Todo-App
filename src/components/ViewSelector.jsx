
export default function ViewSelector({activeView, updateActiveView}){
    return(
        <div className="p-2 flex w-full justify-evenly items-center mt-2 border-b-[0.5px] border-slate-50 border-opacity-25">
        <button onClick={()=>updateActiveView('All')} className={`outline-none font-bold ${activeView === 'All' ? 'text-blue-400' : ''}`} >All</button>
        <button onClick={()=>updateActiveView('Active')} className={`outline-none font-bold ${activeView === 'Active' ? 'text-blue-400' : ''}`}>Active</button>
        <button onClick={()=>updateActiveView('Completed')} className={`outline-none font-bold ${activeView === 'Completed' ? 'text-blue-400' : ''}`}>Completed</button>
       </div>
    )
}