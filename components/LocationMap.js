// const style

/*
const LocationMap = () => (
    <div style={{ display: 'flex', width: '95%', margin: '0 auto', backgroundColor: 'red' }}>
        Info
    </div>
)

export default LocationMap;*/

import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

import Link from '../src/Link';

export default function LocationMap() {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5213937,126.9838961),
            level: 5
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(37.5213786,126.9838787);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Paper elevation={3} id={'map'} style={{width: "500px", height: "400px"}}>
                    test
                </Paper>

                <Link href='http://kko.to/uepuFiT4o'>
                    <Image src= '/images/kakao_map.png' width='100' height='50'/>
                </Link>
                <Link href='tel:01097371233'>
                    010-9737-1233
                </Link>
            </Box>
        </Container>
    )
};
