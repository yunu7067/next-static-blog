import React, {useLayoutEffect} from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';

import {Button} from '@com/atoms';
import StitchesLogo from '@com/atoms/StitchesLogo';
import {styled} from '@style/createStyles';

const Box = styled('div', {});

const Text = styled('p', {
  fontFamily: '$pretendard',
  color: '$hiContrast',
});

const Link = styled('a', {
  fontFamily: '$pretendard',
  textDecoration: 'none',
  color: '$purple600',
});

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box css={{paddingY: '$6'}}>
        <Head>
          <title>Use Stitches with Next.js</title>
        </Head>
        <Container size={{'@initial': '1', '@bp1': '2'}}>
          <StitchesLogo />
          <Text as='h1'>Hello, from Stitches.</Text>
          <Text>
            For full documentation, visit <Link href='https://stitches.dev'>stitches.dev</Link>.
          </Text>
          <Button>
            테스트
            <svg viewBox='0 0 32 32' fill='none' stroke='currentcolor' strokeWidth='2'>
              <path d='M22 6 L30 16 22 26 M30 16 L2 16'></path>
            </svg>
          </Button>
        </Container>
      </Box>
      {/* <button className={}>타이포그래피: ‘Typography’, 1972. @ㅇ0ㅇ ₩0 〈응♥〉 『힣♪』</button>
          <button className={}>타이포그래피: ‘Typography’, 1972. @ㅇ0ㅇ ₩0 〈응♥〉 『힣♪』</button> */}
    </div>
  );
};

export default Home;