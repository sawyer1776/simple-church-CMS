import Event from './Event';
import { homePageData } from '../../public/lib/dataFetching';
import Link from 'next/link';

export default function Events(props: {
	renderCt: number;
	page: string;
}) {
	const events = homePageData.data.events;

	return (
		<section>
			<ul className="w-full flex flex-col gap-2 py-2 ">
				{events.slice(0, props.renderCt).map((event, i) => (
					<Event
						key={i}
						title={event.title}
						subtitle={event.subtitle}
						date={event.dateTime}
					/>
				))}
				{events.length > props.renderCt &&
				props.page === 'home' ? (
					<li className="self-end">
						<Link href={'/events'}>More Events</Link>
					</li>
				) : null}
				{events.length > props.renderCt &&
				props.page != 'home' ? (
					<li className="self-end">Show More</li>
				) : null}
			</ul>
		</section>
	);
}
