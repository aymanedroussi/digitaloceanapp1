import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router'
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'
import Progress from './Progress';
import Message from './Message';


const FormLogin = () => {
    const router = useRouter()


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false)
    const [messageError,SetMessageError]=useState('')
    const [showProgress,setProgress]=useState(false)
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    async function submitHandler(event) { 

        event.preventDefault();
        setProgress(true);
        await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
    }).then((res)=>{
        
        if(res.error=='db Error'){
            setError(true)
            SetMessageError('Vérifier votre connexion avec la Base de donnée!')
            setProgress(false);
            Nprogress.done();
        }
        else if(res.error=='No user found!'){
            setError(true)
            SetMessageError('Aucun utilisateur trouvé !')
            setProgress(false);
            Nprogress.done();
        }else if(res.error=='Could not log you in!'){
            setError(true)
            SetMessageError('Le Mot de passe est incorrect!')
            setProgress(false);
            Nprogress.done();
        }else if(res.error=="Votre compte n'est pas encore activé"){
            setError(true)
            SetMessageError("Votre compte n'est pas encore activé!")
            setProgress(false);
            Nprogress.done();
        }
        else if(res.url==null){
            setError(true)
            SetMessageError('Vérifiez la connexion avec votre base de donnée!')
            setProgress(false);
            Nprogress.done();
        }
        else{
            
            router.push('/dashboard');
        }
        }).catch((err)=>console.log("error"))};
    
  return (
    <div className="grid place-items-center h-screen">   
    {showProgress && <Progress></Progress>} 

    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800  justify-center items-center">
    {error && <Message message={messageError} color="red"></Message> }
        <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">CLEANLINE</h2>


            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Connectez-vous</p>

            <form onSubmit={submitHandler}>
                <div className="w-full mt-4">
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" value={email} onChange={emailHandler}/>
                </div>

                <div className="w-full mt-4">
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" value={password} onChange={passwordHandler}/>
                </div>

                <div className="flex items-center justify-between mt-4">
                

                    <button className="loginButton px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit" >Login</button>
                </div>
            </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">Nouveau utilisateur? </span>

           <Link href="/register"><a className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Créer un compte ici</a></Link>
        </div>
    </div>
</div>
  );
};

export default FormLogin;
