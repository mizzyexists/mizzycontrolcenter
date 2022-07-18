import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Dash from './Dash';
import { useUser } from '@auth0/nextjs-auth0';


const Main = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useUser();

  useEffect (() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>My Command Center</title>
        <meta name="description" content="My Command Center" />
        <link rel="icon" type="image/png" href="/MizzyLogoNew.png" />
      </Head>
      <main>
        {
          loggedIn ? (<Dash loggedIn={loggedIn} setLoggedIn={setLoggedIn} />) :
          (<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />)
        }
      </main>
    </div>
  )
}

export default Main;