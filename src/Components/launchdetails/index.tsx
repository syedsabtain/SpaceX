import React from 'react'
import {useLaunchProfileQuery} from '../../generated/graphql'
import Launchdetails from '../launchdetails/launchdetails'

interface OwnProps{

    id: number
}
const LaunchProfile:React.FC<OwnProps> = (id) => {

    const {data, loading, error} = useLaunchProfileQuery({
        variables: {
            id: id.id.toString()}
    });

    if (loading) {
        return (
            <div className="d-flex justify-content-center  text-white mt-5">
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
    return (
        <Launchdetails data={data}></Launchdetails>
             

    )
}

export default LaunchProfile