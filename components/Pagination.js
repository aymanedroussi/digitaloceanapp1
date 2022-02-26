import React from 'react';
import { useState } from 'react';
const Pagination = ({onClickHandler,size}) => {
  let array = []
   
  const [number,setNum]=useState(1)
  const current="z-10 bg-indigo-50 border-indigo-500 text-indigo-600";
  const Default="bg-white border-gray-300 text-gray-500 hover:bg-gray-50";
  for (let i=1;i<=size;i++) {
    array.push(i)
  }

    const onClickPage=(num)=>{
        onClickHandler(num);
    }
  return <div> <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  <div className="flex-1 flex justify-between sm:hidden">
  
  </div>
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
     
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          
      {array.map((num)=>{return (<a key={Math.random()} onClick={()=>{setNum(num);onClickPage(num)
      }}
          
          aria-current="page"
          className={ number==num ? `${current} relative inline-flex items-center px-4 py-2 border text-sm font-medium` : `${Default}  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
         {num}
        </a>)})}  
      
      </nav>
    </div>
  </div>
</div></div>;
};

export default Pagination;
