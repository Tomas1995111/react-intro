import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter completed={12} total={24}/>
      <TodoSearch />

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton />

      </div>
       );
      }

export default App;
