
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Calendar, Search, Heart } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Instant Retinal Analysis",
      description: "Upload your retinal scans and get AI-powered diagnosis within seconds",
      icon: <Search className="h-8 w-8 mb-4 text-eye-primary group-hover:text-white" />
    },
    {
      title: "Multi-Disease Detection",
      description: "Advanced detection of Cataract, AMD, DR, and Glaucoma with high accuracy",
      icon: <Eye className="h-8 w-8 mb-4 text-eye-primary group-hover:text-white" />
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed analysis with visualizations to better understand diagnosis results",
      icon: <Calendar className="h-8 w-8 mb-4 text-eye-primary group-hover:text-white" />
    },
    {
      title: "Preventive Recommendations",
      description: "Get personalized health tips and recommendations based on your results",
      icon: <Heart className="h-8 w-8 mb-4 text-eye-primary group-hover:text-white" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-eye-dark mb-6">
                Advanced AI for 
                <span className="text-eye-primary"> Retinal Disease Detection</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                EyeVisionAI uses cutting-edge artificial intelligence to analyze retinal images and detect 
                common eye conditions including Cataract, AMD, Diabetic Retinopathy, and Glaucoma with 
                clinical-grade accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="bg-eye-primary hover:bg-eye-secondary text-white font-medium px-8 py-6 text-lg"
                >
                  <Link to="/diagnosis">Start Diagnosis</Link>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="border-eye-primary text-eye-primary hover:bg-eye-light px-8 py-6 text-lg"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/placeholder.svg" 
                alt="Retinal Scanning Technology" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EyeVisionAI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines the latest in AI technology with medical expertise to provide
              accurate, rapid detection of common retinal diseases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group feature-card-gradient border-none hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center group-hover:text-white">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-white">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-white">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get accurate retinal disease detection in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-eye-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-eye-primary font-bold text-2xl">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Upload Your Scan</h3>
              <p className="text-gray-600">
                Simply upload a high-quality retinal scan image to our secure platform.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-eye-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-eye-primary font-bold text-2xl">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced ResNet50 model analyzes your image for signs of common retinal conditions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-eye-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-eye-primary font-bold text-2xl">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Get Results & Recommendations</h3>
              <p className="text-gray-600">
                Receive a detailed report with visualization and personalized recommendations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="bg-eye-primary hover:bg-eye-secondary text-white font-medium px-8 py-6 text-lg"
            >
              <Link to="/diagnosis">Try It Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-eye-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Check Your Eye Health?</h2>
              <p className="text-lg mb-8">
                Early detection is crucial for preventing vision loss. Use our AI-powered platform to get 
                insights into your retinal health today.
              </p>
              <Button 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-eye-primary px-8 py-6 text-lg"
              >
                <Link to="/diagnosis">Start Free Diagnosis</Link>
              </Button>
            </div>
            <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg text-eye-dark">
                <h3 className="font-bold text-xl mb-4">Did You Know?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-eye-primary mr-2">•</span>
                    <span>Early detection of retinal diseases can prevent up to 95% of vision loss cases.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eye-primary mr-2">•</span>
                    <span>Our AI model is trained on over 100,000 clinical retinal images.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-eye-primary mr-2">•</span>
                    <span>Regular eye check-ups, combined with AI screening, provide the best protection for your vision.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
