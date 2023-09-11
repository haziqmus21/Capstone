import React from 'react';
import './Icons.css'
import a from '../images/1282918811595341174-128.png';
import b from '../images/1453445921638178181-128.png';
import c from '../images/4379486051644993421-128.png';
import d from '../images/8350944451595341180-128.png';
import e from '../images/8516007241595341170-128.png';
import f from '../images/9251414541647350902-128.png';
import g from '../images/9963330951595341179-128.png';
import h from '../images/10295499861529659195-128.png';



const Icons = () => {
  return (
    <div>
        <div className='specilities'>
        <div className='sp-inner'>
        <h3>View Specialist Doctors</h3>
        <p>Best specialist doctors</p>
        <div className='specialist-doc'>
        <div className='circles' >
            <a href='/#' className='cir-name'><img src={a} alt='sv' ></img></a>
            <a href='/#' className='text'><p>Dermatologist</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={b} alt='sv'></img></a>
            <a href='/#' className='text'><p>Neurologist</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={c} alt='sv'></img></a>
            <a href='/#' className='text'><p>Child Specialist</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={d} alt='sv'></img></a>
            <a href='/#' className='text'><p>Gynecologist</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={e} alt='sv'></img></a>
            <a href='/#' className='text'><p>Psychiatrist</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={f} alt='sv'></img></a>
            <a href='/#' className='text'><p>Psychiatrist</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={g} alt='sv'></img></a>
            <a href='/#' className='text'><p>General Physician</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={h} alt='sv'></img></a>
            <a href='/#' className='text'><p>Sycologist</p></a>
          </div>
        </div>
       </div> 
       </div>
       <div className='disease'>


       <div className='sp-inner'>
        <h3>View Disease Doctors</h3>
        <p>Find best doctors for your disease</p>
        <div className='specialist-doc'>
          <div className='circles' >
            <a href='/#' className='cir-name'><img src={a} alt='sv'></img></a>
            <a href='/#' className='text'><p>Diabetes</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={b} alt='sv'></img></a>
            <a href='/#' className='text'><p>Coronavirus</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={c} alt='sv'></img></a>
            <a href='/#' className='text'><p>Blood Pressure</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={d} alt='sv'></img></a>
            <a href='/#' className='text'><p>Anxiety</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={e} alt='sv'></img></a>
            <a href='/#' className='text'><p>Constipation</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={f} alt='sv'></img></a>
            <a href='/#' className='text'><p>Diagnostic</p></a>
          </div>
          <div className='circles'>
            <a href='/#' className='cir-name'><img src={g} alt='sv'></img></a>
            <a href='/#' className='text'><p>Pain</p></a>
          </div>
          <div className='circles'>
            <a href='//#' className='cir-name'><img src={h} alt='sv'></img></a>
            <a href='/#' className='text'><p>Diabetes</p></a>
          </div>
        </div>
       </div> 
        
       </div>
    </div>
  )
}

export default Icons