import {
	Inter,
	Lato,
	Manrope,
	Michroma,
	Noto_Sans_Myanmar,
	Play,
	Poppins,
	Roboto,
	Fahkwang,
	Jomhuria,
	Plus_Jakarta_Sans,
	Work_Sans,
	Source_Serif_4,
	Open_Sans
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

export const plus_jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus_jakarta",
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700"],
})

export const jomhuria = Jomhuria({
	subsets: ["latin"],
	variable: "--font-jomhuria",
	display: "swap",
	weight: ["400"],
})

export const fahkwang = Fahkwang({
	subsets: ["latin"],
	variable: "--font-fahkwang",
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700"],
})

export const work_sans = Work_Sans({
	subsets: ["latin"],
	variable: "--font-work_sans",
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700"],
})

export const source_serif_4 = Source_Serif_4({
	subsets: ["latin"],
	variable: "--font-source_serif_4",
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700"],
})

export const open_sans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-source_serif_4",
	display: "swap",
	weight: [ "300", "400", "500", "600", "700"],
})