import React from 'react';
import './App.css';
import Table from './components/Table';



var note =19

var resulte=''
if (note<=20 && note>0) {

  if (note>=18) {
      resulte='exelonent'
  }else if (note>=15) {
    resulte='tres bien'
  }else if (note>=12) {
    resulte='bien'
  }else if (note>=10) {
    resulte='assez bien'
  }else if (note<10) {
    resulte='fible'
  }

}


function App() {
  return (
    <div >
        <Table name={'yahya'}/>
       { resulte!==''?  <p>Votre note est : {note} ({resulte})</p> : ''}
    </div>
  );
}

export default App;
