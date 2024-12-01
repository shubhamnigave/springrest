
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from'react-toastify';
import { Container, Row , Col} from 'reactstrap';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Course from './components/Course';
import Addcourse from './components/Addcourse';
import Allcourses from './components/Allcourses';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  const notify = () => {
    toast.error("Done",{
    position:"top-center",});
  };
  return(
    <div>
   <Router>
   <ToastContainer/>

<Container>

 <Header/>
 <Row>
   <Col md={4}>
   <Menu/>
   </Col>
   <Col md={8}>
   <Routes>
   <Route path="/"  Component={Home} exact />
   <Route path="/add-course" Component={Addcourse} exact/>
   <Route path="/view-courses" Component={Allcourses} exact/>
   </Routes>
   </Col>
 </Row>
</Container>


   </Router>
  </div>);
}

export default App;
