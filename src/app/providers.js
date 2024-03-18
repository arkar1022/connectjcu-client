"use client";

import dynamic from "next/dynamic";
import theme from "./theme";
const ChakraProvider = dynamic(() =>
	import("@chakra-ui/provider").then((mod) => mod.ChakraProvider),
);

export function Providers({ children }) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}