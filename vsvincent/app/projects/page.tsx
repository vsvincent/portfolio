'use client'
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { Project, getAllProjects } from "@/util/projects";
import { ProjectList } from "./projectList";
//import { ProjectDetail } from "./projectDetail";
import { ProjectDetail } from "./projectDetail";

export const revalidate = 60;
export default function ProjectsPage() {
  const defaultProject: Project | undefined = undefined;
  const [selectedProject, setProject] = useState(defaultProject);
  if(!selectedProject){
    return <ProjectList setProject={setProject}/>
  } else {
    return <ProjectDetail project={selectedProject} views={0} setProject={setProject} />
  }
}
