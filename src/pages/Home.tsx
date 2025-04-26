
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Search, Award, ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Advanced AI Analysis",
      description: "Experience instant retinal scan analysis powered by state-of-the-art deep learning technology",
      icon: <Search className="h-8 w-8 mb-4 text-accent-foreground group-hover:text-white" />
    },
    {
      title: "Comprehensive Detection",
      description: "Identify multiple eye conditions including Cataract, AMD, DR, and Glaucoma with clinical-grade precision",
      icon: <Eye className="h-8 w-8 mb-4 text-accent-foreground group-hover:text-white" />
    },
    {
      title: "Detailed Analysis",
      description: "Receive in-depth reports with visual aids and clear explanations of detected conditions",
      icon: <Award className="h-8 w-8 mb-4 text-accent-foreground group-hover:text-white" />
    },
    {
      title: "Personalized Care",
      description: "Get tailored health recommendations and follow-up care suggestions based on your results",
      icon: <Heart className="h-8 w-8 mb-4 text-accent-foreground group-hover:text-white" />
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
                Revolutionary 
                <span className="text-primary-foreground"> Eye Disease Detection</span>
              </h1>
              <p className="text-xl text-white font-medium mb-8 leading-relaxed">
                Empowering healthcare with AI-driven retinal analysis, achieving an impressive 
                <span className="font-bold text-primary-foreground"> 95.4% accuracy</span> in detecting 
                common eye conditions.
              </p>
            </div>
            <div className="flex justify-center lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1631815590461-b636d84e9e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Advanced Eye Diagnosis Technology" 
                className="rounded-2xl shadow-2xl max-w-full h-auto transform rotate-3"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-accent to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Excellence in Eye Care</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-medium">
              Combining cutting-edge AI technology with medical expertise for precise, 
              rapid detection of retinal conditions.
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">How It Works</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get accurate retinal disease detection in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Upload Your Scan</h3>
              <p className="text-gray-700">
                Simply upload a high-quality retinal scan image to our secure platform.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">AI Analysis</h3>
              <p className="text-gray-700">
                Our advanced ResNet50 model analyzes your image for signs of common retinal conditions.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Get Results & Recommendations</h3>
              <p className="text-gray-700">
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

      {/* CTA Section with white background */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Check Your Eye Health?</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-6"></div>
              <p className="text-lg mb-8 text-gray-600">
                Early detection is crucial for preventing vision loss. Use our AI-powered platform to get 
                insights into your retinal health today.
              </p>
              <Button 
                variant="secondary" 
                asChild
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg rounded-full"
              >
                <Link to="/diagnosis" className="flex items-center gap-2">
                  Start Free Diagnosis <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="bg-gradient-to-br from-background via-accent to-background p-6 rounded-xl shadow-xl">
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
