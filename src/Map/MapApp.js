import React, { Component } from 'react'
import Filter from './Filter'
import Map from './Map'

export default class MapApp extends Component {
    render() {
        return (
            <div>
                <center>
                    <Map/>
                    <Filter/>
                </center>
            </div>
        )
    }
}
