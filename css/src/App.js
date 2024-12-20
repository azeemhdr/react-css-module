import logo from './logo.svg';
import './App.css';
import AllButton from './components/AllButton';
import Card from './components/Card';
import Modal from './components/Modal';
import style from '../src/components/Button.module.css'
import { useState } from 'react';


function App() {
  const [isModal,setIsModal]=useState(false)
  return (
    <div className="App">
      <AllButton/>
      <Card title="Card Title" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <button className={`${style.secondary}`} onClick={()=>{setIsModal(true)}}> Open Modal </button>
      {isModal===true?<Modal isModal={isModal} setIsModal={setIsModal}/>:''}
    </div>
  );
}

export default App;
