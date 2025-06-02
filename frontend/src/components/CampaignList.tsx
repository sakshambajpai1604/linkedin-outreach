import { useEffect, useState } from 'react';
import { Campaign } from '../types';
import axios from 'axios';
import CampaignForm from './CampaignForm';

const API_URL = 'http://localhost:5000/campaigns';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [editing, setEditing] = useState<Campaign | null>(null);

  const fetchCampaigns = async () => {
    const res = await axios.get(API_URL);
    setCampaigns(res.data);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchCampaigns();
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Campaigns</h2>
      <CampaignForm onSuccess={fetchCampaigns} editing={editing} />
      <ul className="space-y-2">
        {campaigns.map((c) => (
          <li key={c._id} className="border p-3 rounded shadow-sm">
            <div className="font-bold">{c.name}</div>
            <div>{c.description}</div>
            <div>Status: {c.status}</div>
            <button className="text-blue-500" onClick={() => setEditing(c)}>Edit</button>
            <button className="text-red-500 ml-4" onClick={() => handleDelete(c._id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;