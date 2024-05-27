type ProjectItem = {
    name: string;
    description: string;
    path: string;
    sourceUrl: string;
    liveUrl: string;
    platform: string;
    stack: string;
    images: { url: string, description: string }[]
};

export const projectsList: ProjectItem[] = [
    {
        name: "Mally",
        description: "A collection of web services such as URL shorteners, pastebins, and many more.",
        path: "mally",
        sourceUrl: "https://github.com/neumanf/mally",
        liveUrl: "mally.neumanf.com",
        platform: "Web",
        stack: "Typescript, Java, Angular, Springboot, RabbitMQ, PostgreSQL",
        images: [
            {
                url: "/assets/images/mally-1.png",
                description: "Landing page"
            },
            {
                url: "/assets/images/mally-2.png",
                description: "URL Shortener"
            },
            {
                url: "/assets/images/mally-3.png",
                description: "Pastebin"
            }
        ]
    },
    {
        name: "Vagas Tech RN Bot",
        description: "Scrapes multiple sources of job listing websites, processes jobs data and posts them on Telegram.",
        path: "vagastechrnbot",
        sourceUrl: "https://github.com/neumanf/vagastechrnbot",
        liveUrl: "t.me/s/vagastechrn",
        platform: "Telegram",
        stack: "Typescript, grammY, MySQL",
        images: [
            {
                url: "/assets/images/vagastechrnbot.png",
                description: "Telegram channel"
            }
        ]
    },
];