import './App.css';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="mx-auto pt-8 bg-black h-screen">
      <Sidebar/>
      <h1 className='text-4xl text-center'>Main Content</h1>
    </div>
  );
}

export default App;

