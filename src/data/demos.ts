type Demo = {
  slug: string;
  title: string;
  builder: string;
  summary: string;
  useCase: string;
  demoedOn: string;
  projectUrl: string;
  eventUrl?: string;
  makeYourOwnUrl?: string;
};

export const DEMOS: readonly Demo[] = [
  {
    slug: "cyoa-profile-md",
    title: "CYOA profile.md",
    builder: "Ben O’Hanlon",
    summary:
      "Turn your CV and work samples into a Markdown profile people can explore with their own AI.",
    useCase: "Sharing your work",
    demoedOn: "2026-11-25",
    projectUrl: "https://benohanlon.md/",
    eventUrl: "https://luma.com/5cg4d1nv",
    makeYourOwnUrl: "https://benohanlon.md/create/",
  },
];
