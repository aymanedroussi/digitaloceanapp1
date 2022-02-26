import React from 'react';
import TableCompte from '../components/TableCompte';
import { getSession } from 'next-auth/react';

const gestioncompte = () => {
  return <TableCompte></TableCompte>;
};

export default gestioncompte;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  let data=context.query;
  if (!session) {
     
      return {
          redirect: {
              destination: '/auth',
              permanent: false,
          },
      };
  }
  else if(session.user!=undefined){
      if(session.user.image=='ROLE_MENAGE' || session.user.image=='ROLE_BLANCHISSERIE'){
          return {
              redirect: {
                  destination: '/dashboard',
                  permanent: false,
              },
          };
      }else{
          return {
              props: { session,data },
          }
  }
  
  }
  
}