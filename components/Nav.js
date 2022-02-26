import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import Link from 'next/link';
const Nav = () => {
  const router = useRouter();

  function logoutHandler() {
     signOut({ callbackUrl: '/auth' })
  }
  const { data: session, status } = useSession();
  
  return <header className="shadow-sm">
  <div className="max-w-screen-xl p-4 mx-auto">
    <div className="flex items-center justify-between space-x-4 lg:space-x-10">
      <nav className="hidden space-x-8 text-sm font-medium md:flex">
      {session && (<Link href='/dashboard'><a className='px-5 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg'>Gestion de linges</a></Link>) }

      {session && (session.user!=undefined && (session.user.image=='ROLE_ADMIN' && (<Link href='/gestioncompte'><a className='px-5 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg'>Gestion de comptes</a></Link>)) )  }

      </nav>

      <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
        {!session && <Link href="/auth"><a className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">Connexion</a></Link> }
      
        {!session ? <Link href="/register"><a className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">Inscription</a></Link> : <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg" onClick={logoutHandler}>Logout</button>}
      </div>

     
    </div>
  </div>
</header>
};

export default Nav;
