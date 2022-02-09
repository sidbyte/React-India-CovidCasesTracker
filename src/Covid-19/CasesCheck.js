import React,{ useState } from 'react';

import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CasesCheck = () => {

    const [country,setCountry] = useState("");
    const [covidData, setCovidData] = useState('');

    const navigate = useNavigate();

    const handleCountry=(event)=>
    {
       setCountry(event.target.value);
       console.log(country);
    }



    const handleSubmit = (event)=>{
        event.preventDefault();
        
        axios.get(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`)
        .then((response)=>setCovidData(response.data))
        .catch((error)=>alert("You've entered wrong Country"))
       
        setCountry("");
      
    }

    const updatedTime = (new Date(parseInt(covidData.updated))).toString();

  return (

        <div className='row'>
     

        <form>
            
            <div className="mb-3 col-4 offset-4">

                <label htmlFor="Country" className="form-label">Enter Country</label>
                <input type="text" className="form-control" value={country} onChange={handleCountry} id="Country" />
                    <div className='row'>
                        <div className='col-1'>
                            <button type="submit" onClick={handleSubmit} className="btn mt-2 btn-primary">Submit</button>
                        </div>
                        &ensp;
                        <div className='col-1 offset-1'>
                            <button className="btn mt-2 btn-primary"  onClick={()=>navigate('/')}>goback</button>
                        </div>               
                    </div>
            </div>
        </form>
       
        
         
        
        
        
         <div className='col-4 offset-5'>
            {covidData && (
                    <div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={covidData.countryInfo?.flag} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">{covidData.country}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Cases</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.cases}</li>
                                <li className="list-group-item"><strong>Deaths</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.deaths}</li>
                                <li className="list-group-item"><strong>Recovered</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.recovered}</li>
                                <li className="list-group-item"><strong>Today's Cases </strong>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.todayCases}</li>
                                <li className="list-group-item"><strong>Todays's Deaths</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.todayDeaths}</li>
                                <li className="list-group-item"><strong>Active</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.active}</li>
                                <li className="list-group-item"><strong>Critical</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{covidData.critical}</li>
                            </ul>   
                            <div className="card-footer  text-center text-muted">
                               {updatedTime}
                            </div> 
                        </div>
                    </div>
                         )
                }
                </div> 

        </div>   
      );  
};

export default CasesCheck;
