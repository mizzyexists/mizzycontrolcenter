import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Dash from './Dash';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';


const Main = () => {

  const { user, isLoading } = useUser();
  const router = useRouter()

  useEffect(() => {
    const checkForUser = async () => {
      const loggedUser = await user;
      if (!loggedUser && isLoading === false) {
        router.push('/api/auth/login');
      }
    }
    checkForUser();
  }, [isLoading, router, user])

  return (
    <div>
      <Head>
        <title>MizzyOps Command Center</title>
        <meta name="description" content="MizzyOps Command Center" />
        <link rel="icon" type="image/png" href="/MizzyLogoNew.png" />
      </Head>
      <main>
        { user ? (<Dash user={user}/>) : (<></>)}
      </main>
    </div>
  )
}

export default Main;