// src/data/jobPostings/founding-cv-engineer.ts

import type { JobPosting } from './types';

// --- Export the job object ---
export const foundingCvEngineer: JobPosting = {
  id: "cv-eng-01",
  title: "Founding Computer Vision Engineer",
  applyLink: "mailto:info@zeroindustries.eu",

  // --- This is the new meta section ---
  meta: `Company: Zero Industries
Location: Toulouse, France (on site)
Commitment: Full time
Level: Founding Engineer
Language: English
Citizenship: European`,

  // --- This is the new sections array ---
  sections: [
    {
      title: "🚀 Mission",
      content: `At Zero Industries, we are building the future of plug-and-play European intelligence. Imagine a world where existing defence systems can become intelligent with the click of a button - Zero is building exactly that capability. From Europe to Europe.
We are starting with one of the most critical challenges in modern autonomy: navigating when GPS is no longer available.
When satellite signals are jammed or denied, autonomous systems must still see, reason, and locate themselves. Our first mission is to give them that ability through the next generation of visual intelligence and localisation. This is just the first step to redefine intelligence and autonomy towards European sovereignty.
We are backed by Project Europe and Heartfelt_, two of the most respected early stage investors in the continent. Now, we are looking for a Founding Computer Vision Engineer to join our core team in Toulouse and help shape the future of European defence.`
    },
    {
      title: "🛰️ Your Role",
      content: `As a computer vision engineer, you will work on core perception and localisation pipelines, helping design and build the visual backbone that powers our autonomous systems. As a founding engineer, you will be deeply involved in shaping technical decisions, product vision, hiring, marketing, scaling…
Being a founding engineer means you will have a direct impact on whether Zero succeeds or fails. You will join a small, highly technical team working at theintersection of deep learning, aerial perception, and high performance computing, where every experiment moves the frontier of what is possible.
As a founding computer vision engineer, you will have access to state of the art NVIDIA GPUs (A100s, H100s, and H200s), and the freedom to design, train and evaluate models that run in the most demanding real world scenarios. It's a position of great responsibility and impact.
This isn't just a job. This is a unique opportunity to build a company, a product, and a culture from the ground up, working directly alongside the founders. You will contribute directly to Europe's technological independence in GPS denied environments, and set the standard for AI and computer vision in the new era of European defence.`
    },
    {
      title: "⚙️ Responsibilities",
      content: `• Develop and improve advanced computer vision and perception models for real world deployment
• Contribute to the training, evaluation and optimisation of large scale vision systems
• Design and maintain efficient pipelines using PyTorch and multi GPU environments
• Work with Weights and Biases, for experiment tracking and performance analysis
• Collaborate closely on dataset curation, model optimisation, and research direction
Note: some technical details are confidential and discussed only during interviews.`
    },
    {
      title: "🧩 Ideal Background",
      content: `• MSc in Computer Vision, Machine Learning, Robotics or any branch of Engineering (PhD is a strong plus).
• At least 2 years of proven experience working in computer vision and deep learning
• Solid experience with PyTorch, deep model training and fine tuning
• Strong background in feature extraction and matching, or in visual odometry and SLAM
• Familiarity with Docker, Linux and modern experiment tracking tools such as W&B
• Comfortable working with real and sensitive datasets
• Fluent in English`
    },
    {
      title: "🧠 Bonus Skills",
      content: `• Experience in image retrieval, geometric deep learning or cross domain vision
• Knowledge of synthetic data generation or diffusion based augmentation
• Previous work with aerial or satellite imagery`
    },
    {
      title: "⚡ What we offer",
      content: `• A founding role and equity stake in one of Europe's most ambitious deep tech startups
• Massive impact: from defining strategy and software architecture to making executive decisions alongside the founders
• Access to the latest NVIDIA GPU infrastructure (A100s, H100s, H200s)
• High-trust, high-autonomy: you will have the freedom to design your own workflows and experiments, and manage your own time
• We are backed by leading European investors, and testing with major players in the European defence ecosystem
• A mission that truly matters: powering intelligence and autonomy for European defence.`
    },
    {
      title: "🧭 Join us",
      content: `Europe has been outpaced by most major players in the defence ecosystem. To maintain a strategic edge and secure our own sovereignty, we need to ensure all legacy and next-generation defence assets are equipped with the latest technology and intelligence capabilities.
If you are ready to play a major role in this mission, protecting the frontlines of democracy, developing AI models and state of the art computer vision technology, we would love to meet you.
This is the perfect moment to join Zero: we are past the “will this survive” stage, but still early enough that your contributions will define the company's future.`
    }
  ]
};