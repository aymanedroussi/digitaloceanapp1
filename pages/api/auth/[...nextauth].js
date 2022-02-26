
/*
const User=require('../../../models/User')

*/


import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { verifyPassword } from '../../../lib/auth';
import connectToDatabase from "../../../util/dbConnect"

const User=require('../../../models/User')
export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge:3600 // en secondes ( 1 heure )
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDatabase();
        
     
       /* if(!mongoose.connections[0].readyState){
          throw new Error('db Error')
        }
*/
        const user = await User.findOne({
          email: credentials.email,
        });

        if (!user) {
         
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          
          throw new Error('Could not log you in!');
        }

        else if(user.active==false){
          throw new Error("Votre compte n'est pas encore activé");
        }
        return {name:user.prenom.concat(` ${user.nom}`),email:user.email,image:user.role};
      },
    
    }),
    
  ],
  
  
  secret: "d4987c8d994e91b4af71c54b23a7f6f5",
  
  
  
  
});
