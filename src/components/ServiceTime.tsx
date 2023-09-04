import { ReactNode } from 'react';

export default function ServiceTime(props: {
	name: string;
	time: string;
}): ReactNode {
	return (
		<li
			className="pb-1
		 w-full flex gap-1 justify-between"
		>
			<h4>{props.name}</h4>
			<p>-</p>
			<p>{props.time}</p>
		</li>
	);
}
