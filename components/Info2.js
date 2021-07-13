import userSWR from 'swr';
// import hello from ''
import React, { useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import Image from "next/image";

import Link from '../src/Link';
const init = () => {
    if(Kakao.isInitialized()) {
        return;
    }

    console.log('before init', Kakao.isInitialized());
    Kakao.init("194d203f9fed44b8d0edf6c4158b8863");
    Kakao.isInitialized();
    console.log('after init', Kakao.isInitialized());
}

const sendKakaoMessage = () => {
    init();

    console.log('here')
    Kakao.Link.createScrapButton({
        container: '#kakao-link-btn',
        requestUrl: 'https://developers.kakao.com',
    })
    // return;
    // const { data, error } = await userSWR('/api/test', fetcher);

    // console.log(data, error);

    return;
};

const Info = () => (
    <Container maxWidth="sm">
        <Box my={4}>
            <Box component = 'div'>
                <Link href='http://kko.to/uepuFiT4o'>
                    카카오 지도
                </Link>
            </Box>
            <Box>
                <Link href='tel:01097371233'>
                    전화 연결
                </Link>
            </Box>
            <Box>
                <Link href='http://qr.kakao.com/talk/UVtGcjnLd4AatuFKwq6z0iPx0D4-'>
                    카톡 연결
                </Link>
            </Box>
            <Box>
                <Link href='https://toss.im/_m/rsFw95zn'>
                    토스 연결
                </Link>
            </Box>
            <Box>
                <Link href='https://qr.kakaopay.com/281006011000000817056775'>
                    카카오 페이
               </Link>
            </Box>
            <Box>
                <button onClick={sendKakaoMessage} id={'kakao-link-btn'}>
                    <Image src= '/images/kakaolink_btn.png' width='65' height='65'></Image>
                </button>
            </Box>
            <Box id={'disqus_thread'}>
            </Box>
        </Box>
    </Container>
)


export default Info;
