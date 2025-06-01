import { Request, Response } from 'express';
import Campaign from '../models/campaign';

export const getCampaigns = async (req: Request, res: Response): Promise<void> => {
  try {
    const campaigns = await Campaign.find({ status: { $ne: 'DELETED' } });
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCampaignById = async (req: Request, res: Response): Promise<void> => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign || campaign.status === 'DELETED') {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }
    res.status(200).json(campaign);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

export const updateCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Invalid update' });
  }
};

export const softDeleteCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Campaign.findByIdAndUpdate(
      req.params.id,
      { status: 'DELETED' },
      { new: true }
    );
    if (!deleted) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }
    res.status(200).json({ message: 'Campaign deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};