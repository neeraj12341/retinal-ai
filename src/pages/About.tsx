
import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import NeuralNetworkIcon from '@/components/icons/NeuralNetworkIcon';
import TensorFlowIcon from '@/components/icons/TensorFlowIcon';
import TransferLearningIcon from '@/components/icons/TransferLearningIcon';

const About = () => {
  const accuracyData = [
    { name: 'RetinalAI', accuracy: 95.4, fill: '#0EA5E9' },
    { name: 'Traditional Methods', accuracy: 82.7, fill: '#7DD3FC' }
  ];
  
  const modelData = [
    { name: 'CNN', value: 40, color: '#0284C7' },
    { name: 'ResNet', value: 30, color: '#38BDF8' },
    { name: 'VGG', value: 20, color: '#0EA5E9' },
    { name: 'EfficientNet', value: 10, color: '#7DD3FC' }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-eye-primary to-eye-secondary">
          Pioneering AI in Eye Care
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-eye-primary to-eye-secondary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Leading the revolution in early detection and management of retinal diseases through 
          advanced artificial intelligence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-eye-secondary">Our Vision</h2>
          <div className="h-1 w-16 bg-eye-secondary mb-6"></div>
          <div className="space-y-4 text-gray-600">
            <p>
              At RetinalAI, we're revolutionizing eye disease detection through innovative AI 
              technology. Our mission is to make advanced diagnostic capabilities accessible 
              worldwide, helping prevent vision loss through early detection.
            </p>
            <p>
              With our state-of-the-art deep learning models, we've achieved a remarkable 
              <span className="font-semibold text-eye-primary"> 95.4% accuracy</span> in detecting common retinal conditions, 
              matching the precision of experienced ophthalmologists.
            </p>
            <p>
              We believe that prevention is the key to preserving vision. Our platform serves as 
              a crucial screening tool, enabling timely interventions and providing peace of 
              mind through reliable results.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-eye-secondary">What We Detect</h2>
          <div className="h-1 w-16 bg-eye-secondary mb-6"></div>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-eye-accent to-eye-light rounded-xl">
              <h3 className="font-semibold mb-1">• Cataract</h3>
              <p className="text-sm text-gray-700">Clouding of the normally clear lens of the eye, causing blurry vision.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-eye-accent to-eye-light rounded-xl">
              <h3 className="font-semibold mb-1">• Age-related Macular Degeneration (AMD)</h3>
              <p className="text-sm text-gray-700">Deterioration of the central portion of the retina, affecting central vision.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-eye-accent to-eye-light rounded-xl">
              <h3 className="font-semibold mb-1">• Diabetic Retinopathy (DR)</h3>
              <p className="text-sm text-gray-700">Diabetes complication that damages blood vessels in the retina, potentially leading to blindness.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-eye-accent to-eye-light rounded-xl">
              <h3 className="font-semibold mb-1">• Glaucoma</h3>
              <p className="text-sm text-gray-700">Group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-eye-secondary">Our Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <NeuralNetworkIcon className="w-16 h-16 text-eye-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-eye-dark">Deep Neural Networks</h3>
            <p className="text-gray-600">
              Our system uses multiple layers of neural networks to identify patterns in retinal images
              that may be invisible to the human eye.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TensorFlowIcon className="w-16 h-16 text-eye-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-eye-dark">TensorFlow Architecture</h3>
            <p className="text-gray-600">
              Built on Google's TensorFlow, our models benefit from continuous optimization
              and scaling across different deployment scenarios.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TransferLearningIcon className="w-16 h-16 text-eye-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-eye-dark">Transfer Learning</h3>
            <p className="text-gray-600">
              We leverage pre-trained models to achieve exceptional accuracy even with
              limited training data for rare conditions.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 text-eye-secondary">Accuracy Comparison</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={accuracyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" name="Accuracy %" barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 text-eye-secondary">Model Architecture</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={modelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {modelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-to-r from-eye-primary to-eye-teal rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <p className="mb-8">
          RetinalAI follows a rigorous process to ensure our technology consistently delivers 
          high-quality results for healthcare professionals and patients.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">1</span>
            </div>
            <h3 className="font-bold mb-2">Data Collection</h3>
            <p className="text-sm">
              We gather diverse, high-quality retinal images from multiple sources to train our models.
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">2</span>
            </div>
            <h3 className="font-bold mb-2">Image Processing</h3>
            <p className="text-sm">
              Advanced preprocessing techniques enhance image quality for optimal analysis.
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">3</span>
            </div>
            <h3 className="font-bold mb-2">AI Analysis</h3>
            <p className="text-sm">
              Our deep learning models identify disease markers with extraordinary precision.
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold text-xl">4</span>
            </div>
            <h3 className="font-bold mb-2">Report Generation</h3>
            <p className="text-sm">
              Comprehensive, easy-to-understand results with personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
