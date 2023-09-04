import { ReactNode } from 'react';
import { homePageData } from '../../public/lib/dataFetching';
import ServiceTime from './ServiceTime';

export default function TimesAndDirections(): ReactNode {
	const { serviceTimes } =
		homePageData.data.timesAndDirections;

	return (
		<section>
			<div className="flex flex-col w-full justify-center items-center gap-3">
				<h2 className="text-xl font-medium ">
					Times and directions
				</h2>
				<div>
					<h3 className="font-medium text-center w-full pb-1">
						Service Times
					</h3>
					<ul className="w-full">
						{serviceTimes.map((serviceTime, i): any => (
							<ServiceTime
								key={i}
								name={serviceTime.name}
								time={serviceTime.time}
							/>
						))}
					</ul>
				</div>
				<div>
					<h3 className="text-center font-medium pb-1">
						Location
					</h3>
					<address>
						101 Main Street, Anytown USA 30123
					</address>
				</div>
			</div>
		</section>
	);
}
