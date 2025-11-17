import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const offices = [
  {
    name: "United States",
    address: "49 5th Ave #1187, Brooklyn, NY 11217, United States",
    lat: 40.6892,
    lng: -73.9832,
    zoom: 14,
  },
  {
    name: "India",
    address: "E-8, Railway Colony, Jagatpura, Jaipur, India",
    lat: 26.8467,
    lng: 75.7947,
    zoom: 15,
  },
];

// Google Static Maps API - brand red marker color (0xE52629)
const getStaticMapUrl = (lat: number, lng: number, zoom: number, width: number, height: number) => {
  const markerColor = "0xE52629";
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&scale=2&markers=color:${markerColor}%7C${lat},${lng}&style=feature:poi%7Cvisibility:off&style=feature:transit%7Cvisibility:simplified&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
};

export function OfficeLocationsMap() {
  return (
    <section aria-label="Office Locations" className="w-full max-w-5xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground mb-8 flex items-center gap-3">
          <MapPin className="h-7 w-7 text-[#E52629]" aria-hidden="true" />
          Office Locations
        </h2>
      </motion.div>

      <div className="space-y-6">
        {offices.map((office, index) => (
          <motion.div
            key={office.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden rounded-2xl shadow-sm border bg-white">
              <div className="p-0">
                <img
                  src={getStaticMapUrl(office.lat, office.lng, office.zoom, 1200, 420)}
                  srcSet={`
                    ${getStaticMapUrl(office.lat, office.lng, office.zoom, 640, 320)} 640w,
                    ${getStaticMapUrl(office.lat, office.lng, office.zoom, 800, 360)} 800w,
                    ${getStaticMapUrl(office.lat, office.lng, office.zoom, 1200, 420)} 1200w
                  `}
                  sizes="(max-width: 640px) 640px, (max-width: 1024px) 800px, 1200px"
                  alt={`Map of Systechnosoft ${office.name} office at ${office.address}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              <div className="p-4">
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-1">
                  {office.name}
                </h3>
                <p className="text-sm text-muted-foreground">
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
