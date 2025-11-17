import { MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const offices = [
  {
    name: "United States",
    address: "49 5th Ave #1187, Brooklyn, NY 11217, United States",
    mapsUrl: "https://maps.app.goo.gl/oaDnrXqVnKTfaUGE6",
    lat: 40.6892,
    lng: -73.9832,
  },
  {
    name: "India",
    address: "E-8, Railway Colony, Jagatpura, Jaipur, India",
    mapsUrl: "https://maps.app.goo.gl/drsWAEUhjbJc5Y8U7",
    lat: 26.8467,
    lng: 75.7947,
  },
];

export function OfficeLocationsMap() {
  return (
    <Card className="card-enterprise overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-montserrat font-bold flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Office Locations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Static Map with Markers - Using OpenStreetMap */}
        <div className="relative w-full h-[320px] md:h-[360px] lg:h-[420px] bg-muted overflow-hidden">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0832%2C40.5892%2C75.8947%2C26.9467&layer=mapnik&marker=40.6892%2C-73.9832&marker=26.8467%2C75.7947"
            className="w-full h-full border-0"
            title="Map showing Systechnosoft office locations in United States and India"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            aria-label="Interactive map showing office locations"
          />
          <div className="absolute bottom-4 right-4 z-10">
            <a
              href="https://www.openstreetmap.org/?mlat=33.77&mlon=-25.88#map=2/33.77/-25.88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-md text-sm font-medium text-foreground hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629]"
            >
              View Larger Map
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Office Address List */}
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
                    Open in Google Maps
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
