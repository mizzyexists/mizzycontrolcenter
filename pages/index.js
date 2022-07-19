import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Dash from './Dash';
import Login from './Login';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

const Main = () => {
  const { user, isLoading } = useUser();

  return (
    <MantineProvider theme={{colorScheme:"dark", primaryColor: "violet"}}>
      <ModalsProvider>
      <div>
        <Head>
          <title>Morpheus</title>
          <meta name="description" content="Morpheus" />
          <link rel="icon" type="image/png" href="/MizzyLogoNew.png" />
        </Head>
        <main>
          { user && isLoading == false && <Dash user={user}/> }
          { !user && !isLoading && <Login /> }
        </main>
      </div>
      </ModalsProvider>
    </MantineProvider>
  )
}

export default Main;