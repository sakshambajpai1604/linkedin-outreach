import { Request, Response } from 'express';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateMessage = async (req: Request, res: Response) => {
  const { name, job_title, company, location, summary } = req.body;

  const prompt = `Generate a short LinkedIn outreach message for:
Name: ${name}
Job Title: ${job_title}
Company: ${company}
Location: ${location}
Summary: ${summary}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const message = completion.choices[0]?.message?.content || '';
    res.json({ message });
  } catch (error) {
    console.error('AI generation failed:', error);
    res.status(500).json({ error: 'AI generation failed' });
  }
};