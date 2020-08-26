import React from 'react'
import {LaunchListQuery} from '../../generated/graphql'
import {Fnc} from  './types'
import './list.css'
interface Props extends Fnc {

    data : LaunchListQuery;
}

const Launchlist : React.FC < Props > = ({data,handleIdChange}) => {

    return (
        <div className="list-group bg-transparent custom-ul">
            <h4 className="list-group-item mt-2 text-center  only" >Mission List</h4>
            {data.launches?.map((value,key)=>{
                return(
                    <button key={key} type="button" className="list-group-item  custom-li " onClick={()=>{ handleIdChange(value?.flight_number!)}} >
                    {value?.mission_name} ({value?.launch_year})
              </button>
                )
            })}
        </div>
    )
}

export default Launchlist