import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { COLOR_MAP } from "@/utils/diagnosisConstants";

interface ResultsSectionProps {
  result: any;
}

const ResultsSection = ({ result }: ResultsSectionProps) => {
  const prepareBarChartData = (confidence: any) => {
    return Object.keys(confidence).map(key => ({
      name: key,
      value: (confidence[key] * 100).toFixed(1),
      fill: COLOR_MAP[key as keyof typeof COLOR_MAP]
    }));
  };

  return (
    <Card className="border-none shadow-xl overflow-hidden rounded-2xl card-hover">
      <div className="h-2 bg-secondary"></div>
      <CardContent className="p-6 bg-white space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-secondary leading-tight">
          Results
        </h2>
        
        {!result && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <Eye className="h-12 w-12 mb-3" />
            <p className="leading-relaxed pb-1">
              Upload and analyze a retinal image to see results here
            </p>
          </div>
        )}
        
        {result && (
          <div>
            <div className="mb-6 p-4 rounded-xl purple-gradient text-white">
              <h3 className="font-medium text-lg mb-2">Diagnosis:</h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold">
                  {result.prediction}
                </span>
                <span className="ml-2 text-white/80">
                  ({(result.confidence[result.prediction] * 100).toFixed(1)}% confidence)
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Confidence Scores:</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={prepareBarChartData(result.confidence)}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Confidence']} />
                    <Bar dataKey="value">
                      {prepareBarChartData(result.confidence).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsSection;
