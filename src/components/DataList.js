import { useState, useEffect } from 'react';
import DataItem from './DataItem';
import classes from './DataList.mocules.css';
import Map, { Marker, Popup } from 'react-map-gl'
import './stylesNew.css'



function DataList({ datalists }) {
    const mapsPK =
        'pk.eyJ1IjoiYXdvam5pY2tpIiwiYSI6ImNrem14ZDh2azJ0NGcyb29jOXlsZm05ODIifQ.RqFb-xpdHMygZUpZfuavyg';

    const [currentData, setCurrentData] = useState(null)
    const handleClick = (pinID) => {
        console.log(`Fetching pin data: ${pinID}`)
        fetch(`http://ananke.cs.pollub.pl:6001/api/datasets/20150124/${pinID}`)
            .then(res => res.json())
            .then(data => setCurrentData(data))
    }

    return (

        <Map
            mapboxAccessToken={mapsPK}
            initialViewState={{
                longitude: 22.545855,
                latitude: 51.27646,
                zoom: 17
            }}
            style={{ height: 700, width: 1500, textAlign: 'center', margin: '20px 240px'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            {datalists.map((pin, idx) =>
                <Marker
                    longitude={pin.longitude}
                    latitude={pin.latitude}
                    key={idx}
                >
                    <details style={{ background: 'lightgrey', position: 'fixed'}}>
                        <div style={{top: '50', position: 'absolute', zIndex: 100, marginTop: 40}}>

                        </div>
                        <summary style={{ backgroundImage: 'none', appearance: 'none', position: 'sticky', zIndex: 1000}} onClick={() => handleClick(pin.id)}>
                            {/*<u>{pin.id}</u>*/}
                        </summary>
                        {currentData &&
                            <table>
                                <tr>
                                    <td>x:</td>
                                    <td>{currentData[0].x}</td>
                                </tr>
                                <tr>
                                    <td>y:</td>
                                    <td>{currentData[0].y}</td>
                                </tr>
                                <tr>
                                    <td>z:</td>
                                    <td>{currentData[0].z}</td>
                                </tr>
                                <tr>
                                    <td>n:</td>
                                    <td>{currentData[0].n}</td>
                                </tr>
                                <tr>
                                    <td>e:</td>
                                    <td>{currentData[0].e}</td>
                                </tr>
                                <tr>
                                    <td>time:</td>
                                    <td>{currentData[0].time}</td>
                                </tr>
                                <tr>
                                    <td>latitude:</td>
                                    <td>{currentData[0].latitude}</td>
                                </tr>
                                <tr>
                                    <td>longitude:</td>
                                    <td>{currentData[0].longitude}</td>
                                </tr>
                            </table>
                        }
                    </details>

                </Marker>

            )
            }
        </Map >

    );
}

export default DataList;