import React, { useEffect, useState } from "react";
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp,} from "react-icons/si";

export default function Projects() {
	const tech = [
		{ Icon: SiHtml5, color: "text-orange-500", duration: "duration-500" },
		{ Icon: SiPhp, color: "text-blue-550", duration: "duration-700" },
		{ Icon: SiMysql, color: "text-bleu-400", duration: "duration-1000" },
		{ Icon: SiCss3, color: "text-bleu-500", duration: "duration-1400" },
	];
	const link = [
		{ Icon: SiHtml5, color: "text-orange-500", duration: "duration-500" },
		{ Icon: SiPhp, color: "text-blue-550", duration: "duration-700" },
		{ Icon: SiMysql, color: "text-bleu-400", duration: "duration-1000" },
		{ Icon: SiCss3, color: "text-bleu-400", duration: "duration-1400" },
		{ Icon: SiJavascript, color: "text-yellow-400", duration: "duration-1500" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Notebook App deployement</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
			Deployed Notebook App using Docker and Kubernetes for efficient containerization and orchestration.
			</p>
			<br />
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Electricity Bill Web Application
			</h1>
			<p className="text-lg animate-reveal-0.7">
			Developed a web app for electricity bill management, allowing customers to input consumption, view bills, and handle complaints efficiently. <br />
			<div className="flex gap-5 text-4xl">
				{tech.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
			</p>
			<br />
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Link Plateform 
			</h1>
			<p className="text-lg animate-reveal-0.7">
			Developing a SaaS application to connect Brands and influencers for a collaboration and foster the marketing atmospher usign C language and DataStructure.
			</p>
			<div className="flex gap-5 text-4xl">
				{link.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
			<br />
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Automaton Programming
			</h1>
			<p className="text-lg animate-reveal-0.7">
			Developing a product bridging two automata for word membership deduction in a language, automaton operations, including star operations.
			</p>
		</div>
	);
}
