import L from 'leaflet';

const createCustomIcon = (imageUrl) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div class="w-20 h-20 bg-white rounded-full shadow-lg overflow-hidden">
             <img src="${imageUrl}" alt="property" class="w-full h-full object-cover" />
           </div>`,
    iconSize: [50, 50],
    iconAnchor: [25, 50]
  });
};

export default createCustomIcon;
