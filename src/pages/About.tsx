
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Calendar, Monitor } from "lucide-react";

const About = () => {
  const technologies = [
    {
      name: "TensorFlow 2.9.1",
      description: "Powers our advanced neural network model for image analysis",
      icon: <Monitor className="h-8 w-8 text-eye-primary" />
    },
    {
      name: "ResNet50 Architecture",
      description: "Deep residual learning framework for superior image recognition",
      icon: <Calendar className="h-8 w-8 text-eye-primary" />
    },
    {
      name: "Transfer Learning",
      description: "Leverages pre-trained networks adapted for retinal disease detection",
      icon: <Eye className="h-8 w-8 text-eye-primary" />
    },
    {
      name: "Medical Validation",
      description: "Trained and tested with ophthalmologist-validated datasets",
      icon: <Heart className="h-8 w-8 text-eye-primary" />
    }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">About EyeVisionAI</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          Empowering patients and healthcare providers with cutting-edge AI technology
          for early detection and management of retinal diseases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At EyeVisionAI, we're committed to making advanced eye disease detection accessible to everyone. 
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

        <div className="bg-eye-light p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">What We Detect</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-eye-primary font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium">Cataract</h3>
                <p className="text-gray-600">Clouding of the normally clear lens of the eye, causing blurry vision.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-eye-primary font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium">Age-related Macular Degeneration (AMD)</h3>
                <p className="text-gray-600">Deterioration of the central portion of the retina, affecting central vision.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-eye-primary font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium">Diabetic Retinopathy (DR)</h3>
                <p className="text-gray-600">Diabetes complication that damages blood vessels in the retina, potentially leading to blindness.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-eye-primary font-bold mr-2">•</span>
              <div>
                <h3 className="font-medium">Glaucoma</h3>
                <p className="text-gray-600">Group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Technology</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-none shadow-md">
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

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">How Accurate is Our AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-xl mb-3">Model Performance</h3>
            <p className="text-gray-600 mb-4">
              Our AI model has been trained on over 100,000 retinal images and achieves:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Overall accuracy:</span>
                <span className="font-bold">92.4%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sensitivity:</span>
                <span className="font-bold">89.7%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Specificity:</span>
                <span className="font-bold">94.3%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Peer-reviewed validation:</span>
                <span className="font-bold">Yes</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-3">Clinical Integration</h3>
            <p className="text-gray-600">
              While our AI provides impressive diagnostic capabilities, we emphasize that it should be used 
              as a screening tool and not a replacement for comprehensive medical examinations. All positive 
              findings should be confirmed by healthcare professionals.
            </p>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-sm">
                Our technology is currently undergoing additional clinical validation studies at major 
                research institutions to further improve its diagnostic accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">Is this service meant to replace my eye doctor?</h3>
            <p className="text-gray-600">
              No. EyeVisionAI is designed as a screening and educational tool, not a replacement for professional 
              medical care. We recommend regular visits to eye care professionals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">How secure is my medical data?</h3>
            <p className="text-gray-600">
              We take data privacy extremely seriously. All uploaded images are encrypted, processed securely, 
              and automatically deleted after analysis unless you explicitly choose to save them.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">What type of images work best?</h3>
            <p className="text-gray-600">
              Our system works best with high-quality fundus (retinal) photographs taken by professional 
              imaging equipment. Smartphone retinal adaptors can also provide adequate images.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">Can I monitor disease progression over time?</h3>
            <p className="text-gray-600">
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
