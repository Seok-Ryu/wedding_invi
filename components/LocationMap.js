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
    // note: zoom disable
    map.setZoomable(false);

    return map;
}

const createMarker = (longitude, latitude, type, map) => {
    const position  = new kakao.maps.LatLng(longitude, latitude);

    if (type === 'wed') {
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; // 마커이미지의 주소
        const imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기
        // const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        const marker = new kakao.maps.Marker({
            image: markerImage,
            position,
            map,
        });

        return marker;
    }

    const marker = new kakao.maps.Marker({
        position,
        map,
    });

    return marker;
}

const LocationMap = () => {
    useEffect(()=>{
        const map = createMap(LONGITUDE, LATITUDE);
        const markerOfWeddingLocation = createMarker(37.5213786,126.9838787, 'wed');
        const station = createMarker(37.5225786,126.9745787);

        markerOfWeddingLocation.setMap(map);
        station.setMap(map);
    }, [])

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Paper elevation={2} id={elementId} style={{width: "500px", height: "400px"}}>
                    test
                </Paper>
            </Box>
        </Container>
    )
}

export default LocationMap;
