import React, { Fragment } from 'react'
import { Button, Container, Form, FormGroup, Input} from 'reactstrap'


const Addcourse=()=>{
    return(

<Fragment>
    <h1 className='text-center my-3'>Fill Course Detail</h1>
    <Form>
        <FormGroup>
            <label for="courseId">Course Id</label>
            <Input 
            type="number" 
            name="courseId"  
            id="courseId"  
            placeholder="Enter Id here" />
        
        </FormGroup>
        <FormGroup>
            <label for="title">Course Title</label>
            <Input 
            type="text"   
            id="title"  
            placeholder="Enter Title here" />
        </FormGroup>
        <FormGroup>
            <label for="description">Course Decription</label>
            <Input 
            type="textarea" 
            name="courseId"  
            id="description"  
            placeholder="Enter Description here" 
            style={{height:100}}/>        
        </FormGroup>
        <Container className='text-center'>
            <Button color="success">Add Course</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="warning">Clear</Button>
        </Container>
    </Form>
    
</Fragment>
    )
}
export default Addcourse;