import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Header from './components/Header';
import createCustomIcon from './utils/CustomMarkerIcon';
import 'leaflet/dist/leaflet.css';
import './index.css';

const properties = [
  {
    id: 1,
    price: 199900,
    lat: -1.9457,
    lon: 30.0619,
    images: ['/images/house1.jpg', '/images/house1_1.jpg', '/images/house1_2.jpg'],
    details: "4 bds | 1 ba | 1,104 sqft - Example Location 1, Kigali, Rwanda",
    description: "A beautiful house with a spacious yard and modern amenities."
  },
  {
    id: 2,
    price: 299000,
    lat: -1.9597,
    lon: 30.0588,
    images: ['/images/house2.jpg', '/images/house2_1.jpg', '/images/house2_2.jpg'],
    details: "3 bds | 2 ba | 1,516 sqft - Example Location 2, Kigali, Rwanda",
    description: "A lovely home with a large kitchen and great neighborhood."
  },
  {
    id: 3,
    price: 250000,
    lat: -1.9602,
    lon: 30.0595,
    images: ['/images/house3.jpg', '/images/house3_1.jpg', '/images/house3_2.jpg'],
    details: "2 bds | 1 ba | 1,000 sqft - Example Location 3, Kigali, Rwanda",
    description: "A cozy home with a beautiful garden."
  },
  {
    id: 4,
    price: 350000,
    lat: -1.9732,
    lon: 30.0675,
    images: ['/images/house4.jpg', '/images/house4_1.jpg', '/images/house4_2.jpg'],
    details: "5 bds | 3 ba | 2,000 sqft - Example Location 4, Kigali, Rwanda",
    description: "A large family house with modern design."
  },
  {
    id: 5,
    price: 275000,
    lat: -1.9817,
    lon: 30.0642,
    images: ['/images/house5.jpg', '/images/house5_1.jpg', '/images/house5_2.jpg'],
    details: "3 bds | 2 ba | 1,300 sqft - Example Location 5, Kigali, Rwanda",
    description: "A comfortable home with a great view."
  }
];

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-2/3 h-full">
          <MapContainer center={[-1.9497, 30.0588]} zoom={13} className="w-full h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© OpenStreetMap contributors'
            />
            {properties.map(property => (
              <Marker 
                key={property.id} 
                position={[property.lat, property.lon]}
                icon={createCustomIcon(property.images[0])}
                eventHandlers={{
                  click: () => {
                    setSelectedProperty(property);
                  },
                }}
              >
                <Popup>
                  <div>${property.price}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="w-1/3 h-full overflow-y-auto p-4 bg-gray-100">
          {selectedProperty && (
            <div>
              <h2 className="text-2xl font-bold mb-4">${selectedProperty.price}</h2>
              <p className="mb-4">{selectedProperty.details}</p>
              <p className="mb-4">{selectedProperty.description}</p>
              <div className="grid grid-cols-1 gap-4">
                {selectedProperty.images.map((image, index) => (
                  <img key={index} src={image} alt={`Property ${selectedProperty.id}`} className="w-full h-auto" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
