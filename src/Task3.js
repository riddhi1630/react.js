 import {Array} from './Array'
 import './Task3.css'
 
 export default function Fun(){

   
    return(

        <>
        <div className='dot'>
            <div className='container'>
                <div className='row'>
                    {Array.map((val)=>(
                        <div className='col'>
                            <div className='info'>
                                <h2>{val.name}</h2>
                                <li>{val.age}</li>
                                <li>{val.location}</li>

                            
                            </div>

                        
                            </div>
                        


                    ))}

                    

                </div>

            </div>


        </div>
        
        
        </>
    )
}

