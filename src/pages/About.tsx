
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Monitor, Search, Award } from "lucide-react";
import {
  ResponsiveContainer, 
  Tooltip,
  XAxis, 
  YAxis,
  HeatMap, 
  Area, 
  ComposedChart,
  CartesianGrid
} from "recharts";

const About = () => {
  const technologies = [
    {
      name: "TensorFlow 2.9.1",
      description: "Powers our advanced neural network model for image analysis",
      icon: <Monitor className="h-8 w-8 text-primary" />
    },
    {
      name: "ResNet50 Architecture",
      description: "Deep residual learning framework for superior image recognition",
      icon: <Search className="h-8 w-8 text-secondary" />
    },
    {
      name: "Transfer Learning",
      description: "Leverages pre-trained networks adapted for retinal disease detection",
      icon: <Heart className="h-8 w-8 text-primary" />
    },
    {
      name: "Medical Validation",
      description: "Trained and tested with ophthalmologist-validated datasets",
      icon: <Award className="h-8 w-8 text-secondary" />
    }
  ];

  // Confusion matrix data
  const confusionMatrixData = [
    { name: "ARMD", ARMD: 51, cataract: 0, diabetic_retinopathy: 0, glaucoma: 0, normal: 0 },
    { name: "cataract", ARMD: 0, cataract: 99, diabetic_retinopathy: 0, glaucoma: 1, normal: 4 },
    { name: "diabetic_retinopathy", ARMD: 0, cataract: 0, diabetic_retinopathy: 109, glaucoma: 0, normal: 1 },
    { name: "glaucoma", ARMD: 0, cataract: 0, diabetic_retinopathy: 0, glaucoma: 94, normal: 7 },
    { name: "normal", ARMD: 0, cataract: 4, diabetic_retinopathy: 0, glaucoma: 6, normal: 97 }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About RetinalAI</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          Empowering patients and healthcare providers with cutting-edge AI technology
          for early detection and management of retinal diseases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
          <p className="text-gray-600 mb-4">
            At RetinalAI, we're committed to making advanced eye disease detection accessible to everyone. 
            Our mission is to leverage artificial intelligence to provide early detection of vision-threatening 
            conditions, helping prevent avoidable vision loss globally.
          </p>
          <p className="text-gray-600 mb-4">
            By combining advanced deep learning models with medical expertise, we've created a platform that 
            can detect common retinal diseases with accuracy comparable to trained ophthalmologists.
          </p>
          <p className="text-gray-600">
            We believe that early detection is the key to preserving vision. Our technology aims to 
            serve as a valuable screening tool, directing patients to seek appropriate medical care 
            when needed and providing peace of mind when results are normal.
          </p>
        </div>

        <div className="orange-gradient p-8 rounded-2xl shadow-lg order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-4 text-white">What We Detect</h2>
          <ul className="space-y-4">
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium text-white">Cataract</h3>
                <p className="text-white/80">Clouding of the normally clear lens of the eye, causing blurry vision.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium text-white">Age-related Macular Degeneration (AMD)</h3>
                <p className="text-white/80">Deterioration of the central portion of the retina, affecting central vision.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium text-white">Diabetic Retinopathy (DR)</h3>
                <p className="text-white/80">Diabetes complication that damages blood vessels in the retina, potentially leading to blindness.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium text-white">Glaucoma</h3>
                <p className="text-white/80">Group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-none shadow-md card-hover overflow-hidden">
              <div className={`h-2 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="purple-gradient rounded-2xl p-8 mb-16 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Model Accuracy</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-medium text-2xl mb-3 text-white text-center">Overall Model Performance</h3>
            <div className="flex justify-center items-center h-64">
              <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center border-8 border-white/30 shadow-lg">
                <div>
                  <p className="text-6xl font-bold text-white">95.4<span className="text-3xl">%</span></p>
                  <p className="text-white/80 text-center">Test Accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium text-xl mb-3 text-white text-center">Confusion Matrix</h3>
              <div className="h-96 bg-white/10 p-4 rounded-xl">
                <img 
                  src="/lovable-uploads/85d673a0-fb60-430d-81b5-04b1288d9361.png" 
                  alt="Confusion Matrix" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white/80 text-sm mt-2 text-center">
                Our model shows excellent performance across all disease categories, with highest 
                accuracy in detecting diabetic retinopathy and cataract.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="green-gradient p-6 rounded-xl shadow-lg text-white">
            <h3 className="font-medium text-lg mb-2">Is this service meant to replace my eye doctor?</h3>
            <p className="text-white/80">
              No. RetinalAI is designed as a screening and educational tool, not a replacement for professional 
              medical care. We recommend regular visits to eye care professionals.
            </p>
          </div>
          <div className="orange-gradient p-6 rounded-xl shadow-lg text-white">
            <h3 className="font-medium text-lg mb-2">How secure is my medical data?</h3>
            <p className="text-white/80">
              We take data privacy extremely seriously. All uploaded images are encrypted, processed securely, 
              and automatically deleted after analysis unless you explicitly choose to save them.
            </p>
          </div>
          <div className="purple-gradient p-6 rounded-xl shadow-lg text-white">
            <h3 className="font-medium text-lg mb-2">What type of images work best?</h3>
            <p className="text-white/80">
              Our system works best with high-quality fundus (retinal) photographs taken by professional 
              imaging equipment. Smartphone retinal adaptors can also provide adequate images.
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl shadow-lg text-white">
            <h3 className="font-medium text-lg mb-2">Can I monitor disease progression over time?</h3>
            <p className="text-white/80">
              Yes, our platform allows you to save previous results and compare changes over time, 
              providing valuable information about disease progression or stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
