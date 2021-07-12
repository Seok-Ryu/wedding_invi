import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import Image from "next/image";

import Link from '../src/Link';

const Info = () => (
    <Container maxWidth="sm">
        <Box my={4}>
            <Link href='http://kko.to/uepuFiT4o'>
                카카오 페이
            </Link>
            <Link href='tel:01097371233'>
                전화 연결
            </Link>
            <Link href='http://qr.kakao.com/talk/UVtGcjnLd4AatuFKwq6z0iPx0D4-'>
                카톡 연결
            </Link>
            <Link href='https://toss.im/_m/rsFw95zn'>
                토스 연결
            </Link>
        </Box>
    </Container>
)

export default Info;
