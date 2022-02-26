import React from 'react';
import UserComponent from './UserComponent';
import { useState,useEffect } from 'react';
import Pagination from '../components/Pagination';
import axios from 'axios';

const TableCompte = () => {
    

    const [dataUsers,setData]=useState([]);
    const [size,setSize]=useState(1);
    
    async function updateStatus(id){
        await axios.get(`/api/users/update/${id}`,{
            headers: {
              'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
            }
           }).then(response => {
               let newdatas=dataUsers.map((mydata)=>{
                   if(mydata._id==id){
                    return {...mydata,active:!mydata.active}
                    
                   }
                   return mydata;
               });
               setData(newdatas);
          });
    } 
    async function deleteMethod(id){
        await axios.get(`/api/users/delete/${id}`,{
            headers: {
              'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
            }
           }).then(response => {
            let newdatas=dataUsers.filter((mydata)=>{
               return mydata._id!=id
            });
            setData(newdatas);
               }
               
          );
    } 

    const onclickPagination=(page)=>{
    getUsers(page);
    }

    const traitementHandle=async (id)=>{
       await updateStatus(id);
    }

    const deleteHandle=async (id)=>{
         await deleteMethod(id);
    }
    
    async function getAllUsers(){
        await axios.get(`/api/users/getall`,{
           headers: {
             'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
           }
          }).then(response => {
           setSize(response.data.users);
         });
    
       }
    async function getUsers(id){
        
        if(id==undefined){
          id=1;
        }   
        
       await axios.get(`/api/users/${id}`,{
          headers: {
            'Access-Control-Allow-Origin':'*' //the token is a variable which holds the token
          }
         }).then(response => {
            let newUsers=response.data.users.filter((user)=>{
                if(user.role!="ROLE_ADMIN"){
                    return user;
                }
            })
          setData(newUsers);
        }); }

    useEffect( ()=>{
        
        async function init(){
            await getUsers();
            await getAllUsers();
        }
        init();
       
    },[])

  return (
    <div className="grid place-items-center h-screen">
   
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
          <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 titleLinge">Gestion de comptes</h2>
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
                                  <div className="font-semibold text-left">Nom  </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">Prénom </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">Email </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">Role </div>
                              </th>
                             
                        
  
                          </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                      {dataUsers.map((user)=>{
          return (<UserComponent key={Math.random()}  data={user} clicked={traitementHandle} deletedUser={deleteHandle}></UserComponent>)
      })}
                        
                        
  
                      
                      </tbody>
                  </table>
              </div>
              <Pagination onClickHandler={onclickPagination} size={size} ></Pagination>
          </div>
          
      </div>
      
      </div>
  );
};

export default TableCompte;
