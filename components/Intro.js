/*
// import bgImg from '../public/images/intro.jpeg';
import Image from "next/image";


const Intro = () => (
    <div style={{  margin: '0 auto', backgroundColor: 'blue' }}>
        {/!*<div style={{ margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>*!/}
            <div style={{ }}>
                <Image src= '/images/intro.jpeg' width='500' height='500'></Image>
            </div>
            <div style={{ marginTop: '-500px'}}>
                <h3> 제목 </h3>
                <h1 style={{ marginLeft: '0px'}}> Test header </h1>
                <h1 style={{ marginLeft: '100px'}}> Test header </h1>
            </div>
        {/!*</div>*!/}
    </div>
)

export default Intro;
*/

import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Image from "next/image";


export default function About() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Paper elevation={3}>
                    <Image src= '/images/intro.jpeg' width='500' height='500'></Image>
                    <Box>
                        <Typography variant="h6" component="h1" gutterBottom>
                            이제는 말할수 있다 -
                        </Typography>
                        <Typography variant="h4" component="h4" gutterBottom>
                            석류랑
                        </Typography>
                        <Typography variant="h4" component="h4" gutterBottom>
                            달리아랑
                        </Typography>
                        <Typography variant="h4" component="h4" gutterBottom ml={'100px'}>
                            그렇고 그런 사이래
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
