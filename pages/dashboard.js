import React from 'react';
import { getSession } from 'next-auth/react';
import TableLinge from '../components/TableLinge';

export default function dashboard(){
  return (
  <TableLinge></TableLinge>
    );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
      return {
          redirect: {
              destination: '/auth',
              permanent: false,
          },
      };
  }
  return {
      props: { session },
  };
}