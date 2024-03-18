import {
	Inter,
	Lato,
	Manrope,
	Michroma,
	Noto_Sans_Myanmar,
	Play,
	Poppins,
	Roboto,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lato = Lato({
	subsets: ["latin"],
	variable: "--font-lato",
	display: "swap",
	weight: ["100", "300", "400", "700", "900"],
});
export const play = Play({
	subsets: ["latin"],
	variable: "--font-play",
	display: "swap",
	weight: ["400", "700"],
});
export const notoSansMyanmar = Noto_Sans_Myanmar({
	subsets: ["myanmar"],
	variable: "--font-myanmar",
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
});
export const michroma = Michroma({
	subsets: ["latin"],
	variable: "--font-michroma",
	display: "swap",
	weight: ['400'],
})