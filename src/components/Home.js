import React from 'react';
import {Container,Button} from 'reactstrap';

const Home=()=>{
    return(
        <div>           
         <Container className='text-center'>
            <h1>Welcome to Code India Course Website</h1>
            <p>This is developed by Code India-Shubham, to Learn
              backend in SpringBoot and Front End in React.
            </p>
            <Button color="primary" outline>Start Using</Button>
            </Container>
        </div>

    )
}
export default Home;