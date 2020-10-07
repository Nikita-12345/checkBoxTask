import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import CheckListContainer from './Component/CheckListContainer';
import ChecklistDescription from './Component/ChecklistDescription';

function App() {
  return (
    <Provider store={store}>
      <div className="containe">        
      <div className="child setBackGroung">
        <div className="row mx-4 my-4">
            <div className="col-md-2"></div>
            <div className="col-md-3 bg-light CheckListContainerDesign"><CheckListContainer/></div>
            <div className="col-md-1"></div>
            <div className="col-md-4 bg-light ChecklistDescriptionDesign pt-2"><ChecklistDescription/></div>
            <div className="col-md-2"></div>
            </div>
        </div>              
      </div>
    </Provider>
  );
}

export default App;
