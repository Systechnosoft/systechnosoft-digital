import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Clock, Database, Cloud, Server, Archive, FileCheck, Lock, Eye, BarChart3, MapPin, CheckCircle, AlertTriangle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BackupRecovery() {
  return (
    <>
      <Helmet>
        <title>Data Backup & Recovery Services | Enterprise Protection | Systechnosoft</title>
        <meta 
          name="description" 
          content="Protect mission-critical data with immutable backups, hybrid storage, and disaster recovery you can test and trust. 99.9%+ restore success with 24×7 monitoring." 
        />
        <meta property="og:title" content="Data Backup & Recovery Services | Enterprise Protection | Systechnosoft" />
        <meta property="og:description" content="Protect mission-critical data with immutable backups, hybrid storage, and disaster recovery you can test and trust. 99.9%+ restore success with 24×7 monitoring." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services/backup-recovery" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
          {/* Animated background circuit pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-red-500/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-400/20 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
              Data Backup & Recovery Services
            </h1>
            <p className="font-inter text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect mission-critical data with immutable backups, hybrid storage, and disaster recovery you can test and trust.
            </p>
            
            {/* Badge Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                99.9%+ restore success (tests)
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                Zero-trust aligned
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                24×7 monitoring
              </Badge>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact?topic=dr-readiness">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Request DR Readiness Review
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Outcome Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Outcomes you can measure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">RPO as low as 15 min</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <BarChart3 className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">RTO &lt; 2 hrs (tier-1)</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <Lock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Immutable backups</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Geo-redundant copies</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <CheckCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Automated DR drills</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Encrypted in transit & at rest</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              What We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Remote Cloud Backups</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuous, encrypted backups to cloud/object storage with lifecycle policies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Server className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Virtual Infra Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Backup and protection for VMs/containers; policy-based scheduling & health.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Database className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Cloud Data Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Versioning, immutability (WORM/S3 Object Lock), key management/rotation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileCheck className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Hybrid Cloud Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    On-prem + cloud tiers for performance + durability; smart caching.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Archive className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Tiered Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hot/warm/cold archival with automated transitions and cost controls.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-red-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-xl">Live Archiving (Outsourced)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Compliance-ready retention, legal holds, and audit trails.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disaster Recovery */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat text-3xl font-bold text-center mb-8 text-gray-900">
                Disaster Recovery you can rehearse
              </h2>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>DR runbooks with step-by-step recovery procedures</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Application dependency mapping and impact analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cross-region failover with automated orchestration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Push-button failback with data consistency checks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Scheduled DR drills with detailed reports and recommendations</span>
                    </li>
                  </ul>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">RPO</div>
                      <div className="text-sm text-gray-600">15 min - 24 hrs</div>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">RTO</div>
                      <div className="text-sm text-gray-600">2 hrs - 48 hrs</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Last DR drill</div>
                      <div className="text-sm text-gray-600">Monthly</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Coverage %</div>
                      <div className="text-sm text-gray-600">99.9%+</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reference Architecture */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Reference Architecture
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6 mb-4">
                    <Database className="h-12 w-12 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sources</h3>
                  <p className="text-sm text-gray-600">Servers, databases, workstations, cloud apps</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6 mb-4">
                    <Server className="h-12 w-12 text-green-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Backup Proxy/Agent</h3>
                  <p className="text-sm text-gray-600">Deduplication, compression, encryption</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-6 mb-4">
                    <Lock className="h-12 w-12 text-purple-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Immutable Storage</h3>
                  <p className="text-sm text-gray-600">Primary & off-site repositories</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-50 rounded-lg p-6 mb-4">
                    <Cloud className="h-12 w-12 text-red-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">DR Site/Cloud</h3>
                  <p className="text-sm text-gray-600">Recovery orchestration & testing</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 max-w-3xl mx-auto">
                  End-to-end encryption, IAM boundaries, and comprehensive monitoring/alerting ensure data integrity and security throughout the backup and recovery lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Choose your coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Essential</CardTitle>
                  <CardDescription className="text-center">Perfect for small businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Workstation + file server backups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Daily snapshots</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">30-day retention</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Email alerts</span>
                    </li>
                  </ul>
                  <Link to="/contact?topic=backup-recovery" className="block">
                    <Button className="w-full" variant="outline">
                      Talk to an Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="relative border-red-600 border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-red-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Business</CardTitle>
                  <CardDescription className="text-center">Comprehensive protection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Server/DB app-aware backups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Immutable copies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Weekly DR test</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Role-based access</span>
                    </li>
                  </ul>
                  <Link to="/contact?topic=backup-recovery" className="block">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Talk to an Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Enterprise</CardTitle>
                  <CardDescription className="text-center">Maximum resilience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Multi-region geo-replication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Continuous backups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Quarterly DR drills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom RPO/RTO, dedicated TAM</span>
                    </li>
                  </ul>
                  <Link to="/contact?topic=backup-recovery" className="block">
                    <Button className="w-full" variant="outline">
                      Talk to an Expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-montserrat text-3xl font-bold mb-4 text-gray-900">
                Compliance & Security
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">DPDP-aware processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">ISO-aligned controls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Data minimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Consent & retention</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Encrypted transport/storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileCheck className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Access logging</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 max-w-3xl mx-auto">
                We design for DPDP 2023 awareness; get legal counsel for your context. Our solutions implement industry best practices for data protection and regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Teasers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat text-3xl font-bold text-center mb-12 text-gray-900">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                  <div className="font-semibold text-gray-900 mb-2">faster recovery</div>
                  <div className="text-sm text-gray-600">Trading firm, AU</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                  <div className="font-semibold text-gray-900 mb-2">storage savings</div>
                  <div className="text-sm text-gray-600">Oil & Gas, US</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="font-semibold text-gray-900 mb-2">monitoring uptime</div>
                  <div className="text-sm text-gray-600">Financial Services, UK</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-montserrat text-3xl font-bold mb-4">
              Ready to secure your critical data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free backup assessment and discover your recovery readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  Claim Your Free Insight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact?topic=backup-recovery">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Get a Quotation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}