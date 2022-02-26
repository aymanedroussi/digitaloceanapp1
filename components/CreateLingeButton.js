import React from 'react';
import Link from 'next/link';

const CreateLingeButton = () => {
  return <div>
      <Link href="/addLinge"><button className="px-10 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Ajouter un nouveau linge
    </button></Link>
  </div>;
};

export default CreateLingeButton;
