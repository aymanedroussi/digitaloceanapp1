import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Select from 'react-select';
import axios from 'axios';
import Progress from './Progress';
import Message from './Message';
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'


const RemisForm = ({dataProps}) => {

  const id=dataProps.id
  
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)
     const [showProgress,setProgress]=useState(false)
     const [message,setMessage]=useState('');
     const [messageSuccess,setMessageSuccess]=useState("Le linge a été remis avec succès")
     const [options,setOptions] =useState([]);
     const [selectedOption, setSelectedOption] = useState({value:dataProps.selectedOption,label:dataProps.selectedOption});
     const [commentaire,setcommentaire]=useState(dataProps.commentaire);
     useEffect(()=>{
        getPatients();
      },[])  
     
     const getPatients=async()=>{
        await axios.get(`/api/patient/getall/`,{
            headers: {
              'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
            }
           }).then(response => {
            setOptions(response.data.patients.map((patient)=>{
                return {value:`${patient.firstName} ${patient.lastName}`,label:`${patient.firstName} ${patient.lastName}`}
            }));
          });  
      }
      const reformat=()=>{
        setcommentaire('');
        setSelectedOption({});
      };

      async function updateStatus(id,data){
        const res = await fetch(`/api/linge/update/${id}`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()).then(
        (res)=>{
         
            if(res.error){
              setError(true);
              setSuccess(false)
              setMessage(res.error);
              setProgress(false);
              Nprogress.done();
            }else{
                
                  reformat();
                  setSuccess(true)
                  setError(false);
                  setProgress(false);
                  Nprogress.done();
                
        }
      
    })}
 
   
    
    const remttreForm= (e)=>{
      e.preventDefault();
      updateStatus(id,{patientNomRemis:selectedOption.value,commentaire2:commentaire});
       
    }
  
  return (
    <div className='grid place-items-center h-screen'>
    {showProgress && <Progress></Progress>}
    {error && <Message message={message} color="red"></Message> }
{success && <Message message={messageSuccess} color="green"></Message> }
<section className="w-full max-w-4xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Remettre le linge</h2>
   

    <form onSubmit={remttreForm}>
    <div className="mt-6 ">
        <div className="items-center -mx-2 md:flex">
  

            <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">NOM DU PATIENT</label>
                <Select
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
  />              
        </div>
        </div>
          <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Ajouter un Commentaire</label>

                <textarea value={commentaire}  onChange={(e)=>setcommentaire(e.target.value)} className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>
        <div className="flex justify-center mt-6">
            <button className="marginbuttons px-4 py-2 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Confirmer</button>
           <Link href="/dashboard"><button type="button" className="px-4 py-2 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Retour</button></Link>
        </div>

    </div>
    </form>
</section>
  
</div>
    )
};

export default RemisForm;
