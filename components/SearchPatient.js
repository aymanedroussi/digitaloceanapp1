import React, { useEffect, useState } from 'react';
import Select from 'react-select';


export default function SearchPatient({selectedHandler}) {
  const [selectedOption, setSelectedOption] = useState(null);
const consoleit=()=>{
    console.log("dsqdqs")
    selectedHandler(selectedOption)
    

}
  return (
    <div onMouseLeave={consoleit}>
     
    </div>
  );
}