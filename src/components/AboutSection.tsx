import Link from 'next/link';
export default function AboutSection() {
	return (
		<section className="flex flex-col w-full">
			<h2 className="text-xl font-semibold self-center">
				About
			</h2>
			<p>
				About paragraph Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Architecto, maxime
				illo nobis magnam ipsum mollitia cum officiis rem
				quaerat aut? Accusamus, vero sed animi fugiat quis
				eligendi illum adipisci recusandae.
			</p>
			<ul className="flex flex-col gap-1 my-2 text-lg font-medium px-4">
				<li>
					<Link href="/about">Learn More</Link>
				</li>
				<li>Beliefs</li>
				<li>Staff</li>
				<li>Officers</li>
				<li>FAQ</li>
			</ul>
		</section>
	);
}
