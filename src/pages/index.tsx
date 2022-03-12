import React from 'react';
import type {InferGetStaticPropsType, NextPage} from 'next';
import Head from 'next/head';

import {styled} from '@style/createStyles';
import Layout from '@com/Layout';
import Link from 'next/link';
import {getConfig, getAllPosts} from '@libs';
import {SocialButtonCollection} from '@com/organisms';
import {Button} from '@com/atoms';
import {ArrowLeftIcon, ArrowRightIcon} from '@radix-ui/react-icons';

const Box = styled('div', {});

const Text = styled('p', {
  fontFamily: '$pretendard',
  color: '$hiContrast',
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

function Home({config, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout config={config}>
      <Box css={{paddingY: '$6'}}>
        <Container size={{'@initial': '1', '@bp1': '2'}}>
          <Text as='h1'>{config.title || ''}</Text>
          <Text>{config.subtitle}</Text>
          <SocialButtonCollection social={config.social} />

          <section>
            <h2>Blog</h2>
            <ul>
              {posts.map(({slug, date, title}) => (
                <li key={slug} style={{marginBottom: '20px'}}>
                  <Link href={`/p/${slug}`}>
                    <a>
                      {title}
                      <br />
                      {date}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <Button>
            <ArrowLeftIcon />
            Prev
          </Button>
          <Button>
            Next
            <ArrowRightIcon />
          </Button>
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const posts = getAllPosts(['slug', 'title', 'description', 'date', 'img']);

  // console.debug(config);

  return {
    props: {
      config: {...config},
      posts,
    },
  };
}

export default Home;
