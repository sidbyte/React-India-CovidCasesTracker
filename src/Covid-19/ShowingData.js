import React from 'react';

const ShowingData = (props) => {
    const final = props.content;
  return (<div>


                            <div className='row'>
                            {final?<>{final.map((finalshow,i)=>{
                                return(
                                <div className='col-5 mt-3 offset-1 rounded'>
                                    <div className="card border border-primary bg-info"  key={i} style={{width:400}}>
                                        <div className="card-body">
                                            <h6 className="card-subtitle mb-2 bg-gradient-primary">Center&nbsp;Id :&nbsp;{finalshow.center_id}</h6>
                                            <h6 className="card-subtitle mb-2 ">Center Name :&nbsp;{finalshow.name}</h6>
                                            <h6 className="card-subtitle mb-2 ">Center address :&nbsp;{finalshow.address}</h6>
                                            <h6 className="card-subtitle mb-2 ">Vaccine Type :&nbsp;{finalshow.vaccine}</h6>
                                            <h6 className="card-subtitle mb-2 ">Fee type :&nbsp;{finalshow.fee_type}</h6>
                                            <h6 className="card-subtitle mb-2 ">Fee :&nbsp;{finalshow.fee}</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                )
                            })}</>:null} 
                            </div>




  </div>);
};

export default ShowingData;
