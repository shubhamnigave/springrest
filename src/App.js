
import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from'react-toastify';
import Home from "./components/Home";
function App() {
  const notify = () => toast.error("Done");
  return(
    <div>
   <ToastContainer/>
   <Home></Home>
  </div>);
}

export default App;
