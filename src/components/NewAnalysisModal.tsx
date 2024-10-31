import React, { useState } from 'react';
import { X } from 'lucide-react';

type Step = {
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "Buyer Demographics",
    description: "Filter by customer age, location, and purchase history"
  },
  {
    title: "Purchase Behavior",
    description: "Define purchase frequency and value ranges"
  },
  {
    title: "Time Period",
    description: "Set the analysis timeframe"
  }
];

export function NewAnalysisModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    ageRange: ['18-24'],
    location: '',
    minPurchaseValue: '',
    maxPurchaseValue: '',
    purchaseFrequency: '',
    startDate: '',
    endDate: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(current => current + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Analysis filters:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl w-full max-w-2xl mx-4">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">New Analysis</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex gap-2 mt-6">
            {STEPS.map((step, index) => (
              <div key={index} className="flex-1">
                <div className={`h-1 rounded-full ${
                  index <= currentStep ? 'bg-pink-500' : 'bg-gray-800'
                }`} />
                <p className="text-sm mt-2 text-gray-400">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6">
            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Age Range
                  </label>
                  <select
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                    value={formData.ageRange[0]}
                    onChange={(e) => setFormData({ ...formData, ageRange: [e.target.value] })}
                  >
                    <option value="18-24">18-24 years</option>
                    <option value="25-34">25-34 years</option>
                    <option value="35-44">35-44 years</option>
                    <option value="45-54">45-54 years</option>
                    <option value="55+">55+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Purchase Value Range
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                      placeholder="Min value"
                      value={formData.minPurchaseValue}
                      onChange={(e) => setFormData({ ...formData, minPurchaseValue: e.target.value })}
                    />
                    <input
                      type="number"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                      placeholder="Max value"
                      value={formData.maxPurchaseValue}
                      onChange={(e) => setFormData({ ...formData, maxPurchaseValue: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Purchase Frequency
                  </label>
                  <select
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                    value={formData.purchaseFrequency}
                    onChange={(e) => setFormData({ ...formData, purchaseFrequency: e.target.value })}
                  >
                    <option value="">Select frequency</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Analysis Period
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="date"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                    <input
                      type="date"
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-800 flex justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              className={`px-4 py-2 border border-gray-700 rounded-lg hover:border-pink-500 transition ${
                currentStep === 0 ? 'invisible' : ''
              }`}
            >
              Previous
            </button>
            <button
              type={currentStep === STEPS.length - 1 ? 'submit' : 'button'}
              onClick={currentStep === STEPS.length - 1 ? undefined : handleNext}
              className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition"
            >
              {currentStep === STEPS.length - 1 ? 'Start Analysis' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}