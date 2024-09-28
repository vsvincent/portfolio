"use client";
import { ArrowLeft, Briefcase, AppWindow, GraduationCap, Phone, FileCheck2, FileText } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const windowExists = typeof window !== 'undefined'
	const [windowWidth, setWindowWidth] = windowExists ? useState(window?.innerWidth) : [0, () => null];

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);
		observer.observe(ref.current);
		const handleResize = () => {
			if (windowExists){
			setWindowWidth(window.innerWidth);
			}
		  };
	  
		  // Add event listener for window resize
		  if (windowExists){
			 window.addEventListener('resize', handleResize);
		  }
	  
		  // Remove event listener on component unmount
		  return () => {
			if (windowExists){
				window.removeEventListener('resize', handleResize);
			}
			observer.disconnect();
		  };
	}, []);
const navBarItems = [
	{ href: "/experience", name: "Experience", altIcon: <Briefcase className="nav-bar-item-alt"/>},
	// { href: "/projects", name: "Projects", altIcon: <AppWindow className="nav-bar-item-alt"/> },
	{ href: "/education", name: "Education", altIcon: <GraduationCap className="nav-bar-item-alt"/> },
	{ href: "/contact", name: "Contact", altIcon: <Phone className="nav-bar-item-alt"/> },
	{ href: "/resume.pdf", name: "CV", altIcon: <FileText className="nav-bar-item-alt"/>},
];
	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{navBarItems.map((n) => (
						<Link
							href={n.href}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							{windowWidth < 768 ? n.altIcon : n.name}
						</Link> ))}
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
