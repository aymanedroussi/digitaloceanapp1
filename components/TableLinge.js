import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import CreateLingeButton from './CreateLingeButton';
import { useSession } from 'next-auth/react';
import LingeComponent from './LingeComponent';
import axios from 'axios';

const TableLinge = () => {
    const [size,setSize]=useState(1);
const onclickPagination=(page)=>{
    getlinges(page);
}
async function getAllLinges(){
    await axios.get(`/api/linge/getall`,{
       headers: {
         'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
       }
      }).then(response => {
       setSize(response.data.linges);
     });

   }
const { data: session } = useSession();
const [dataLinges,setData]=useState([]);
async function getlinges(id){
        
    if(id==undefined){
      id=1;
    }   
    
   await axios.get(`/api/linge/${id}`,{
      headers: {
        'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
      }
     }).then(response => {
      setData(response.data.linges);
    }); }
    async function updateStatus(id,type){
        
        await axios.get(`/api/linge/${type}/${id}`,{
            headers:{
              'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
            }
           }).then(response => {
              
               let newdatas=dataLinges.map((mydata)=>{
                   if(mydata._id==id){
                      
                    return {...mydata,status:response.data.linge.status,dateTraitement:response.data.linge.dateTraitement,tempsTraitement:response.data.linge.tempsTraitement}
                    
                   }
                   return mydata;
               });
               setData(newdatas);
          });
    } 
    
    async function deleteMethod(id){
        await axios.get(`/api/linge/delete/${id}`,{
            headers: {
              'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
            }
           }).then(response => {
            let newdatas=dataLinges.filter((mydata)=>{
               return mydata._id!=id
            });
            setData(newdatas);
               }
               
          ).catch((e)=>console.log(e));
    } 
    const traitementHandle=async (id)=>{
        await updateStatus(id);
        await getlinges();
    

    }

    const deleteHandle=async (id)=>{
        await deleteMethod(id);
    }

useEffect( ()=>{
    async function init(){
        await getlinges();
        await getAllLinges();
    }
    init();
   
},[])
        
const clickedsurPlace=async (id)=>{
    await updateStatus(id,"updateStatusSurPlace");
    await getlinges();
}
const envoyerclicked=async (id)=>{
    await updateStatus(id,"updateStatusEnvoye");
    await getlinges();

}

const marquecommetraited=async(id)=>{
    await updateStatus(id,"update");
    await getlinges(); 
   
    
}
  return (

    <div className="grid place-items-center h-screen">
  {session!=undefined && (session.user.image=='ROLE_MENAGE' && (<CreateLingeButton></CreateLingeButton>))} 
    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
        <header className="px-5 py-4 border-b border-gray-100">
           <div><h2 className="font-semibold text-gray-800 titleLinge">Liste de linge à traiter </h2>
        </div>
        </header>
        <div className="p-3">
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                             <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Actions</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Statut</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Nom du service </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Nom du ménage </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Nom du patient </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Nombre de pièces à laver</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Etat de linge</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Type de linge</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Date Envoie</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">HEURE ENVOIE</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Date de récupération prévue</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Heure de récupération prévue</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Commentaire</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Date de traitement</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Temps du traitement</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Livré au patient</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Date de remise</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Huere de remise</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Autres commentaires</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                    {dataLinges.map((linge)=>{
        return (<LingeComponent key={Math.random()} marquetraited={marquecommetraited} role={session!=undefined && (session.user.image)} data={linge}  clickedsurPlace={clickedsurPlace}  envoyerclicked={envoyerclicked}></LingeComponent>)
    })}
                      
                      

                    
                    </tbody>
                </table>
            </div>
            <Pagination onClickHandler={onclickPagination} size={size} ></Pagination>  <p className='textBold'><span className='spanOrange'>1 - En cours de traitement /</span><span className='spanBlue' > 2 - Traité / </span><span className="spanGreen">3 - Remis</span></p>
        </div>
        
    </div>
    
    </div>
  
    );
};

export default TableLinge;
