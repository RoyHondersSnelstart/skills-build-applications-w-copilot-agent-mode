import { Router } from 'express';
import { Activity } from '../models/Activity.js';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ activityDate: -1 }).lean();
    response.json(activities);
  } catch (error) {
    next(error);
  }
});

export default activitiesRouter;