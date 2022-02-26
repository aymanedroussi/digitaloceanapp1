import React from 'react';
import { getSession } from 'next-auth/react';
import RemisForm from '../components/RemisForm';
import { useRouter } from 'next/router';

const remis = ({data}) => {
    
    
  return <RemisForm dataProps={data}></RemisForm>;
};

export default remis;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    let data=context.query;
  
    if(data.id==undefined){
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        };
    }
    if (!session) {
       
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }
    else if(session.user!=undefined){
        if(session.user.image!='ROLE_MENAGE'){
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