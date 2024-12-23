import logo from './logo.svg';
import './App.css';
import AllButton from './components/AllButton';
import Card from './components/Card';
import Modal from './components/Modal';
import style from '../src/components/Button.module.css'
import { useState } from 'react';
import Gallery from './components/Gallery';
import PopUp from './components/PopUp';


function App() {
  const [isModal,setIsModal]=useState(false);
  const [isPopUp,setIsPopUp]=useState(false);
  
  return (
    <div className="App">
      <AllButton/>
      <Card title="Card Title" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <div className={`${style.container}`}>
      <button className={`${style.secondary} ${style.container}`} onClick={()=>{setIsModal(true)}}> Open Modal </button>
      {isModal===true?<Modal isModal={isModal} setIsModal={setIsModal}/>:''}
      </div>
      <Gallery/>
      <div className={style.container}>
      <button className={`${style.success}`} onClick={()=>{setIsPopUp(true)}}>Open Alert</button>
      {isPopUp===true?
      <PopUp content ="This is an Alert Pop-up" isPopUp={isPopUp} setIsPopUp={setIsPopUp}/>
    :''}   
    </div>   
    </div>
  );
}

export default App;
