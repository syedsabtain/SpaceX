import React from 'react'
import {useLaunchListQuery} from '../../generated/graphql'
import Launchlist from './launchlist'
import {Fnc} from '../launchlist/types'



const List : React.FC<Fnc> = ({handleIdChange}) => {
    const {data, loading, error} = useLaunchListQuery();

    if (loading) {
        return (
            <div className="d-flex justify-content-center text-white mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (error || !data) {
        return (
            <h1>{error}</h1>
        )
    }
   
    const props ={ data:data ,handleIdChange:handleIdChange }
    return (
        <div className='row'>
            <div className='col-md-12'>
            <Launchlist {... props}></Launchlist>
            </div>
        </div>
    )
}

export default List