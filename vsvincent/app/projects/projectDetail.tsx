import Link from "next/link";
import { Eye, View } from "lucide-react";
import { Project } from "@/util/projects";
import "./mdx.css";
import { ProjectHeader } from "./projectHeader";
import { ProjectBody } from "./projectBody";

type Props = {
	project: Project;

	views: number;

	setProject: any;
};

export const ProjectDetail: React.FC<Props> = ({ project, views, setProject }) => {
	return (
		<div className="flex h-screen flex-col">
		<ProjectHeader project={project} views={views} setProject={setProject}/>
		<ProjectBody project={project} views={views} setProject={setProject}/>
		</div>
	);
}
