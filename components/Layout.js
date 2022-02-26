import React from 'react';
import Nav from './Nav';
const Layout = ({children}) => {
    return <div>

    <Nav></Nav>
  
        {children}
    </div>;
   
  };

export default Layout;
