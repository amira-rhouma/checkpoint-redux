import AddTask from './Component/AddTask/AddTask'
import ListTask from './Component/ListTask/ListTask'
import './App.css';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
       <h1 className="app"> Todo App </h1> 
       

        <AddTask/>
        <ListTask />
        
       
      </header>
    </div>
  );
}

export default App;
