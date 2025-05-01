import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import TensorFlowIcon from "@/components/icons/TensorFlowIcon";
import NeuralNetworkIcon from "@/components/icons/NeuralNetworkIcon";
import TransferLearningIcon from "@/components/icons/TransferLearningIcon";
import {
  ResponsiveContainer, 
  Tooltip,
  XAxis, 
  YAxis,
  Area, 
  ComposedChart,
  CartesianGrid
} from "recharts";

const About = () => {
  const technologies = [
    {
      name: "TensorFlow 2.9.1",
      description: "Powers our advanced neural network model for image analysis",
      icon: <TensorFlowIcon className="h-8 w-8 text-primary" />
    },
    {
      name: "ResNet50 Architecture",
      description: "Deep residual learning framework for superior image recognition",
      icon: <NeuralNetworkIcon className="h-8 w-8 text-secondary" />
    },
    {
      name: "Transfer Learning",
      description: "Leverages pre-trained networks adapted for retinal disease detection",
      icon: <TransferLearningIcon className="h-8 w-8 text-primary" />
    },
    {
      name: "Medical Validation",
      description: "Trained and tested with ophthalmologist-validated datasets",
      icon: <Award className="h-8 w-8 text-secondary" />
    }
  ];

  const confusionMatrixData = [
    { name: "ARMD", ARMD: 51, cataract: 0, diabetic_retinopathy: 0, glaucoma: 0, normal: 0 },
    { name: "cataract", ARMD: 0, cataract: 99, diabetic_retinopathy: 0, glaucoma: 1, normal: 4 },
    { name: "diabetic_retinopathy", ARMD: 0, cataract: 0, diabetic_retinopathy: 109, glaucoma: 0, normal: 1 },
    { name: "glaucoma", ARMD: 0, cataract: 0, diabetic_retinopathy: 0, glaucoma: 94, normal: 7 },
    { name: "normal", ARMD: 0, cataract: 4, diabetic_retinopathy: 0, glaucoma: 6, normal: 97 }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-tight px-4">
          Pioneering AI in Eye Care
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-foreground/80 max-w-4xl mx-auto text-center font-medium leading-relaxed pb-4 px-6">
          Leading the revolution in early detection and management of retinal diseases 
          through advanced artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed pb-1">
            At RetinalAI, we're revolutionizing eye disease detection through innovative AI technology. 
            Our mission is to make advanced diagnostic capabilities accessible worldwide, helping prevent 
            vision loss through early detection.
          </p>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed pb-1">
            With our state-of-the-art deep learning models, we've achieved a remarkable 
            <span className="text-primary font-bold"> 95.4% accuracy</span> in detecting common 
            retinal conditions, matching the precision of experienced ophthalmologists.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed pb-1">
            We believe that prevention is the key to preserving vision. Our platform serves as a 
            crucial screening tool, enabling timely interventions and providing peace of mind 
            through reliable results.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary via-secondary to-accent p-8 rounded-2xl shadow-lg order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-4 text-white">What We Detect</h2>
          <ul className="space-y-4">
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-white mb-1">Cataract</h3>
                <p className="text-white/90 font-medium leading-relaxed pb-1">Clouding of the normally clear lens of the eye, causing blurry vision.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-white mb-1">Age-related Macular Degeneration (AMD)</h3>
                <p className="text-white/90 font-medium leading-relaxed pb-1">Deterioration of the central portion of the retina, affecting central vision.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-white mb-1">Diabetic Retinopathy (DR)</h3>
                <p className="text-white/90 font-medium leading-relaxed pb-1">Diabetes complication that damages blood vessels in the retina, potentially leading to blindness.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <span className="text-white font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-white mb-1">Glaucoma</h3>
                <p className="text-white/90 font-medium leading-relaxed pb-1">Group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.</p>
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
                <p className="text-gray-600 leading-relaxed pb-1">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="purple-gradient rounded-2xl p-8 mb-16 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Performance Metrics</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-medium text-2xl mb-3 text-white text-center">Model Accuracy Analysis</h3>
            <div className="flex justify-center items-center h-64">
              <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center border-8 border-white/30 shadow-lg">
                <div>
                  <p className="text-6xl font-bold text-white">95.4<span className="text-3xl">%</span></p>
                  <p className="text-white/90 text-center font-medium">Test Accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-xl mb-3 text-white text-center">Confusion Matrix</h3>
                <div className="bg-white/10 p-4 rounded-xl">
                  <img 
                    src="/lovable-uploads/85d673a0-fb60-430d-81b5-04b1288d9361.png" 
                    alt="Confusion Matrix" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-xl mb-3 text-white text-center">Detailed Metrics</h3>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-white">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-2">Class</th>
                            <th className="text-center py-2">Precision</th>
                            <th className="text-center py-2">Recall</th>
                            <th className="text-center py-2">F1-Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2">ARMD</td>
                            <td className="text-center">1.00</td>
                            <td className="text-center">1.00</td>
                            <td className="text-center">1.00</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2">Cataract</td>
                            <td className="text-center">0.96</td>
                            <td className="text-center">0.95</td>
                            <td className="text-center">0.96</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2">Diabetic Retinopathy</td>
                            <td className="text-center">1.00</td>
                            <td className="text-center">0.99</td>
                            <td className="text-center">1.00</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2">Glaucoma</td>
                            <td className="text-center">0.93</td>
                            <td className="text-center">0.93</td>
                            <td className="text-center">0.93</td>
                          </tr>
                          <tr>
                            <td className="py-2">Normal</td>
                            <td className="text-center">0.89</td>
                            <td className="text-center">0.91</td>
                            <td className="text-center">0.90</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-xl mb-3 text-white text-center">Dataset Information</h3>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-medium mb-2">Training & Validation Datasets</h4>
                        <ul className="text-white/90 text-sm space-y-2">
                          <li className="flex items-center gap-2">
                            <span>• ARMD Curated Dataset 2023</span>
                            <a 
                              href="https://www.kaggle.com/datasets/rakhshandamujib/armd-curated-dataset-2023"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-primary transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>• Origa Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/arnavjain1/glaucoma-datasets"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-primary transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>• Refuge Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/arnavjain1/glaucoma-datasets"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-primary transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>• Aptos2019 Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/mariaherrerot/aptos2019"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-primary transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>• ODIR-5K Classification Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/tanjemahamed/odir5k-classification"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-primary transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>• ODIR-5K Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/andrewmvd/ocular-disease-recognition-odir5k"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-primary transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-medium mb-2">Dataset Statistics</h4>
                        <div className="space-y-4">
                          <div>
                            <ul className="text-white/90 text-sm space-y-1">
                              <li>• Total Images: Approximately 1,00,000</li>
                              <li>• Balanced class distribution</li>
                              <li>• High-quality Images</li>
                              <li>• Pre-defined class Labels</li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white/90 text-center leading-relaxed">
            Our model achieves exceptional performance across all disease categories, with particularly high accuracy in ARMD and Diabetic Retinopathy detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
