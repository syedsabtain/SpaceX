import React from 'react'
import {LaunchProfileQuery} from '../../generated/graphql'
import './details.css'


interface Props {
    data : LaunchProfileQuery
}
const Launchdetails : React.FC < Props >= ({data}) => {
   
   
    return (
        <div className='mt-3 '>
            <div className=' det'  >
                
            <h4>Rocket Name : <span className='details'>{data.launch
                    ?.rocket
                        ?.rocket_name}</span></h4>
            <h4>Mission Name : <span className='details'>{data.launch
                    ?.mission_name}</span></h4>
            <h4>Launch Year : <span className='details'>{data.launch
                    ?.launch_year}</span></h4>
            <h4>Launch Details : <span className='details'>{data.launch
                    ?.details}</span></h4>
            </div>
          
            
            

            <div className='mt-3'>
                {data.launch
                    ?.links
                        ?.flickr_images
                            ?.map(images => images
                                ? <div className="card" key={images}>
                                        <img
                                            src={images}
                                            className="card-img-top"
                                            alt={data.launch
                                            ?.rocket
                                                ?.rocket_type !}/>
                                                
                                        <div className="card-body">
                                            <h5 className="card-title">{data.launch
                                                    ?.rocket
                                                        ?.rocket_name}</h5>
                                            <p className="card-text">Launch Site : {data.launch
                                                    ?.launch_site
                                                        ?.site_name}</p>
                                            <a href={images} target='blank' className="btn btn-primary">View Full Image</a>
                                        </div>
                                    </div>
                                : <h1>Images of This Mission is Not Available too.</h1>)}
                                {data.launch?.links?.flickr_images?.length === 0 ? (<h1 className='mt-5 not'>Images of This Mission is Not Available</h1>):null}

            </div>
           
        </div>
    )
}

export default Launchdetails