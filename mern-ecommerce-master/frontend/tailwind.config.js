/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ink: "#172033",
				brand: "#087f72",
				"brand-dark": "#06665c",
				accent: "#d97706",
				canvas: "#f7f8f6",
				surface: "#ffffff",
				line: "#dce5e1",
				muted: "#64748b",
			},
			boxShadow: {
				soft: "0 12px 30px rgba(23, 32, 51, 0.06)",
			},
		},
	},
	plugins: [],
};
