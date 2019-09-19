import React,{useState} from 'react'
import FinalMusical from './FinalMusical'
import './dj-services.css'

function DJServices(){
  let [service,setService] = useState('')
  let [next,setNext] = useState(false)
  return (
    <>
    {
      next?<FinalMusical service={service} setNext={setNext}/>:<>
      <li className="djservices procession">Processions 
        <i className="fas fa-arrow-right" onClick={(e)=>{
          setService('Procession')
          setNext(true)
        }}></i>
      </li>
      <li className="djservices parties">Parties 
        <i className="fas fa-arrow-right"  onClick={(e)=>{
          setService('Parties')
          setNext(true)
        }}></i> 
      </li>
      </>
    }
    </>
  )
}

export default DJServices