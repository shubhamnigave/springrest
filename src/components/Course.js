import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
const Course=({course})=>{
return(

    <Card className='text-center'>
        <CardBody>
            <CardTitle className="fw-bold">{course.title}</CardTitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color="warning" >Update</Button>&nbsp;&nbsp;&nbsp;
                <Button color= "danger">Delete</Button>
            </Container>
        </CardBody>
        </Card>
    


)
}
export default Course;