import { ColorModeScript } from "@chakra-ui/react";
import { lato } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { cookies } from 'next/headers'
export const metadata = {
	title: "ConnectJCU",
	description: "JCU Community",
};

export default async function RootLayout(props) {
	const cookieStore = cookies()
	const refresh_token = cookieStore.get('_refresh')?.value
	const access_token = cookieStore.get('_access')?.value
	return (
		<html lang="en">
			<head>
				{" "}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>{" "}
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>{" "}
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>{" "}
				<link rel="manifest" href="/site.webmanifest" />{" "}
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />{" "}
				<meta name="msapplication-TileColor" content="#da532c" />{" "}
				<meta name="theme-color" content="#ffffff" />{" "}
			</head>
			<body className={lato.className}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Providers>
					<Navbar refresh_token={refresh_token} access_token={access_token} />
					<main style={{ minHeight: '100vh', paddingTop: "60px" }}>
						{props.children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}