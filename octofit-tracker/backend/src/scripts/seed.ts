import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

const users = [
  {
    username: 'maya_runner',
    email: 'maya.runner@example.com',
    displayName: 'Maya Chen',
    teamName: 'Cardio Crew',
    fitnessGoal: 'Run a faster 10K',
    joinedAt: new Date('2026-08-03'),
  },
  {
    username: 'leo_lifts',
    email: 'leo.lifts@example.com',
    displayName: 'Leo Martinez',
    teamName: 'Strength Squad',
    fitnessGoal: 'Build functional strength',
    joinedAt: new Date('2026-08-12'),
  },
  {
    username: 'nora_flow',
    email: 'nora.flow@example.com',
    displayName: 'Nora Patel',
    teamName: 'Flex Force',
    fitnessGoal: 'Improve mobility',
    joinedAt: new Date('2026-09-01'),
  },
];

const teams = [
  {
    name: 'Cardio Crew',
    location: 'Amsterdam',
    memberCount: 12,
    weeklyGoalMinutes: 1800,
    motto: 'Every minute moves the meter.',
  },
  {
    name: 'Strength Squad',
    location: 'Rotterdam',
    memberCount: 9,
    weeklyGoalMinutes: 1350,
    motto: 'Lift well, recover better.',
  },
  {
    name: 'Flex Force',
    location: 'Utrecht',
    memberCount: 7,
    weeklyGoalMinutes: 1050,
    motto: 'Mobility is momentum.',
  },
];

const activities = [
  {
    username: 'maya_runner',
    type: 'Interval run',
    durationMinutes: 42,
    caloriesBurned: 430,
    activityDate: new Date('2026-09-27T07:30:00Z'),
    notes: 'Six 800m repeats with steady recovery jogs.',
  },
  {
    username: 'leo_lifts',
    type: 'Full-body strength',
    durationMinutes: 55,
    caloriesBurned: 390,
    activityDate: new Date('2026-09-28T17:15:00Z'),
    notes: 'Deadlifts, presses, rows, and farmer carries.',
  },
  {
    username: 'nora_flow',
    type: 'Mobility flow',
    durationMinutes: 35,
    caloriesBurned: 160,
    activityDate: new Date('2026-09-29T06:45:00Z'),
    notes: 'Hip openers, thoracic rotations, and balance work.',
  },
  {
    username: 'maya_runner',
    type: 'Recovery ride',
    durationMinutes: 30,
    caloriesBurned: 210,
    activityDate: new Date('2026-09-30T18:00:00Z'),
    notes: 'Easy spin after speed session.',
  },
];

const leaderboardEntries = [
  {
    rank: 1,
    username: 'maya_runner',
    teamName: 'Cardio Crew',
    points: 1280,
    weeklyMinutes: 212,
  },
  {
    rank: 2,
    username: 'leo_lifts',
    teamName: 'Strength Squad',
    points: 1110,
    weeklyMinutes: 185,
  },
  {
    rank: 3,
    username: 'nora_flow',
    teamName: 'Flex Force',
    points: 940,
    weeklyMinutes: 164,
  },
];

const workouts = [
  {
    title: '10K Tempo Builder',
    focusArea: 'Cardio endurance',
    difficulty: 'Intermediate',
    durationMinutes: 45,
    suggestedForGoal: 'Run a faster 10K',
    exercises: ['10 minute warmup jog', '20 minute tempo run', '5 hill strides', '10 minute cooldown'],
  },
  {
    title: 'Foundation Strength Circuit',
    focusArea: 'Total body strength',
    difficulty: 'Beginner',
    durationMinutes: 40,
    suggestedForGoal: 'Build functional strength',
    exercises: ['Goblet squats', 'Pushups', 'Dumbbell rows', 'Plank holds'],
  },
  {
    title: 'Daily Mobility Reset',
    focusArea: 'Mobility',
    difficulty: 'All levels',
    durationMinutes: 25,
    suggestedForGoal: 'Improve mobility',
    exercises: ['World greatest stretch', '90/90 hip switches', 'Cat cow', 'Ankle rocks'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboardEntries),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
