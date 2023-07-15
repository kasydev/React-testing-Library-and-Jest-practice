
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {

  const todos = [

    { id: 1, title: 'wash dishes', completed: false, },
    { id: 2, title: 'make dinner', completed: true, },
  ];

  const firstValue = 0;
  return (
    <div className="App">

      {
        todos.map((todo)=>{

          return (<Todo key={todo.id} todo={todo}/>)
        })
      }
     
   { /*  <Counter initialCount={firstValue}/>*/}
    </div>
  );
}

export default App;
