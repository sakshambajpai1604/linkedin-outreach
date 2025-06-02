import { useState } from 'react';
import type { LinkedInProfile } from '../types';
import axios from 'axios';

const API_URL = 'http://localhost:5000/personalized-message';

const MessageGenerator = () => {
  const [form, setForm] = useState<LinkedInProfile>({
    name: '',
    job_title: '',
    company: '',
    location: '',
    summary: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post(API_URL, form);
    setMessage((res.data as { message: string }).message);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Generate LinkedIn Message</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-1 w-full" />
        <input name="job_title" placeholder="Job Title" value={form.job_title} onChange={handleChange} className="border p-1 w-full" />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="border p-1 w-full" />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-1 w-full" />
        <textarea name="summary" placeholder="Summary" value={form.summary} onChange={handleChange} className="border p-1 w-full" />
        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Generate Message</button>
      </form>
      {message && <div className="mt-4 p-3 border rounded bg-gray-100"><strong>Generated:</strong> {message}</div>}
    </div>
  );
};

export default MessageGenerator;