"use client";
import { GraduationCap, School2 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const schools = [
	{
		start: "2020",
		end: "2024",
		startIcon: <School2 size={20} />,
		endIcon: <GraduationCap size={20} />,
		href: "https://www.fontys.nl/en/Study-at-Fontys/Programmes/Information-Communication-Technology-Eindhoven.htm",
		name: "Fontys University of Applied Science",
		degree: "Information and Communication Technology: Software Engineering",
		level: "Bachelor of Science"
	}
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 xl:grid-cols-2 xl:gap-16">
					{schools.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<div className="flex w-full justify-center items-center flex-col">
									<div className="flex w-full justify-center items-center">
										<span className="relative z-10 flex flex-col items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											{s.startIcon}
											<p className="">{s.start}</p>
										</span>

										<div className="relative flex items-center w-2/4 h-px">
											<span
											className="absolute w-full h-px bg-gradient-to-r from-zinc-500 via-zinc-500/95 to-transparent"
											aria-hidden="true"
											/>
										</div>

										<span className="relative z-10 flex flex-col items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											{s.endIcon}
											<p className="p-1">{s.end}</p>
										</span>
									</div>{" "}
								</div>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.degree}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-200 group-hover:text-zinc-200">
										{s.level}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.name}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
