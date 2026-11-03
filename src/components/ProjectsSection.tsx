import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1280&q=80`;

interface Project {
  name: string;
  category: string;
  description: string;
  github?: string;
  col1: [string, string];
  col2: string;
  // CSS object-position for [col1 top, col1 bottom, col2]
  positions?: [string, string, string];
}

// Add each project's GitHub URL to `github` to enable its button.
const PROJECTS: Project[] = [
  {
    name: 'GSA LMS',
    category: 'Learning Management System',
    description:
      'Learning platform with separate student, instructor, and admin interfaces, course workflows, Firebase Auth, and role-based access.',
    github: 'https://github.com/arhamwho/Gsa',
    col1: ['/projects/gsa-dashboard.png', '/projects/gsa-help.png'],
    col2: '/projects/gsa-landing.png',
    positions: ['left top', 'center top', 'left center'],
  },
  {
    name: 'Esportify',
    category: 'Esports Tournament Manager',
    description:
      'Tournament management app for organizing esports competitions, with tournament flows and participant management.',
    github: 'https://github.com/arhamwho/Esportify',
    col1: ['/projects/esportify-dashboard-2.png', '/projects/esportify-players.png'],
    col2: '/projects/esportify-dashboard.png',
    positions: ['center center', 'center 45%', 'center center'],
  },
  {
    name: 'SkillSwap AI',
    category: 'AI-Powered Peer Learning Platform',
    description:
      'AI skill matching, personalized learning roadmaps, an AI Career Coach, real-time messaging, reviews, and progress tracking.',
    col1: ['/projects/skillswap-dashboard.png', '/projects/skillswap-payments.png'],
    col2: '/projects/skillswap-learning.png',
    positions: ['left top', 'center center', 'center center'],
  },
  {
    name: 'KidZone',
    category: 'Child-Focused App',
    description:
      'A kid-friendly app with allowance management and activity tracking, polished mobile layouts, and simple navigation.',
    github: 'https://github.com/arhamwho/KidZone',
    col1: ['/projects/kidzone-money.jpg', '/projects/kidzone-plan.jpg'],
    col2: '/projects/kidzone-home.jpg',
    positions: ['center center', 'center top', 'center center'],
  },
  {
    name: 'Employee Engagement Analysis',
    category: 'Machine Learning · HR Analytics',
    description:
      'K-Means profiling of IBM HR data into engagement segments, with leakage-safe model evaluation and a Streamlit dashboard.',
    github: 'https://github.com/arhamwho/employee-engagement-analysis',
    col1: ['/projects/engagement-clusters.svg', '/projects/engagement-models.svg'],
    col2: '/projects/engagement-dashboard.svg',
  },
  {
    name: 'AquaPure Cloud',
    category: 'AWS Water Treatment Platform',
    description:
      'Water treatment management platform deployed on AWS EC2 with Docker, NGINX, a SQL database, automation scripts, and monitoring.',
    github: 'https://github.com/arhamwho/aquapure-cloud',
    col1: ['/projects/aquapure-architecture.png', '/projects/aquapure-monitoring.png'],
    col2: '/projects/aquapure-app.png',
    positions: ['center center', 'center top', 'center center'],
  },
];

const IMAGE_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        className={`flex h-[calc(100svh-8rem-var(--stack))] max-h-[760px] min-h-[340px] w-full origin-top flex-col border-2 border-[#D7E2EA] p-4 sm:p-6 md:h-[calc(100svh-10rem-var(--stack))] md:p-8 ${IMAGE_RADIUS}`}
        style={{
          scale,
          top: `${index * 28}px`,
          position: 'relative',
          background: '#0C0C0C',
          ['--stack' as string]: `${(total - 1) * 28}px`,
        }}
      >
        <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-4 px-2 sm:mb-6 sm:px-4 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA] opacity-60"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="hidden max-w-xl font-light leading-snug text-[#D7E2EA] opacity-60 sm:block"
                style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)' }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <LiveProjectButton href={project.github} />
        </div>

        <div className="flex min-h-0 flex-1 gap-3 sm:gap-4">
          <div className="flex w-[40%] min-h-0 flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0]}
              style={{ objectPosition: project.positions?.[0] }}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`min-h-0 w-full flex-[2] object-cover ${IMAGE_RADIUS}`}
            />
            <img
              src={project.col1[1]}
              style={{ objectPosition: project.positions?.[1] }}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`min-h-0 w-full flex-[3] object-cover ${IMAGE_RADIUS}`}
            />
          </div>
          <div className="min-h-0 w-[60%]">
            <img
              src={project.col2}
              style={{ objectPosition: project.positions?.[2] }}
              alt={`${project.name} main preview`}
              loading="lazy"
              className={`h-full w-full object-cover ${IMAGE_RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      <div ref={containerRef} className="mx-auto mt-12 max-w-6xl sm:mt-16 md:mt-20">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
