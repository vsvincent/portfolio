"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};

	views: number;

	setProject: any;
};

export const ProjectBody: React.FC<Props> = ({ project, views, setProject }) => {

	return (
		<div
			className="flex-1 relative h-screen isolate overflow-hidden bg-gradient-to-tl from-slate-50 via-slate-100 to-slate-300 p-6 md:p-10 lg:p-12 xl:p-16"
		>
		<p>{project.description}</p>
		</div>
	);
};
