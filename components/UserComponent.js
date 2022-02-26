import React from 'react';

const UserComponent = ({data,clicked,deletedUser}) => {

    const traitementHandle=()=>{
        clicked(data._id);
    }
    const deleteuser=()=>{
        deletedUser(data._id);
    }
    console.log(data.active)
  return <tr>
 
  <td className="font-semibold text-center">
{data.active==false &&<button onClick={traitementHandle}  className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
Activer
</button>}
<button onClick={deleteuser} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
Supprimer
</button>
</td>
<td className="p-2 whitespace-nowrap font-semibold text-center">
{data.active==false ? (


<span className="mx-1 spanRed">Non active</span>
) : (


<span className="mx-1 spanGreen" >Active</span>
 )}

</td>
<td className="p-2 whitespace-nowrap">
    <div className="text-left font-medium text-500">{data.nom}</div>
</td>
<td className="p-2 whitespace-nowrap">
    <div className="text-lg text-left">{data.prenom}</div>
</td>
<td className="p-2 whitespace-nowrap">
    <div className="text-lg text-left">{data.email}</div>
</td>
<td className="p-2 whitespace-nowrap">
    <div className="text-lg text-left">{data.role=='ROLE_BLANCHISSERIE' ? 'BLANCHISSERIE':(data.role=='ROLE_MENAGE'?'MENAGE':'ADMIN') }</div>
</td>

</tr>;;
};

export default UserComponent;
