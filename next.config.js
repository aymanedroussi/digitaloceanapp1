module.exports = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: "mongodb://localhost:27017/linge",
    MONGODB_PATIENT_URI:"mongodb://localhost:27017/dossierpatient",
    SECRET:"LfsZWKdsKRwhz5bS7YOEI0A564a37saF",
    NEXTAUTH_URL:"137.184.188.102"
    
    
  }

//mongodb://localhost:27017/linge
  //mongodb+srv://adev:adev@cluster0.nphce.mongodb.net/linge?retryWrites=true&w=majority
  //mongodb+srv://adev:adev@cluster0.nphce.mongodb.net/dossierpatient?retryWrites=true&w=majority 
  /*



</td>):<td></td>)) : (data.status=='En cours de traitement' ? (<td className="p-2 whitespace-nowrap"><button onClick={surPlaceHandle} className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
Traiter sur place
</button>
<button className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={envoyerSousTraitantHandle}>
Envoyé chez le sous traitant
</button>

  
  </td>):<td></td>)} 
  <td className="p-2 whitespace-nowrap">
  {role=='ROLE_BLANCHISSERIE' ? (data.status=="En cours de traitement sur place" ? <button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">En cours de traitement sur place</span>
</button> : (data.status=="Envoyé chez le sous traitant" ?<button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">Envoyé chez le sous traitant</span>
</button>: <button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">Envoyé chez le sous traitant</span>
</button>) ): <></>) (<button disabled  className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">En cours de traitement</span>
</button>))  : (data.status=="traité" ? (<button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">


<span className="mx-1" >Traité</span>
</button>) : <button disabled  className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">


<span className="mx-1" >Remis</span>
</button>)}







   <td className="p-2 whitespace-nowrap">
  {data.status=="En cours de traitement" ? (role=='ROLE_BLANCHISSERIE' ? (data.status=="En cours de traitement sur place" ? <button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">En cours de traitement sur place</span>
</button> : <button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">Envoyé chez le sous traitant</span>
</button>) : (<button disabled  className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">


<span className="mx-1">En cours de traitement</span>
</button>))  : (data.status=="traité" ? (<button disabled className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">


<span className="mx-1" >Traité</span>
</button>) : <button disabled  className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">


<span className="mx-1" >Remis</span>
</button>)}

  </td>
  */



  /*
  {(role=="ROLE_BLANCHISSERIE" & 
    data.status=="en cours de traitement") && (
        <td className="p-2 whitespace-nowrap"><button onClick={surPlaceHandle} className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
Traiter sur place
</button>
<button className="marginbuttons px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={envoyerSousTraitantHandle}>
Envoyé chez le sous traitant
</button>

  
  </td>
    )
  }

  */
}
