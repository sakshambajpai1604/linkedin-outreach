import { useEffect, useState } from 'react';
import type { Campaign } from '../types';
import axios from 'axios';

const defaultForm: Campaign = {
  name: '',
  description: '',
  status: 'ACTIVE',
  leads: [],
  accountIDs: []
};

const API_URL = 'http://localhost:5000/campaigns';

const CampaignForm = ({
  editing,
  onSuccess
}: {
  editing: Campaign | null;
  onSuccess: () => void;
}) => {
  const [form, setForm] = useState<Campaign>(defaultForm);

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._id) {
      await axios.put(`${API_URL}/${form._id}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm(defaultForm);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-1 w-full" />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-1 w-full" />
      <select name="status" value={form.status} onChange={handleChange} className="border p-1 w-full">
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Save Campaign</button>
    </form>
  );
};

export default CampaignForm;