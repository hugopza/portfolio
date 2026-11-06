export interface WeeklyPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  published: boolean;
  sections: {
    title: string;
    paragraphs: string[];
    links?: { label: string; href: string }[];
  }[];
}

// Add entries here using the example in README.md. Only published entries get pages.
export const weeklyPosts: WeeklyPost[] = [
  {
    slug: "week-0-hello-world",
    title: "Week 0: Hello World!",
    date: "2026-11-06",
    summary: "A small space to share what I’m building, trying and learning.",
    published: true,
    sections: [
      {
        title: "Hello World!",
        paragraphs: [
          "Projects usually show the result. I wanted a place for everything that happens along the way: ideas, experiments, things that work and things that need another try.",
          "That’s what Weekly is for. I’ll share AI developments that catch my attention, updates on my projects and notes on what I’m learning. Short entries, with links when there’s something worth exploring further.",
        ],
      },
      {
        title: "Starting at zero",
        paragraphs: [
          "I started programming to solve small problems in my own day-to-day life. That curiosity still drives most of what I build, and I’d like these notes to reflect it.",
          "This is the first entry. More to come as I go.",
        ],
      },
    ],
  },
];

export const publishedPosts = weeklyPosts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date));

export function formatPostDate(date: string) {
  const monday = new Date(`${date}T00:00:00Z`);
  const weekday = monday.getUTCDay() || 7;
  monday.setUTCDate(monday.getUTCDate() - weekday + 1);
  const sunday = new Date(monday);
  sunday.setUTCDate(sunday.getUTCDate() + 6);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  return formatter.formatRange(monday, sunday);
}
