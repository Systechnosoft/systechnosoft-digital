import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const offices = [
  {
    id: "us-office",
    name: "United States",
    address: "49 5th Ave #1187, Brooklyn, NY 11217, United States",
    lat: 40.6812395,
    lng: -73.9769144,
    zoom: 15,
  },
  {
    id: "india-office",
    name: "India",
    address: "E-8, Railway Colony, Jagatpura, Jaipur, India",
    lat: 26.8311025,
    lng: 75.8436542,
    zoom: 15,
  },
];

// Custom red marker icon
const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export function OfficeLocationsMap() {
  const prefersReducedMotion = useReducedMotion();
  const mapRefs = useRef<{ [key: string]: L.Map | null }>({});
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    offices.forEach((office) => {
      const container = containerRefs.current[office.id];
      if (!container || mapRefs.current[office.id]) return;

      // Initialize map
      const map = L.map(container, {
        center: [office.lat, office.lng],
        zoom: office.zoom,
        zoomControl: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        boxZoom: false,
        keyboard: false,
        tap: false,
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add red marker
      L.marker([office.lat, office.lng], { icon: redIcon }).addTo(map);

      mapRefs.current[office.id] = map;
    });

    // Cleanup
    return () => {
      Object.values(mapRefs.current).forEach((map) => {
        if (map) {
          map.remove();
        }
      });
      mapRefs.current = {};
    };
  }, []);

  return (
    <section aria-label="Office Locations" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground flex items-center justify-center gap-3">
          <MapPin className="h-7 w-7 text-[#E52629]" aria-hidden="true" />
          Office Locations
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((office, index) => (
          <motion.div
            key={office.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
          >
            <Card 
              className="overflow-hidden rounded-2xl shadow-sm border bg-white transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-0.5"
              style={prefersReducedMotion ? { transform: 'none' } : undefined}
            >
              <div 
                ref={(el) => (containerRefs.current[office.id] = el)}
                className="w-full h-[280px] rounded-t-2xl pointer-events-none"
                style={{ minHeight: '280px' }}
                aria-label={`Map showing ${office.name} office location`}
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-montserrat font-bold text-lg sm:text-xl text-foreground mb-2">
                  {office.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
