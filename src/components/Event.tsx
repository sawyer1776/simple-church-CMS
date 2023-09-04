export default function Event(props: {
	title: string;
	subtitle: string;
	date: string;
}): JSX.Element {
	return (
		<li className=" w-full flex gap-1 border border-slate-400">
			<div className="w-1/3 aspect-square bg-slate-600">
				IMG
			</div>
			<div className="w-2/3 p-1">
				<h3 className="text-lg font-semibold">
					{props.title}
				</h3>
				<p>{props.subtitle}</p>
				<p className="text-right font-medium">
					{props.date}
				</p>
			</div>
		</li>
	);
}
