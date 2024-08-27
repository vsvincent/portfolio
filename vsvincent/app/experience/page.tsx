"use client";
import { GraduationCap, School2 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experiences = [
	{
		start: "Mar. 2024",
		href: "https://www.mediatool.com",
		role: "Full-Stack Developer",
		company: "Mediatool",
		description: "Overhauled and upgraded core user-facing frontend components for the company’s SaaS campaign management platform. Developed backend components in an event-sourced, functional programming-oriented API to support the company’s SaaS platform along with comprehensive acceptance and unit testing suites."
	},
	{
		start: "Sep. 2023",
		end: "Jan. 2024",
		href: "https://www.minut.com",
		role: "Software Engineering Intern",
		company: "Minut",
		description: "Developed a plan reporting on the sustainability of the company database for future scaling and gave professional advice on potential mitigation strategies. Created a framework to run and visualize performance tests to evaluate the viability of various alternative databases in the context of the enterprise system."
	},
	{
		start: "Feb. 2022",
		end: "Jun. 2022",
		href: "https://www.accenture.com",
		role: "Application Development Intern",
		company: "Accenture",
		description: "Developed a webhook-based API for monitoring stock market trading signals using algorithms according to a user’s risk configuration."
	},
	{
		start: "Sep. 2021",
		end: "Jan. 2022",
		href: "https://www.actemium.com",
		role: "Student Worker",
		company: "Actemium",
		description: "Developed experience in Industry 4.0 automated manufacturing systems implementing Traksys MES. Led backend development as chairman of 5 member Agile team."
	}
];

export default function Experience() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col">
			<Navigation />
			<div className="container overflow-y-auto flex items-center justify-center min-h-screen px-4 mx-auto xl:mt-24">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 xl:mt-0 lg:grid-cols-3 lg:gap-16">
					{experiences.map((e) => (
						<Card>
							<Link
								href={e.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<div>
								<div className="flex w-full justify-center items-center flex-col">
									<div className="flex w-full justify-center items-center">
										<span className="text-center p-7 relative z-10 flex flex-col items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											
											<p className="">{e.start}</p>
										</span>

										<div className="relative flex items-center w-2/4 h-px">
											<span
											className="absolute w-full h-px bg-gradient-to-r from-zinc-500 via-zinc-500/95 to-transparent"
											aria-hidden="true"
											/>
										</div>

										{e.end && (<span className="text-center p-7 relative z-10 flex flex-col items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											
											<p className="">{e.end}</p>
										</span>)}
									</div>{" "}
								</div>
								<div className="z-10 flex flex-col items-center">
									<span className="mt-4 lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{e.role}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-200 group-hover:text-zinc-200">
										{e.company}
									</span>
								</div>
								</div>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{e.description}
									</span>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
