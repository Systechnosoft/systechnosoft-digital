import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, ExternalLink } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Fix default marker icon issue with Leaflet + Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom red marker icon
const createRedIcon = () => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: #E52629;
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 3px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg style="transform: rotate(45deg); width: 16px; height: 16px; fill: white;" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const offices = [
  {
    name: "United States",
    position: [40.6892, -73.9832] as [number, number],
    address: "49 5th Ave #1187, Brooklyn, NY 11217, United States",
    mapsUrl: "https://maps.app.goo.gl/oaDnrXqVnKTfaUGE6",
  },
  {
    name: "India",
    position: [26.8467, 75.7947] as [number, number],
    address: "E-8, Railway Colony, Jagatpura, Jaipur, India",
    mapsUrl: "https://maps.app.goo.gl/drsWAEUhjbJc5Y8U7",
  },
];

export function OfficeLocationsMap() {
  const [isMapReady, setIsMapReady] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Lazy load map when component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    const element = document.getElementById("office-map-container");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleMapReady = (map: L.Map) => {
    mapRef.current = map;
    
    // Fit bounds to show both markers with padding
    const bounds = L.latLngBounds(offices.map(office => office.position));
    map.fitBounds(bounds, { padding: [50, 50] });
  };

  return (
    <Card className="card-enterprise overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-montserrat font-bold flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Office Locations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Map Container */}
        <div 
          id="office-map-container" 
          className="relative w-full h-[320px] md:h-[360px] lg:h-[420px] bg-muted"
          style={{ minHeight: "320px" }}
        >
          {isMapReady ? (
            <MapContainer
              center={[33.77, -25.88]} // Midpoint between locations
              zoom={2}
              className="w-full h-full"
              ref={(mapInstance) => {
                if (mapInstance) handleMapReady(mapInstance);
              }}
              scrollWheelZoom={false}
              keyboard={true}
              aria-label="Map showing Systechnosoft office locations"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                className="map-tiles"
              />
              
              {offices.map((office) => (
                <Marker 
                  key={office.name} 
                  position={office.position}
                  icon={createRedIcon()}
                  aria-label={`Systechnosoft ${office.name} office`}
                >
                  <Popup
                    className="custom-popup"
                    closeButton={true}
                    maxWidth={250}
                  >
                    <div className="p-2">
                      <h3 className="font-montserrat font-semibold text-base mb-2 text-foreground">
                        Systechnosoft — {office.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {office.address}
                      </p>
                      <a
                        href={office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-[#E52629] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded px-2 py-1"
                        aria-label={`Open ${office.name} office in Google Maps`}
                      >
                        Open in Maps
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-muted-foreground">Loading map...</div>
            </div>
          )}
        </div>

        {/* Accessible Fallback - Text List */}
        <div className="p-6 border-t bg-background">
          <h3 className="sr-only">Office addresses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office) => (
              <div key={office.name} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#E52629]/10">
                  <MapPin className="h-5 w-5 text-primary transition-colors group-hover:text-[#E52629]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-montserrat font-medium text-foreground mb-1">
                    {office.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {office.address}
                  </p>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-[#E52629] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded"
                    aria-label={`Open ${office.name} office in Google Maps (opens in new tab)`}
                  >
                    View on map
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
