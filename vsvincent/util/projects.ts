export interface Project {
    slug: string;
    title: string;
    imageUrl: string;
    description: string;
    markdown: string;
    published: boolean;
    date: Date;
    url?: string;
    repository?: string;
  }
  //NOTE: **Do NOT indent the markdown as it will break text-wrapping**
  const projects: Project[] = [
    {
        slug: "isnad",
        title: 'Isnad.app',
        imageUrl: '/images/project1.jpg',
        description: 'A web project recording chains of transmission and their transmitters, particularly in the English language.',
        markdown: `## Why Isnad
Isnad will allow users to help create a graph-based map of Hadith transmission chains as well as their transmitters and information relevant to them.
Hadith are narrations or sayings attributed to the Prophet Muhammad, which are crucial in Islamic jurisprudence and theology. The authenticity and reliability of Hadith are determined in part by the chain of transmission (isnad) through which they were passed down.`,
        published: true,
        date: new Date('2023-12-01'),
        repository: 'vsvincent/isnad-backend',
        url: 'https://isnad.app'
    },
    {
        slug: "databases",
        title: 'DBMS Performance Tester',
        imageUrl: '/images/project2.jpg',
        description: `A framework to run and visualize performance tests to evaluate the viability of various alternative databases in the context of Minut's property monitoring system at scale.`,
        markdown: `A framework to run and visualize performance tests to evaluate the viability of various alternative databases in the context of the enterprise system.
Helped to create a plan reporting on the sustainability of the company database for future scaling and gave professional advice on potential mitigation strategies.`,
        published: true,
        date: new Date('2024-01-19'),
    },
    {
        slug: "openjournalism",
        title: 'Open Journalism',
        imageUrl: '/images/project2.jpg',
        description: 'A project aimed at enhancing the collaboration process within a journalistic ecosystem.',
        markdown: `A project aimed at enhancing the collaboration process within a journalistic ecosystem by creating a scalable, event-based system for future use by the university's journalism study student body.`,
        published: true,
        date: new Date('2023-05-30'),
        url: 'https://www.fontysictinnovationlab.nl/innovations-insight/innovations-insight-june-23/ict-software-engineering/open-journalism-infrastructure/'
    },
  ];
  export const getAllProjects = (): Project[] => {
    return projects;
  }
  export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    const project = projects.find(p => slug === encodeURIComponent(p.slug.toLowerCase().replace(/\s/g, '-')));
    return project || null;
  };
  export const getAllProjectSlugs = async (): Promise<{ params: { slug: string } }[]> => {
    const slugs = projects.map(p => ({ params: { slug: encodeURIComponent(p.title.toLowerCase().replace(/\s/g, '-')) } }));
    return slugs;
  };