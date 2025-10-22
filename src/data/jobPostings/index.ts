import type { JobPosting } from './types';

// 1. Import all your individual job files here
import { foundingCvEngineer } from './founding-cv-engineer';
// import { anotherJob } from './another-job';
// import { aThirdJob } from './a-third-job';

// 2. Add the jobs you want to show on the site to this array.
// To remove a job, just comment it out here.
const allJobPostings: JobPosting[] = [
  foundingCvEngineer,
  // anotherJob,
  // aThirdJob,
];

// 3. Export the final list
export const jobPostings = allJobPostings;