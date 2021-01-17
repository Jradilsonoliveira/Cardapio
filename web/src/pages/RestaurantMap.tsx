import React from 'react';
import RestauranteMarkerImg from '../images/Logo.svg' ;
import mapMakerImg from '../images/Local.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/restaurantes-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMakerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})


function RestaurantesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={RestauranteMarkerImg} alt="Cardapio Digital"/>

                    <h2>Escolha um Restaurante no mapa</h2>
                    <p>Estamos esperando por voce :) </p>
                </header>

                <footer>
                    <strong>Cabo Frio</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-22.8904994,-42.0404941]}
                zoom={16}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                    icon={mapIcon} 
                    position={[-22.8904994,-42.0404941]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            Tia Maluca
                            <Link to="/restaurantes/1">
                                <FiArrowRight size={20} color="#FFF" />
                            </Link>
                        </Popup>
                    </Marker>
            </MapContainer>

                
            

            <Link to="/restaurantes/create" className="create-Restaurante"> 
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default RestaurantesMap;