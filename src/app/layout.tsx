import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Simple Church Site',
	description: 'Build a basic church site easily',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<nav>Head</nav>
				<main className="flex min-h-screen flex-col gap-4 items-center justify-center p-2 w-screen overflow-x-hidden">
					{children}
				</main>

				<footer>Footer</footer>
			</body>
		</html>
	);
}
