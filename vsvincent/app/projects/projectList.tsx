import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { Project, getAllProjects } from "@/util/projects";
	
	
export const revalidate = 60;

type Props = {
	setProject: (project: any) => void;
};

export const ProjectList: React.FC<Props> = ({setProject}) => {
	  const projectDateFormat = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'long'})
	  const views = 0
	  const allProjects = getAllProjects()
	  const featured = allProjects.find((project) => project.slug === "isnad")!;
	  const top2 = allProjects.find((project) => project.slug === "databases")!;
	  const top3 = allProjects.find((project) => project.slug === "openjournalism")!;
	  console.log(featured, top2, top3)
	  const sorted = allProjects
		.filter((p) => p.published)
		.filter(
		  (project) =>
			project.slug !== featured.slug &&
			project.slug !== top2.slug &&
			project.slug !== top3.slug,
		)
		.sort(
		  (a: { date: any; }, b: { date: any; }) =>
			new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
			new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);
		const handleClick = (project: Project) => {
			setProject(project)
		  };
	  return (
		<div className="relative pb-16">
		  <Navigation />
		  <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
			<div className="max-w-2xl mx-auto lg:mx-0">
			  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
				Projects
			  </h2>
			  <p className="mt-4 text-zinc-400">
				Projects I've developed in professional and academic settings or just at home.
			  </p>
			</div>
			<div className="w-full h-px bg-zinc-800" />
	
			<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
			  <Card>
				  <article className="relative w-full h-full p-4 md:p-8 hover:cursor-pointer" onClick={() => setProject(featured)}>
					<div className="flex items-center justify-between gap-2">
					  <div className="text-xs text-zinc-100">
						{featured.date ? (
						  <time dateTime={new Date(featured.date).toISOString()}>
							{projectDateFormat.format(new Date(featured.date))}
						  </time>
						) : (
						  <span>SOON</span>
						)}
					  </div>
					  {/*<span className="flex items-center gap-1 text-xs text-zinc-500">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(
						  views[featured.slug] ?? 0,
						)}
					  </span>*/}
					</div>
	
					<h2
					  id="featured-post"
					  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
					>
					  {featured.title}
					</h2>
					<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
					  {featured.description}
					</p>
					<div className="absolute bottom-4 md:bottom-8">
					  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
						Read more <span aria-hidden="true">&rarr;</span>
					  </p>
					</div>
				  </article>
			  </Card>
	
			  <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
				{[top2, top3].map((project) => (
				  <Card key={project.slug}>
					<Article project={project} views={/**views[project.slug] ??**/ 0} dateFormat={projectDateFormat} setProject={setProject}/>
				  </Card>
				))}
			  </div>
			</div>
			<div className="hidden w-full h-px md:block bg-zinc-800" />
	
			<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
			  <div className="grid grid-cols-1 gap-4">
				{sorted
				  .filter((_, i) => i % 3 === 0)
				  .map((project) => (
					<Card key={project.slug}>
					  <Article project={project} views={/**views[project.slug] ??**/ 0} dateFormat={projectDateFormat} setProject={setProject} />
					</Card>
				  ))}
			  </div>
			  <div className="grid grid-cols-1 gap-4">
				{sorted
				  .filter((_, i) => i % 3 === 1)
				  .map((project) => (
					<Card key={project.slug}>
					  <Article project={project} views={/**views[project.slug] ??**/ 0} dateFormat={projectDateFormat} setProject={setProject}/>
					</Card>
				  ))}
			  </div>
			  <div className="grid grid-cols-1 gap-4">
				{sorted
				  .filter((_, i) => i % 3 === 2)
				  .map((project) => (
					<Card key={project.slug}>
					  <Article project={project} views={/**views[project.slug] ??**/ 0} dateFormat={projectDateFormat} setProject={setProject}/>
					</Card>
				  ))}
			  </div>
			</div>
		  </div>
		</div>
	  );
	}
	
