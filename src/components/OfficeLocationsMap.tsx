import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const offices = [
  {
    name: "United States",
    address: "49 5th Ave #1187, Brooklyn, NY 11217, United States",
    lat: 40.6812395,
    lng: -73.9769144,
    zoom: 14,
  },
  {
    name: "India",
    address: "E-8, Railway Colony, Jagatpura, Jaipur, India",
    lat: 26.8311025,
    lng: 75.8436542,
    zoom: 14,
  },
];

// OpenStreetMap static map - using StaticMap service
const getStaticMapUrl = (lat: number, lng: number, zoom: number, width: number, height: number) => {
  // Using OpenStreetMap tiles via staticmap service
  return `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&maptype=mapnik&markers=${lat},${lng},red-pushpin`;
};

export function OfficeLocationsMap() {
  const prefersReducedMotion = useReducedMotion();

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
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={getStaticMapUrl(office.lat, office.lng, office.zoom, 800, 450)}
                    srcSet={`
                      ${getStaticMapUrl(office.lat, office.lng, office.zoom, 640, 360)} 640w,
                      ${getStaticMapUrl(office.lat, office.lng, office.zoom, 800, 450)} 800w,
                      ${getStaticMapUrl(office.lat, office.lng, office.zoom, 1200, 675)} 1200w
                    `}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={`Map of Systechnosoft ${office.name} office at ${office.address}`}
                    className="w-full h-full object-cover rounded-t-2xl"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
              </div>
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
