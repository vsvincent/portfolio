"use client";
import { rehypeWrapText } from "@/util/markdown";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		markdown: string;
		repository?: string;
	};

	views: number;

	setProject: any;
};

export const ProjectBody: React.FC<Props> = ({ project, views, setProject }) => {
	return (
		<Markdown className="flex-1 relative h-screen isolate overflow-y-visible bg-gradient-to-tl from-slate-50 via-slate-100 to-slate-300 p-5 md:p-10 lg:p-15">{project.markdown}</Markdown>
	);
};
