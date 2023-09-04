import Image from 'next/image';
import Welcome from '../components/Welcome';
import TimesAndDirections from '../components/TimesAndDirections';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import AboutSection from '@/components/AboutSection';

export default function Home() {
	return (
		<>
			<Welcome />
			<TimesAndDirections />
			<Events renderCt={2} page="home" />
			<Contact />

			<div className=" p-5 m-4 max-w-xl w-full h-60  bg-slate-600 text-5xl">
				IMG
			</div>
			<AboutSection />
		</>
	);
}
