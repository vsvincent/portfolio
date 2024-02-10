export interface Project {
    slug: string;
    title: string;
    imageUrl: string;
    description: string;
    shortDescription?: string;
    published: boolean;
    date: Date;
    url?: string;
    repository?: string;
  }

  const projects: Project[] = [
    {
        slug: "isnad",
        title: 'Project 1',
        imageUrl: '/images/project1.jpg',
        description: 'Description of Project 1',
        shortDescription: 'Shorter Description of Project 2',
        published: true,
        date: new Date('2023-12-01'),
        repository: 'vsvincent/isnad-backend',
    },
    {
        slug: "databases",
        title: 'Project 2',
        imageUrl: '/images/project2.jpg',
        description: 'Description of Project 2',
        shortDescription: 'Shorter Description of Project 2',
        published: true,
        date: new Date('2024-01-19'),
    },
    {
        slug: "openjournalism",
        title: 'Project 2',
        imageUrl: '/images/project2.jpg',
        description: 'Description of Project 2',
        shortDescription: 'Shorter Description of Project 2',
        published: true,
        date: new Date('2023-05-30'),
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