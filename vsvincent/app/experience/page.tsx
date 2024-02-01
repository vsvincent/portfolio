"use client";
import { GraduationCap, School2 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experiences = [
	{
		start: "Sep. 2023",
		end: "Jan. 2024",
		href: "https://www.minut.com",
		role: "Software Engineering Intern",
		company: "Minut A.B.",
		description: "Developed a plan reporting on the sustainability of the company database for future scaling and gave professional advice on potential mitigation strategies. Created a framework to run and visualize performance tests to evaluate the viability of various alternative databases in the context of the enterprise system."
	}
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
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

										<span className="text-center p-7 relative z-10 flex flex-col items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											
											<p className="">{e.end}</p>
										</span>
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
