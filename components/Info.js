import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import Image from "next/image";

import Link from '../src/Link';

const Info = () => (
    <Container id={'info'} disableGutters={true} >
        {/*<Box my={4} margin={0}>
            <Paper variant="outlined" square >
                <Image src= '/images/info.png' width='720' height='875'></Image>
            </Paper>
        </Box>*/}
        <Paper variant="outlined" square >
            <Image src= '/images/info.png' width='720' height='880'></Image>
        </Paper>
    </Container>
)

export default Info;
