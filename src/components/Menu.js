import React from 'react'
import { ListGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu=() => {
return(
    <ListGroup >
        <Link className='list-group-item list-list-group-item-action' to="/"
            tag="a" action>Home</Link>
        <Link className='list-group-item list-list-group-item-action' to="/add-course"
            tag="a" action>Add Course</Link>
        <Link className='list-group-item list-list-group-item-action' to="/view-courses"
            tag="a" action>View Courses</Link>
        <Link className='list-group-item list-list-group-item-action' to="#"
            tag="a" action>About</Link>
        <Link className='list-group-item list-list-group-item-action' to="#"
            tag="a" action>Contact</Link>       
    </ListGroup> 
)
}
export default Menu;