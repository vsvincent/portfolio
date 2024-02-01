"use client";
import { ArrowLeft, Briefcase, AppWindow, GraduationCap, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);
		observer.observe(ref.current);
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		  };
	  
		  // Add event listener for window resize
		  window.addEventListener('resize', handleResize);
	  
		  // Remove event listener on component unmount
		  return () => {
			window.removeEventListener('resize', handleResize);
			observer.disconnect();
		  };
	}, []);
const navBarItems = [
	{ href: "/experience", name: "Experience", altIcon: <Briefcase className="w-6 h-6 duration-200"/>},
	{ href: "/projects", name: "Projects", altIcon: <AppWindow className="w-6 h-6 duration-200"/> },
	{ href: "/education", name: "Education", altIcon: <GraduationCap className="w-6 h-6 duration-200"/> },
	{ href: "/contact", name: "Contact", altIcon: <Phone className="w-6 h-6 duration-200"/> },
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
