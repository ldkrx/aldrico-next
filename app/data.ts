type Project = {
    name: string;
    description: string;
    link: string;
    images: string[];
    id: string;
};

type WorkExperience = {
    company: string;
    title: string;
    start: string;
    end: string;
    link: string;
    id: string;
};

type BlogPost = {
    title: string;
    description: string;
    link: string;
    uid: string;
};

type SocialLink = {
    label: string;
    link: string;
};

export const PROJECTS: Project[] = [
    {
        name: "University Administrative Platform",
        description: "Bridging the gap between students, lecturers, and administration.",
        link: "#",
        images: [
            "/images/university-administrative-platform-1.png",
            "/images/university-administrative-platform-2.png",
            "/images/university-administrative-platform-3.png",
        ],
        id: "project1",
    },
    {
        name: "Hotel ERP System",
        description: "Comprehensive management solution for hotel operations.",
        link: "#",
        images: ["/images/hotel-1.png", "/images/hotel-2.png", "/images/hotel-3.png"],
        id: "project2",
    },
    {
        name: "Food Ordering & Delivery",
        description:
            "Performant web based food marketplace and ordering system. Basically UberEats.",
        link: "#",
        images: ["/images/food-ordering.png"],
        id: "project3",
    },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        company: "Open Mind Digital",
        title: "Principal Software Developer",
        start: "2018",
        end: "Present",
        link: "#",
        id: "work1",
    },
    {
        company: "Freelance",
        title: "Software Developer",
        start: "2022",
        end: "Present",
        link: "#",
        id: "work2",
    },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        title: "Exploring the Intersection of Design, AI, and Design Engineering",
        description: "How AI is changing the way we design",
        link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
        uid: "blog-1",
    },
    {
        title: "Why I left my job to start my own company",
        description: "A deep dive into my decision to leave my job and start my own company",
        link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
        uid: "blog-2",
    },
    {
        title: "What I learned from my first year of freelancing",
        description: "A look back at my first year of freelancing and what I learned",
        link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
        uid: "blog-3",
    },
    {
        title: "How to Export Metadata from MDX for Next.js SEO",
        description:
            "A guide on exporting metadata from MDX files to leverage Next.js SEO features.",
        link: "/blog/example-mdx-metadata",
        uid: "blog-4",
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "Github",
        link: "https://github.com/ibelick",
    },
    {
        label: "Twitter",
        link: "https://twitter.com/ibelick",
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/ibelick",
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/ibelick",
    },
];

export const EMAIL = "your@email.com";
