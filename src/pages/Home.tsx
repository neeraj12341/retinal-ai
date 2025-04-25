
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Search, Award, ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Instant Retinal Analysis",
      description: "Upload your retinal scans and get AI-powered diagnosis within seconds",
      icon: <Search className="h-8 w-8 mb-4 text-primary group-hover:text-white" />
    },
    {
      title: "Multi-Disease Detection",
      description: "Advanced detection of Cataract, AMD, DR, and Glaucoma with high accuracy",
      icon: <Eye className="h-8 w-8 mb-4 text-secondary group-hover:text-white" />
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed analysis with visualizations to better understand diagnosis results",
      icon: <Award className="h-8 w-8 mb-4 text-primary group-hover:text-white" />
    },
    {
      title: "Preventive Recommendations",
      description: "Get personalized health tips and recommendations based on your results",
      icon: <Heart className="h-8 w-8 mb-4 text-secondary group-hover:text-white" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6 rounded-b-3xl">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI-Powered 
                <span className="text-secondary"> Retinal Disease Detection</span>
              </h1>
              <p className="text-lg text-white/80 mb-8">
                RetinalAI uses cutting-edge artificial intelligence to analyze retinal images and detect 
                common eye conditions including Cataract, AMD, Diabetic Retinopathy, and Glaucoma with 
                95.4% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="bg-white hover:bg-secondary hover:text-white text-primary font-medium px-8 py-6 text-lg rounded-full transition-all duration-300"
                >
                  <Link to="/diagnosis" className="flex items-center gap-2">
                    Start Diagnosis <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-2">
              <img 
                src="/placeholder.svg" 
                alt="Retinal Scanning Technology" 
                className="rounded-2xl shadow-2xl max-w-full h-auto transform rotate-3"
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
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Why Choose RetinalAI?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines the latest in AI technology with medical expertise to provide
              accurate, rapid detection of common retinal diseases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group feature-card-gradient border-none hover:shadow-xl transition-all duration-500 card-hover">
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
      <section className="py-20 px-6 green-gradient rounded-t-3xl rounded-b-3xl -mt-6 mb-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Get accurate retinal disease detection in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Upload Your Scan</h3>
              <p className="text-white/80">
                Simply upload a high-quality retinal scan image to our secure platform.
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">AI Analysis</h3>
              <p className="text-white/80">
                Our advanced ResNet50 model analyzes your image for signs of common retinal conditions.
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Get Results & Recommendations</h3>
              <p className="text-white/80">
                Receive a detailed report with visualization and personalized recommendations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="bg-white hover:bg-primary text-primary hover:text-white font-medium px-8 py-6 text-lg rounded-full"
            >
              <Link to="/diagnosis" className="flex items-center gap-2">
                Try It Now <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 purple-gradient rounded-t-3xl text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Check Your Eye Health?</h2>
              <div className="h-1 w-20 bg-white mb-6"></div>
              <p className="text-lg mb-8 text-white/80">
                Early detection is crucial for preventing vision loss. Use our AI-powered platform to get 
                insights into your retinal health today.
              </p>
              <Button 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full"
              >
                <Link to="/diagnosis" className="flex items-center gap-2">
                  Start Free Diagnosis <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-xl text-white">
                <h3 className="font-bold text-xl mb-4">Did You Know?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                    <span>Early detection of retinal diseases can prevent up to 95% of vision loss cases.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                    <span>Our AI model is trained on over 100,000 clinical retinal images.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
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
