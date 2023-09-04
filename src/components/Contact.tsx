import { homePageData } from '../../public/lib/dataFetching';

export default function Contact() {
	const contact = homePageData.data.contact;
	return (
		<section className="flex flex-col justify-center items-center gap-3">
			<h2 className="text-xl font-medium">Contact</h2>
			<address className="flex flex-col gap-2 text-lg">
				{contact.email ? (
					<a>email: {contact.email}</a>
				) : null}
				{contact.phone ? (
					<a>phone: {contact.phone}</a>
				) : null}
				{contact.whatsapp ? (
					<a>WhatsApp: {contact.whatsapp}</a>
				) : null}
			</address>
		</section>
	);
}
