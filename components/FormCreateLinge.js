import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Select from 'react-select';
import axios from 'axios';
import Progress from './Progress';
import Message from './Message';
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'
import { useSession } from 'next-auth/react';

const FormCreateLinge = ({dataProps}) => {
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)
     const [showProgress,setProgress]=useState(false)
   
     const { data: session, status } = useSession();

    const [message,setMessage]=useState('');
    const [messageSuccess,setMessageSuccess]=useState("Le linge a été créé avec succès")

    const reformat=()=>{
        setserviceNom('');
        setSelectedOption(null);
        setquantity('');
        settype('');
        setdateEnvoi('');
        settempsEnvoi('')
        setdateRecuperation('')
        settempsRecuperation('')
        setcommentaire('')
      
    }
    const [options,setOptions] =useState([]);
      const [selectedOption, setSelectedOption] = useState({value:dataProps.selectedOption,label:dataProps.selectedOption});

    const [serviceNom,setserviceNom]=useState(dataProps.serviceNom);
    const [quantity,setquantity]=useState(dataProps.quantity);
    const [type,settype]=useState(dataProps.type);
    const [dateEnvoi,setdateEnvoi]=useState(dataProps.dateEnvoi);
    const [tempsEnvoi,settempsEnvoi]=useState(dataProps.tempsEnvoi);
    const [dateRecuperation,setdateRecuperation]=useState(dataProps.dateRecuperation);
    const [etat,setEtat]=useState(dataProps.etat);
    const [tempsRecuperation,settempsRecuperation]=useState(dataProps.tempsRecuperation);
    const [commentaire,setcommentaire]=useState(dataProps.commentaire);
    
    
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
      useEffect(()=>{
        getPatients();
      },[])
      const addLinge=async (data)=>{

        const res = await fetch('/api/linge/add', {
            method: 'POST',
            body: JSON.stringify(data),
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
               else{
                 setError(true);
                 setSuccess(false)
                 setMessage("ERROR");
                 setProgress(false);
                 Nprogress.done();
               }
             }
      })}


      const createLinge=(e)=>{
e.preventDefault();

let responsableNom=session && (session.user && session.user.name) ;
let data={serviceNom:serviceNom,patientNom:selectedOption!=undefined ? (selectedOption.value):'' ,quantity:quantity,type:type,dateEnvoi:dateEnvoi,tempsEnvoi:tempsEnvoi,dateRecuperation:dateRecuperation,tempsRecuperation:tempsRecuperation,commentaire:commentaire,responsableNom:responsableNom,status:"En cours de traitement",etat:etat};
addLinge(data);
      }

   

  return <div className='grid place-items-center h-screen'>
        {showProgress && <Progress></Progress>}
        {error && <Message message={message} color="red"></Message> }
    {success && <Message message={messageSuccess} color="green"></Message> }
<section className="w-full max-w-4xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Ajouter un nouveau linge</h2>
       
  
        <form onSubmit={createLinge}>
        <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
         <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">NOM DU SERVICE</label>

                    <input value={serviceNom}  onChange={(e)=>setserviceNom(e.target.value)} name="service" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text"/>
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">NOM DU PATIENT</label>
                    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />                </div>
                <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Nombre de piéce à mettre en place</label>

                    <input value={quantity}  onChange={(e)=>setquantity(e.target.value)} type="number" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>
            <br></br>
            <div className="items-center -mx-2 md:flex">
        
                <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Etat de linge</label>

                    <select value={etat}  onChange={(e)=>setEtat(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option value="sale">sale</option>
                                <option value="propre" >propre</option>
                                <option value="infecté" >infecté</option>
                                
                            </select>                </div>
                            <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">TYPE DE LINGE</label>

                    <select value={type}  onChange={(e)=>settype(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option value="drap">drap</option>
                                <option value="housse de drap" >housse de drap</option>
                                <option value="oreiller" >oreiller</option>
                                <option value="serviette de douche" >serviette de douche</option>
                                <option value="douche" >douche</option>
                                <option value="serviette de main" >serviette de main</option>

                            </select>                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">DATE ENVOIE</label>

                    <input value={dateEnvoi}  onChange={(e)=>setdateEnvoi(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="date"/>
                </div>
                <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">HEURE ENVOIE</label>

                    <input value={tempsEnvoi}  onChange={(e)=>settempsEnvoi(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="time"/>
                </div>
             
            </div>
            <br></br>
            <div className="items-center -mx-2 md:flex">
         
                <div className="w-full mx-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">DATE DE RÉCUPÉRATION PRÉVUE
</label>

                    <input value={dateRecuperation}  onChange={(e)=>setdateRecuperation(e.target.value)} className="block  px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="date"/>
                </div>
             
                <div className="w-full mx-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Heure DE RÉCUPÉRATION PRÉVUE
</label>

                    <input value={tempsRecuperation}  onChange={(e)=>settempsRecuperation(e.target.value)} className="block  px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="time"/>
                </div>
                <div className="w-full mx-2 ">
             
                </div>
            </div>
            <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Ajouter un Commentaire</label>

                <textarea value={commentaire}  onChange={(e)=>setcommentaire(e.target.value)} className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>

            <div className="flex justify-center mt-6">
                <button className="marginbuttons px-4 py-2 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Ajouter</button>
               <Link href="/dashboard"><button type="button" className="px-4 py-2 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Retour</button></Link>
            </div>
        </div>
        </form>
    </section>
      
  </div>;
};

export default FormCreateLinge;
