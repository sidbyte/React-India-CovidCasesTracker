import React,{ useEffect, useState } from 'react';

import {Link} from 'react-router-dom';
import ShowingData from './ShowingData';
import axios from 'axios';

const CovidCenter = () => {

    const [state, setState] = useState('');
    const [district,setDistrict] = useState('');
    const [districtid,setDistrictid] = useState('');
    const [vaccinedate,setVaccinedate] = useState('');
    const [final,setFinal]  = useState('');

 
    const y = vaccinedate.slice(0,4);
    const m = vaccinedate.slice(5,7);
    const d = vaccinedate.slice(8);

    const updatedVaccineDate = (`${d}-${m}-${y}`);


    useEffect(() => {
      
        axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state}`)
        .then((response=>{setDistrict(response.data.districts)}))
        .catch((error)=>console.log(error));
       
        

      
    }, [state]);

    const handleAllSearch=()=>{

        axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${updatedVaccineDate}`)
        .then((response=>{setFinal(response.data.sessions)}))
        .catch((error)=>console.log(error));
        
    }



  return (<>


                {/* first row starts */}
                <div className='row border-bottom border-primary' >
                   
                    <div className='col-4'>
                        <h1 className='display-6 text-center'><strong>Covid Center</strong></h1>
                    </div>

                    
                    <button className='btn btn-secondary opacity-75  col-2 offset-5 mb-1'>
                        <Link to="/cases" style={{textDecoration:"none",color:"white"}}>Daily Cases Updated</Link>
                    </button>   
                        
                </div >
                 {/* first row ends */}
                
                 {/* second row starts */}
                <div className='row mt-5 row offset-1' >
                    <div className='col-3'>
                        <form action="">
                            <select name="state" id="state" value={state} onChange={(event)=>setState(event.target.value)}>
                                    <option value="" className='text-center'>------None-----</option>
                                    <option value="1">Andhra Pradesh</option>
                                    <option value="2">Andaman and Nicobar Islands</option>
                                    <option value="3">Arunachal Pradesh</option>
                                    <option value="4">Assam</option>
                                    <option value="5">Bihar</option>
                                    <option value="6">Chandigarh</option>
                                    <option value="7">Chhattisgarh</option>
                                    <option value="8">Dadar and Nagar Haveli</option>  
                                    <option value="9">Delhi</option>
                                    <option value="10">Goa</option>
                                    <option value="11">Gujarat</option>
                                    <option value="12">Haryana</option>
                                    <option value="13">Himachal Pradesh</option>
                                    <option value="14">Jammu and Kashmir</option>
                                    <option value="15">Jharkhand</option>
                                    <option value="16">Karnataka</option>
                                    <option value="17">Kerala</option>
                                    <option value="18">Ladakh</option>
                                    <option value="19">Lakshadweep</option>  
                                    <option value="20">Madhya Pradesh</option>
                                    <option value="21">Maharashtra</option>
                                    <option value="22">Manipur</option>
                                    <option value="23">Meghalaya</option>
                                    <option value="24">Mizoram</option>
                                    <option value="25">Nagaland</option>
                                    <option value="26">Odisha</option>
                                    <option value="27">Puducherry</option>
                                    <option value="28">Punjab</option>
                                    <option value="29">Rajasthan</option>
                                    <option value="30">Sikkim</option>
                                    <option value="31">Tamil Nadu</option>
                                    <option value="32">Telangana</option>
                                    <option value="33">Tripura</option>
                                    <option value="34">Uttar Pradesh</option>
                                    <option value="35">Uttarakhand</option>
                                    <option value="36">West Bengal</option>
                                    <option value="37">Daman and Diu</option>
                            </select>
                        </form>
                    </div>
            
                    <div className='col-3'>
                        <select onChange={(event)=>setDistrictid(event.target.value)}>
                            <option className='text-center' >---------None--------</option>
                            {district?<>{district.map((e,i)=>{
                                return (
                                <option value={e.district_id} key={i}>{e.district_name}</option>
                                 )
                            })}</>:null}

                        </select>
                    </div>  

                    <div className='col-3'>        
                        <input type="date" id="date" name="date" value={vaccinedate} onChange={(event)=>setVaccinedate(event.target.value)}/ >
                    </div>

                    <div className="col-3">
                        {/* <Link to="/showingdata"> */}
                            <button className='btn btn-primary' onClick={handleAllSearch}>Search Center</button>
                            {/* </Link> */}
                    </div>
          
                   
                </div>
                {/*second row ends*/}
                

                {/*third row ends*/}

                <ShowingData content={final}/>

                {/*third row ends*/}

               <div className='border-bottom border-dark'></div>
                

                {/*footer starts*/}
                <div >
                    <footer className="page-footer font-small blue"  style={{position: "fixed",
                                        height: "50px",
                                        bottom: "0",
                                        width: "100%",
                                        backgroundColor:"black",color:"white"
                                        }}>

                        <div className="footer-copyright text-center py-3">
                            © 2022 Copyright
                        </div>
                    </footer>
                </div>
                {/*footer ends*/}
                 
                  
  </>);
};

export default CovidCenter;

