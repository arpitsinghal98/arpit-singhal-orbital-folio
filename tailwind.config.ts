
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"glow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.6" },
				},
				"spin-slow": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
				"orbit": {
					"0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
					"100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
				},
				"pulse-glow": {
					"0%, 100%": {
						opacity: "1",
						boxShadow: "0 0 10px 2px rgba(0, 191, 255, 0.7)",
					},
					"50%": {
						opacity: "0.7",
						boxShadow: "0 0 20px 5px rgba(0, 191, 255, 0.4)",
					},
				},
				"glitch": {
					"0%": { transform: "translate(0)" },
					"20%": { transform: "translate(-2px, 2px)" },
					"40%": { transform: "translate(-2px, -2px)" },
					"60%": { transform: "translate(2px, 2px)" },
					"80%": { transform: "translate(2px, -2px)" },
					"100%": { transform: "translate(0)" },
				},
				"text-reveal": {
					"0%": { maxWidth: "0", borderRight: "3px solid #0bf" },
					"90%": { maxWidth: "100%", borderRight: "3px solid #0bf" },
					"100%": { borderRight: "3px solid transparent" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 5s ease-in-out infinite",
				"glow": "glow 3s ease-in-out infinite",
				"spin-slow": "spin-slow 10s linear infinite",
				"orbit": "orbit 20s linear infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"glitch": "glitch 1s ease-in-out infinite",
				"text-reveal": "text-reveal 3s steps(30, end) 1s forwards",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
