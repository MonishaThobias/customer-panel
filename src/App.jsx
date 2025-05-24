import React from 'react';
import CustomerAdd from './component/CustomerAdd';
import CustomerView from './component/CusttomerView';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  

  return (
    <Provider store={store}>
 <>
 <div className="container  text-center">
  <h1 className='my-3'>Customer Panel</h1>
      <CustomerAdd />
        <CustomerView />
 </div>
    
    </>
    </Provider>
   
  )
}

export default App
