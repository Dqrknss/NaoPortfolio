import catppuccinMocha from "@shikijs/themes/catppuccin-mocha";
import catppuccinLatte from "@shikijs/themes/catppuccin-latte";
import type { ThemeRegistration } from "shiki";

export const colors = {
	dark: {
		accent: "#84abff",
		text: "#cad4f5",
		textOnAccent: "#1e2230",
		subtext1: "#b8c1e0",
		subtext0: "#a5a9cb",
		overlay2: "#9398b7",
		overlay1: "#8085a2",
		overlay0: "#6e768d",
		surface2: "#5b6778",
		surface1: "#4c7192", // hover
		surface0: "#376081",
		background2: "#244158",
		background1: "#244158", // ???
		background0: "#172A3A",
	},
	light: {
        accent: "#4da1ff",
        text: "#43586e",
        textOnAccent: "#172a3a",
        subtext1: "#59718a",
        subtext0: "#6b849e",
        overlay2: "#7e97b0",
        overlay1: "#8fa5bd",
        overlay0: "#9fb3c9",
        surface2: "#aec1d4",
        surface1: "#bdcede",
        surface0: "#ccdae8",
        background2: "#f0f5fa",
        background1: "#e6edf5",
        background0: "#dce5ef",
    }
}

export const shiki = {
	dark: {
		...catppuccinMocha,
		name: "naoppuccin-dark",
		colors: {
			...catppuccinMocha.colors,
			"activityBar.background": colors.dark.background0,
			"editor.background": colors.dark.background1,
			"statusBar.background": colors.dark.background0,
			"statusBarItem.remoteBackground": colors.dark.background0,
			"tab.activeBackground": colors.dark.background1,
			"titleBar.activeBackground": colors.dark.background1,
			"editorGroupHeader.tabsBackground": colors.dark.background0,
			"panel.background": colors.dark.background1,
		},
	} as ThemeRegistration,
	light: {
		...catppuccinLatte,
		name: "naoppuccin-light",
		colors: {
			...catppuccinLatte.colors,
			"activityBar.background": colors.light.background0,
			"editor.background": colors.light.background1,
			"statusBar.background": colors.light.background0,
			"statusBarItem.remoteBackground": colors.light.background0,
			"tab.activeBackground": colors.light.background1,
			"titleBar.activeBackground": colors.light.background1,
			"editorGroupHeader.tabsBackground": colors.light.background0,
			"panel.background": colors.light.background1,
		},
	} as ThemeRegistration,
}

export function generateCss() {
	function toKebab(s: string) {
		return s.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $).toLowerCase();
	}

	function generateVars(type, theme){
		let css: string = "";
		css += `color-scheme:${type};`
		Object.entries(theme).forEach(([colorName, color]) => {
			css += `--color-${toKebab(colorName)}:${color};`;
		});
		return css;
	}

	let css: string = "";

	// default to dark theme
	css += `:root{${generateVars("dark", colors.dark)}}`;
	css += `@media(prefers-color-scheme:light){:root{${generateVars("light", colors.light)}}}`;

	// create overrides
	Object.entries(colors).forEach(([type, theme]) => {
		css += `[data-theme="${type}"]{${generateVars(type, theme)}}`;
	});
	return css;
}import catppuccinMocha from "@shikijs/themes/catppuccin-mocha";
import catppuccinLatte from "@shikijs/themes/catppuccin-latte";
import type { ThemeRegistration } from "shiki";

export const colors = {
	dark: {
		accent: "#ff84bd",
		text: "#decaf5",
		textOnAccent: "#281e30",
		subtext1: "#cbb8e0",
		subtext0: "#b6a5cb",
		overlay2: "#a493b7",
		overlay1: "#9080a2",
		overlay0: "#7e6e8d",
		surface2: "#695b78",
		surface1: "#574964",
		surface0: "#43364f",
		background2: "#30243a",
		background1: "#281e30",
		background0: "#201826",
	},
	light: {
		accent: "#ff60aa",
		text: "#5c4c69",
		textOnAccent: "#30243a",
		subtext1: "#6b5c77",
		subtext0: "#7a6c85",
		overlay2: "#7a6c85",
		overlay1: "#978ca1",
		overlay0: "#a59cb0",
		surface2: "#b4acbe",
		surface1: "#c3bccc",
		surface0: "#d1ccda",
		background2: "#f1eff5",
		background1: "#e9e6ef",
		background0: "#e0dce8",
	},
}

export const shiki = {
	dark: {
		...catppuccinMocha,
		name: "naoppuccin-dark",
		colors: {
			...catppuccinMocha.colors,
			"activityBar.background": colors.dark.background0,
			"editor.background": colors.dark.background1,
			"statusBar.background": colors.dark.background0,
			"statusBarItem.remoteBackground": colors.dark.background0,
			"tab.activeBackground": colors.dark.background1,
			"titleBar.activeBackground": colors.dark.background1,
			"editorGroupHeader.tabsBackground": colors.dark.background0,
			"panel.background": colors.dark.background1,
		},
	} as ThemeRegistration,
	light: {
		...catppuccinLatte,
		name: "naoppuccin-light",
		colors: {
			...catppuccinLatte.colors,
			"activityBar.background": colors.light.background0,
			"editor.background": colors.light.background1,
			"statusBar.background": colors.light.background0,
			"statusBarItem.remoteBackground": colors.light.background0,
			"tab.activeBackground": colors.light.background1,
			"titleBar.activeBackground": colors.light.background1,
			"editorGroupHeader.tabsBackground": colors.light.background0,
			"panel.background": colors.light.background1,
		},
	} as ThemeRegistration,
}

export function generateCss() {
	function toKebab(s: string) {
		return s.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $).toLowerCase();
	}

	function generateVars(type, theme){
		let css: string = "";
		css += `color-scheme:${type};`
		Object.entries(theme).forEach(([colorName, color]) => {
			css += `--color-${toKebab(colorName)}:${color};`;
		});
		return css;
	}

	let css: string = "";

	// default to dark theme
	css += `:root{${generateVars("dark", colors.dark)}}`;
	css += `@media(prefers-color-scheme:light){:root{${generateVars("light", colors.light)}}}`;

	// create overrides
	Object.entries(colors).forEach(([type, theme]) => {
		css += `[data-theme="${type}"]{${generateVars(type, theme)}}`;
	});
	return css;
}
