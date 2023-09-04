let tmpVar = {
	data: {
		welcome: {
			title: 'Welcome to Church',
			subtitle: 'We are so glad you are here!',
		},
	},
};

export let homePageData = {
	data: {
		welcome: {
			title: 'Welcome to our Church',
			subtitle: 'We are so glad you are here!',
		},
		timesAndDirections: {
			serviceTimes: [
				{
					name: 'Worship',
					time: 'Sundays at 10:45am',
				},
				{
					name: 'Sunday School',
					time: 'Sundays at 9:15am',
				},
				{
					name: 'Youth Group',
					time: 'Wednesdays at 6:05pm',
				},
			],
		},
		events: [
			{
				title: 'Missions Trip',
				subtitle:
					'Bacon ipsum dolor amet ut buffalo magna jerky.',
				description:
					'Bacon ipsum dolor amet ut buffalo magna jerky. Venison dolore culpa elit landjaeger. Meatball pork loin reprehenderit filet mignon. Buffalo anim beef nulla. Veniam aliquip eu nisi sausage excepteur, laboris pancetta fugiat ea. Pork loin doner aliquip elit magna ea ex veniam lorem aliqua landjaeger ribeye drumstick. Lorem sint anim fatback, chislic pork chop nostrud buffalo pig. Id voluptate doner filet mignon, exercitation eiusmod nostrud pork meatloaf shank pariatur qui. Salami incididunt tenderloin brisket nisi fatback fugiat jowl cow swine minim in. Consequat eiusmod deserunt, andouille irure meatball ground round voluptate mollit ut ut cow porchetta chislic. Non quis chicken fugiat consectetur pastrami pork belly jowl salami voluptate kielbasa irure flank. ',
				imgPath: 'Sundays at 10:45am',
				dateTime: 'Nov 1',
				recurring: false,
				register: true,
				contactName: 'John Doe',
				contactEmail: 'john@doe.com',
				contactPhone: '123-456-7890',
			},
			{
				title: 'Conference',
				subtitle:
					'Bacon ipsum dolor amet ut buffalo magna jerky.',
				description: 'Sundays at 10:45am',
				imgPath: 'Sundays at 10:45am',
				dateTime: 'Jul 4',
				recurring: false,
				register: true,
				contactName: 'John Doe',
				contactEmail: 'john@doe.com',
				contactPhone: '123-456-7890',
			},
			{
				title: 'Potluck',
				subtitle:
					'Bacon ipsum dolor amet ut buffalo magna jerky.',
				description: 'Sundays at 10:45am',
				imgPath: 'Sundays at 10:45am',
				dateTime: 'Oct 15',

				register: true,
				contactName: 'John Doe',
				contactEmail: 'john@doe.com',
				contactPhone: '123-456-7890',
			},

			{
				title: 'Missions Trip',
				subtitle:
					'Bacon ipsum dolor amet ut buffalo magna jerky.',
				description:
					'Bacon ipsum dolor amet ut buffalo magna jerky. Venison dolore culpa elit landjaeger. Meatball pork loin reprehenderit filet mignon. Buffalo anim beef nulla. Veniam aliquip eu nisi sausage excepteur, laboris pancetta fugiat ea. Pork loin doner aliquip elit magna ea ex veniam lorem aliqua landjaeger ribeye drumstick. Lorem sint anim fatback, chislic pork chop nostrud buffalo pig. Id voluptate doner filet mignon, exercitation eiusmod nostrud pork meatloaf shank pariatur qui. Salami incididunt tenderloin brisket nisi fatback fugiat jowl cow swine minim in. Consequat eiusmod deserunt, andouille irure meatball ground round voluptate mollit ut ut cow porchetta chislic. Non quis chicken fugiat consectetur pastrami pork belly jowl salami voluptate kielbasa irure flank. ',
				imgPath: 'Sundays at 10:45am',
				dateTime: 'Sundays at 10:45am',
				recurring: false,
				register: true,
				contactName: 'John Doe',
				contactEmail: 'john@doe.com',
				contactPhone: '123-456-7890',
			},
			{
				title: 'Conference',
				subtitle:
					'Bacon ipsum dolor amet ut buffalo magna jerky.',
				description: 'Sundays at 10:45am',
				imgPath: 'Sundays at 10:45am',
				dateTime: 'June 17',
				recurring: false,
				register: true,
				contactName: 'John Doe',
				contactEmail: 'john@doe.com',
				contactPhone: '123-456-7890',
			},
			{
				title: 'Potluck',
				subtitle:
					'Bacon ipsum dolor amet ut buffalo magna jerky.',
				description: 'Sundays at 10:45am',
				imgPath: 'Sundays at 10:45am',
				dateTime: 'Aug 5',
				recurring: false,
				register: true,
				contactName: 'John Doe',
				contactEmail: 'john@doe.com',
				contactPhone: '123-456-7890',
			},
		],
		contact: {
			phone: '123-456-7890',
			whatsapp: '',
			email: 'me@me.com',
		},
	},
};

// export function fetchData() {
// 	setTimeout(() => {
// 		homePageData = tmpVar;
// 		console.log('fetched data', homePageData);
// 	}, 10);
// }
