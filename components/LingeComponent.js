import React, { useState } from 'react';
import Link from 'next/link';
const LingeComponent = ({role,data,clickedsurPlace,envoyerclicked,marquetraited}) => {
   
   const traitementHandle=()=>{
       clicked(data._id);
   }
  
   const surPlaceHandle=()=>{
    clickedsurPlace(data._id);
   }
   const envoyerSousTraitantHandle=()=>{
    envoyerclicked(data._id);
   }

   const marquerTraite=()=>{
    console.log("dd")
        marquetraited(data._id);
   }
   
  return  <tr>
 <td className="p-2 whitespace-nowrap">
    {role=='ROLE_MENAGE' && (data.status=='En cours de traitement' && (
  <Link href={`/addLinge?etat=${data.etat}&serviceNom=${data.serviceNom!=undefined ? data.serviceNom : ''}&selectedOption=${data.patientNom!=undefined ? data.patientNom : ''}&quantity=${data.quantity!=undefined ? data.quantity : ''}&type=${data.type!=undefined ? data.type : 'sale'}&dateEnvoi=${data.dateEnvoi!=undefined ? data.dateEnvoi.substring(0,10) : ''}&tempsEnvoi=${data.tempsEnvoi!=undefined ? data.tempsEnvoi : ''}&dateRecuperation=${data.dateRecuperation!=undefined ? data.dateRecuperation.substring(0,10) : ''}&tempsRecuperation=${data.tempsRecuperation!=undefined ? data.tempsRecuperation : ''}&commentaire=${data.commentaire!=undefined ? data.commentaire : ''}`}><button   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
Modifier
</button></Link>

)) }
  
  {role=="ROLE_MENAGE" && (data.status=='traité' &&(
    <Link href={`/remis?id=${data._id}`}><button   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
  Remetre le linge
  </button></Link>
))
  }

    {role=='ROLE_BLANCHISSERIE' && (data.status=='En cours de traitement sur place' && (
<button onClick={marquerTraite} className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
Marquer comme traité
</button>

)) }
   {role=='ROLE_BLANCHISSERIE' && (data.status=='Envoyé chez le sous traitant' && (
<button  onClick={marquerTraite} className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
Marquer comme traité
</button>

)) }
{role=="ROLE_BLANCHISSERIE" && (data.status=='En cours de traitement' &&
        (<><button onClick={surPlaceHandle} className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
Traiter sur place
</button>
<button className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={envoyerSousTraitantHandle}>
Envoyé chez le sous traitant
</button>  
</>
    ))
  }

</td>

<td className="p-2 whitespace-nowrap">
{role=="ROLE_ADMIN" &&
data.status=='En cours de traitement' && (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)}
{role=="ROLE_ADMIN" &&
data.status=='En cours de traitement sur place' && (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)}
{role=="ROLE_ADMIN" &&
data.status=='Envoyé chez le sous traitant' && (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)}
{role=="ROLE_ADMIN" &&
data.status=='traité'&& (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
{data.status}
</button>)}
{role=="ROLE_ADMIN" &&
data.status=='remis'&& (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
{data.status}
</button>)}




{role=="ROLE_MENAGE" &&
data.status=='En cours de traitement' && (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)}
{role=="ROLE_MENAGE" &&
data.status=='En cours de traitement sur place' && (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)


}
{role=="ROLE_MENAGE" &&
data.status=='Envoyé chez le sous traitant' && (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)


}
{role=="ROLE_MENAGE" &&
data.status=='traité'&& (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
{data.status}
</button>)


}
{role=="ROLE_MENAGE" &&
data.status=='remis'&& (  <button disabled   className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
{data.status}
</button>)

}

{role=="ROLE_BLANCHISSERIE" &&(data.status=='En cours de traitement'&&  <button disabled  className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)


}

{role=="ROLE_BLANCHISSERIE" &&(data.status=='Envoyé chez le sous traitant'&&  <button disabled className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)


}

{role=="ROLE_BLANCHISSERIE" &&(data.status==' En cours de traitement sur place' ||data.status=='En cours de traitement sur place' &&  <button disabled className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
{data.status}
</button>)


}

{role=="ROLE_BLANCHISSERIE" &&(data.status=='traité' &&  <button disabled  className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
{data.status}
</button>)


}

{role=="ROLE_BLANCHISSERIE" &&(data.status=='remis' &&  <button disabled  className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
{data.status}
</button>)


}


</td>


  <td className="p-2 whitespace-nowrap">
      <div className="text-left font-medium text-500">{data.serviceNom}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.responsableNom}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.patientNom}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.quantity}</div>
  </td> 
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.etat}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.type}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.dateEnvoi!=undefined && data.dateEnvoi.substring(0,10)}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.tempsEnvoi}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.dateRecuperation!=undefined && data.dateRecuperation.substring(0,10) }</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.tempsRecuperation}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.commentaire}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.dateTraitement!=undefined && data.dateTraitement.substring(0,10)}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.tempsTraitement}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.patientNomRemis}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.dateRemise!=undefined && data.dateRemise.substring(0,10)}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.heureDeRemise}</div>
  </td>
  <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">{data.commentaire2}</div>
  </td>
</tr>;
};

export default LingeComponent;
