import { Link } from "react-router-dom";
import { ArrowRight, HardDrive, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackupRecovery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] to-[#12161d] text-white">
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-5xl mb-6">Data Backup & Recovery Services</h1>
          <p className="font-inter text-xl text-white/90 mb-8">
            Enterprise-grade backup and disaster recovery solutions to protect your critical data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?subject=Data%20Backup%20Recovery">
              <Button size="lg" className="bg-[#E52629] hover:bg-[#E52629]/90 text-white px-8 py-4 text-lg">
                Claim Your Free Insight
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/tools/health-check">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
              >
                <Shield className="mr-2 h-5 w-5" />
                IT Network Health Check
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}