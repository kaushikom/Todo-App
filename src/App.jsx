import { useEffect, useState } from 'react'
import InputForm from './components/Input'
import ViewSelector from './components/ViewSelector.jsx'
import ClearButtons from './components/ClearButtons.jsx'
import Todo from './components/Todo'

const defaultTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: false
  },
  {
    id: 2,
    title: 'Get a Job',
    completed: false
  },
  {
    id: 3,
    title: 'Finish Assignments',
    completed: true
  }
]
function App() {
  const [allTodos, setAllTodos] = useState(defaultTodos);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeView, setActiveView] = useState('All');

  const clearAll = () => {
    setAllTodos([]);
  }
 const addTodo = (todo) => {
  setAllTodos([...allTodos, todo]);
 }
 const deleteTodo = (id) => {
  const newTodos = allTodos.filter(todo => todo.id !== id);
  setAllTodos(newTodos);
 }
 const updateCompleted = (id) => {
  const newTodos = allTodos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  setAllTodos(newTodos);
 }
  const clearCompleted = () => {
    const active = allTodos?.filter(todo => !todo.completed);
    setAllTodos(active);
  }
  const updateActiveView = (view) => {
    console.log(view);
    setActiveView(view);
  };

useEffect(()=>{
  console.log('Active View :',activeView);
  console.log('Completed Todos :', completedTodos.length)
  
});
useEffect(() => {
    const active = allTodos.filter(todo => !todo.completed);
    setActiveTodos(active);
    const completed = allTodos.filter(todo => todo.completed);
    setCompletedTodos(completed);
}, [allTodos]);

  return (
   <div 
   onClick={()=>navigator.vibrate(10)}
   className='bg-slate-900 w-scree h-screen flex flex-col items-center relative text-slate-50 px-2' >
   <nav>
    <h1 className='text-white text-3xl font-bold mt-2' >Todo List</h1>
   </nav>
   <InputForm addTodo={addTodo}/>
   <main className=' border-white border-[1px] w-[320px] relative sm:w-2/3 lg:w-[600px] min-h-[350px] max-h-[400px] overflow-y-auto flex flex-col items-center my-5 rounded-lg shadow-2xl'>
   <ViewSelector activeView={activeView} updateActiveView={updateActiveView} />
   {(allTodos.length == 0 || (completedTodos.length == 0 && activeView === 'Completed')) ? 
   (<div className='w-full h-full flex flex-col items-center justify-center '>
   <img width="48" height="48" src="https://img.icons8.com/color/48/checked-2--v1.png" alt="checked-2--v1"/>
    <h1 className='text-xl'>No Tasks</h1>
    <p className='opacity-60'>Anything to add?</p></div>) : (
    <div className='h-full w-full max-h-full overflow-y-auto'>
   {activeView === 'All' && allTodos.map((todo)=><Todo updateCompleted={updateCompleted} deleteTodo={deleteTodo} todo={todo} key= {todo.id} activeView={activeView}/>) } 
   { activeView === 'Active' && activeTodos.map((todo)=><Todo updateCompleted={updateCompleted} deleteTodo={deleteTodo} todo={todo} key= {todo.id} activeView={activeView}/>) }
   {activeView === 'Completed' && completedTodos.map((todo)=><Todo updateCompleted={updateCompleted} deleteTodo={deleteTodo} todo={todo} key= {todo.id} activeView={activeView}/>)}
    </div>
    ) }
   <ClearButtons clearAll={clearAll} clearCompleted={clearCompleted} />
   </main>
   <footer className='mb-2 absolute bottom-2'>
    <p className='text-white'>Created by <a href="https://github.com/kaushikom" target='blank' className='hover:text-slate-300 underline font-bold'>Om Kaushik</a></p>
   </footer>
   </div>
  )
}

export default App
