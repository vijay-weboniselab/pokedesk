
import React from 'react'
import ItemList from './components/ItemList';
import { LinkProvider } from './context/LinkContext';
import AnotherComponent from './components/DataDetails';


export default function App() {

  return (
   <div className='App'>
     <LinkProvider>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <ItemList />
          </div>
          <div className='col-md-6'>
          <AnotherComponent/>
          </div>
        </div>
        
      </div>
    </LinkProvider>

   </div>
  );
}

