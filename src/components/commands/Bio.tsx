import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/CXaymae",
			text: "@CXaymae",
		},
		{
			title: "Medium",
			Icon: SiMedium,
			href: "https://chaimae-chairi.medium.com/",
			text: "@chaimae-chairi",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/chaimae-chairi/",
			text: "@CHAIRI Chaimae",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/123027484?s=96&v=4"
					alt="CXaymae"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Chaimae CHAIRI</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Deployed into the world 23 years ago.</p>
				</div>
			</div>
			<p>
			Hi there, I am a software engineering student. I'm dedicated to everyday learning, constantly seeking to expand my knowledge and skills in software development. I'm passionate about personal growth and enjoy acquiring fresh insights into coding, which I eagerly share with the internet. I'm particularly interested in cloud devops and technical writing.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
