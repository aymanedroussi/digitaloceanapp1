import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import FormLogin from '../components/FormLogin';
import Message from '../components/Message'
 function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        
        router.replace('/dashboard')
        console.log(session.user)
        
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);


  if(!isLoading){
  return (<FormLogin></FormLogin>
  )}
  return (<></>)
}

export default AuthPage;