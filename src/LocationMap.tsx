import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'

export interface LocationMapProps {
    location: {
        lat: number;
        lng: number;
    },
    zoomLevel: number;
}


export const LocationMap: FC<LocationMapProps> = props => {
    return (

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={props.location}
                defaultZoom={props.zoomLevel}
            >
            </GoogleMapReact>
        </div>
    )
}

