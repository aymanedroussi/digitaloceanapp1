
import React from 'react';
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Message from './Message';
import Progress from './Progress';
import Link from 'next/link';
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'

const FormRegister = () => {
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [radio,setRadio]=useState("ROLE_MENAGE")
   const [error,setError]=useState(false)
   const [success,setSuccess]=useState(false)
    const [showProgress,setProgress]=useState(false)
  
  

   const [message,setMessage]=useState('');
   const messageSuccess="votre compte a été créé avec succès"

    async function addUserApi(){
        const form={
            nom:nom,
            prenom:prenom,
            email:email,
            password:password,
            role:radio, // mdp admin "itmed2022admin"
            active:false
        }
        
        const res = await fetch('/api/users/add',{
            method: "POST",
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
          }).then(res => res.json()
           )
          .then(res => {
              if(res.error){
                setError(true);
                setSuccess(false)
                setMessage(res.error);
                setProgress(false);
                Nprogress.done();
              }else{
                  
                  if(res.status=="created"){
                    reformat();
                    setSuccess(true)
                    setError(false);
                    setProgress(false);
                    Nprogress.done();
                  }
                  else if(res.status=="exist"){
                    reformat();
                    setSuccess(false)
                    setError(true);
                    setMessage("Address Email exist déja");
                    setProgress(false);
                    Nprogress.done();}
                  else{
                    setError(true);
                    setSuccess(false)
                    setMessage("ERROR");
                    setProgress(false);
                    Nprogress.done();
                  }
                }
                  
              
           
          });
          
         
          
       
    }
    const addUser=(e)=>{
        e.preventDefault();
        setProgress(true);
        addUserApi();
        
    }
    
    const reformat=()=>{
        setNom('');
        setPrenom('');
        setEmail('');
        setPassword('');
    }

    const nomHandler=(e)=>{
        setNom(e.target.value);
    }
    const prenomHandler=(e)=>{
        setPrenom(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }



  return(
    <div className="grid place-items-center h-screen">         
    {showProgress && <Progress></Progress>}
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800  justify-center items-center">
       
    {error && <Message message={message} color="red"></Message> }
    {success && <Message message={messageSuccess} color="green"></Message> }
    <div className="px-6 py-4">
        
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">CLEANLINE</h2>
  

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Inscrivez-vous</p>

            <form onSubmit={addUser}>
            <div className="w-full mt-4">
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Nom" name="nom" value={nom} onChange={nomHandler} aria-label="nom"/>
                </div>
                <div className="w-full mt-4">
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Prénom" name="prenom" value={prenom} onChange={prenomHandler} aria-label="Prénom"/>
                </div>

                <div className="w-full mt-4">
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" name="email"  value={email} onChange={emailHandler} aria-label="Email Address" />
                </div>

                <div className="w-full mt-4">
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Mot de passe" name="password" value={password} onChange={passwordHandler} aria-label="Mot de passe" />
                </div>
                <div className="flex justify-center paddingSelect">
  
  <div className="form-check form-check-inline paddingRightRadio">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"  onClick={() => setRadio('ROLE_MENAGE')}  checked={radio === 'ROLE_MENAGE'}/>
    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Ménage</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"  onClick={() => setRadio('ROLE_BLANCHISSERIE')} checked={radio === 'ROLE_BLANCHISSERIE'}/>
    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">Blanchisserie</label>
  </div>
</div>
                <div className="flex items-center justify-between mt-4">

                    <button className="loginButton px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit">Envoyer</button>
                </div>
                <div className="flex justify-center">
                   
 
</div>
            </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">Vous avez déja un compte? </span>

            <Link href="/auth"><a className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"> Connectez vous ici </a></Link>
        </div>
    </div>
</div>
  );
};

export default FormRegister;
