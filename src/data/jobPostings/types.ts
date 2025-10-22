// Define a 'type' for what a job posting object looks like
export type JobSection = {
  title: string;
  content: string;
};

// We are updating JobPosting to use the new JobSection type
export type JobPosting = {
  id: string;
  title: string;
  meta: string; // This will hold the top part (Company, Location, etc.)
  sections: JobSection[]; // This will hold an array of all our sections
  applyLink?: string;
};