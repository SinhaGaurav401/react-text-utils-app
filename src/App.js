import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title='Textutils' aboutText='About Us' />
      <div className="container">
      <TextForm heading='Enter text to Analyze below' />
      </div>
    </>
  );
}

export default App;
