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

const LONGITUDE = 37.5213937;
const LATITUDE = 126.9838961;

const elementId = 'map';

const createMap = (longitude, latitude) => {
    const container = document.getElementById(elementId);
    const options = {
        center: new kakao.maps.LatLng(longitude, latitude),
        level: 5
    };
    const map = new kakao.maps.Map(container, options);

    return map;
}

const createMarker = (longitude, latitude) => {
    const markerPosition  = new kakao.maps.LatLng(longitude, latitude);
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    return marker;
}

const LocationMap = () => {
    useEffect(()=>{
        const map = createMap(LONGITUDE, LATITUDE);
        const markerOfWeddingLocation = createMarker(37.5213786,126.9838787);

        markerOfWeddingLocation.setMap(map);
    }, [])

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Paper elevation={3} id={elementId} style={{width: "500px", height: "400px"}}>
                    test
                </Paper>
            </Box>
        </Container>
    )
}

export default LocationMap;
