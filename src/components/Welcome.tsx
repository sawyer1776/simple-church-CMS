import { homePageData } from '../../public/lib/dataFetching';

export default function Welcome() {
	let { title, subtitle } = homePageData.data.welcome;

	return (
		<>
			<h1 className="text-2xl font-medium">{title}</h1>
			<p className="text-lg px-4 w-full text-center">
				{subtitle}
			</p>
			<div className=" p-5 m-4 max-w-xl w-full h-60  bg-slate-600 text-3xl">
				IMG
			</div>
		</>
	);
}
