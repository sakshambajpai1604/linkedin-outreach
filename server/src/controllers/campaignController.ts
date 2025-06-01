import { Request, Response } from 'express';
import Campaign from '../models/Campaign';

export const getCampaigns = async (_req: Request, res: Response) => {
  const campaigns = await Campaign.find({ status: { $ne: 'DELETED' } });
  res.json(campaigns);
};

export const getCampaignById = async (req: Request, res: Response) => {
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign || campaign.status === 'DELETED') {
    return res.status(404).json({ message: 'Campaign not found' });
  }
  res.json(campaign);
};

export const createCampaign = async (req: Request, res: Response) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.status(201).json(campaign);
};

export const updateCampaign = async (req: Request, res: Response) => {
  const updated = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const softDeleteCampaign = async (req: Request, res: Response) => {
  const deleted = await Campaign.findByIdAndUpdate(req.params.id, { status: 'DELETED' }, { new: true });
  res.json(deleted);
};