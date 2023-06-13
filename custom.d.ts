declare module "*.png"{
    const value: any;
    export default value
}

declare module 'react-router-dom'

declare module './components/pages/redirectPages/redirectLogin' {
    import React from 'react';
  
    const RedirectLogin: React.ComponentType<any>;
    
    export default RedirectLogin;
  }
  