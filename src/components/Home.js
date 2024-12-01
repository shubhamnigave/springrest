import React from 'react';
import {Container,Button} from 'reactstrap';

const Home=()=>{
    return(
        <div>
            
                     <Container className='text-center'>
                <h1>Welcome to My Youtube Website</h1>
                <p>This is developed by Code India by Shubham, to Learn
                    backend in SpringBoot and Front End in React.
                </p>
       
                    <Button color="primary" outline>Visit our YouTube Channel</Button>
                </Container>
                


        </div>

    )
}
export default Home;