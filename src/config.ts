export const openGraph = {
	author: "NaoYatayumi",
	defaultDescription: "A strange guy.",
	defaultImage: "/assets/open-graph.webp",
	home: {
		pageTitle: "nao / home",
		title: "Nao's",
		description: null,
		image: null,
	},
	//blog: {
	//	pageTitle: "simon / blog",
	//	title: "nasimono's blog",
	//	postTitlePrefix: "simon / ",
	//	description: null,
	//	image: null,
	//},
	projects: {
		pageTitle: "nao / projects",
		title: "nao's projects",
		postTitlePrefix: "nao / ",
		description: null,
		image: null,
	},
};

export const giscus = {
	enabled: false,
	repository: "",
	repositoryId: "",
	category: "",
	categoryId: "",
	mapping: "specific",
	strict: true,
	reactionsEnabled: true,
	emitMetadata: false,
	inputPosition: "top",
	theme: "catppuccin_mocha",
	lang: "en"
}

export const profile = [
	{
		"id": "name",
		"text": "nao",
		"icon": "lucide/user",
	},
	{
		"id": "gender",
		"text": "he/him",
		"icon": "lucide/venus-and-mars",
	},
	{
		"id": "age",
		"text": "?? years old",
		"icon": "lucide/cake",
	},
	{
		"id": "language",
		"text": "english, danish",
		"icon": "lucide/languages",
	},
	{
		"id": "location",
		"text": "denmark",
		"icon": "lucide/map-pin",
	},
];

export const socials = [
	{
		"text": "github",
		"link": "https://github.com/Simon-SJ",
		"icon": "simple-icons/github",
	},
	{
		"text": "youtube",
		"link": "https://www.youtube.com/@simonsssj",
		"icon": "simple-icons/youtube",
	},
	// {
	// 	"text": "itch.io",
	// 	"link": "https://naokoaf.itch.io/",
	// 	"icon": "simple-icons/itchdotio",
	// },
	// {
	// 	"text": "osu!",
	// 	"link": "https://osu.ppy.sh/users/14661163",
	// 	"icon": "simple-icons/osu",
	// },
	{
		"text": "s@evt.dk",
		"link": "mailto:s@evt.dk",
		"icon": "lucide/mail",
		"copy": "s@evt.dk",
	},
];
