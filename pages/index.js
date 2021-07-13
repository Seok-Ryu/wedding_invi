/*
import Link from 'next/link'
import Intro from '../components/Intro';
import Info from '../components/Info';
import Story from '../components/Story'
import Story2 from '../components/Story_2'
import Gallery from  '../components/Gallery'
import Outro from '../components/Outro'

const Index = () => (
    <div style={ {display: 'block', width: '100%', margin: '0 auto', backgroundColor: 'aqua'} }>
        <Intro></Intro>
        <Info></Info>
        <Story></Story>
        <Story2></Story2>
        <Gallery></Gallery>
        <Outro></Outro>
    </div>
);

export default Index;
*/

import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Link from '../src/Link';
import Intro from '../components/Intro';
import Info from '../components/Info';
import Info2 from '../components/Info2';
import LocationMap from "../components/LocationMap";

const init = () => {

};

export default function Index() {
    init();
    return (
        <Container maxWidth="md" disableGutters={true}>
            <Box p={0} m={0}>
                <Intro></Intro>
                <Info></Info>
                <LocationMap></LocationMap>
                <Info2></Info2>
                {/*<Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <ProTip />
                <Copyright />*/}
            </Box>
        </Container>
    );
}
