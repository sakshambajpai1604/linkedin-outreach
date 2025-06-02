// src/pages/Home.tsx

import React from "react";
import CampaignList from "../components/CampaignList";
import CampaignForm from "../components/CampaignForm";
import MessageGenerator from "../components/MessageGenerator";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">LinkedIn Outreach Tool</h1>
        <p className="text-sm text-gray-600">Manage campaigns and generate personalized messages</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Campaign Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Campaigns</h2>
          <CampaignForm editing={null} onSuccess={() => {}} />
          <CampaignList />
        </div>

        {/* Message Generator Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">LinkedIn Message Generator</h2>
          <MessageGenerator />
        </div>
      </div>
    </div>
  );
};

export default Home;