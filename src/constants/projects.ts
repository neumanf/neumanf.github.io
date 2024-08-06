export type ProjectItem = {
    name: string;
    description: string;
    path: string;
    sourceUrl: string;
    liveUrl: string;
    platform: string;
    stack: { id: string, description: string }[];
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
        stack: [
            { id: "typescript", description: 'Frontend programming language' },
            { id: "java", description: 'Backend programming language' },
            { id: "angular", description: 'UI framework' },
            { id: "spring", description: 'API framework' },
            { id: "rabbitmq", description: 'Message broker' },
            { id: "postgresql", description: 'SQL database' },
        ],
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
        name: "Doc Buddy",
        description: "A desktop search tool that provides instant access to online technical documentation for frameworks, libraries and more with a simple hotkey.",
        path: "docbuddy",
        sourceUrl: "https://github.com/neumanf/docbuddy",
        liveUrl: "github.com/neumanf/docbuddy",
        platform: "Windows and Linux",
        stack: [
            { id: "typescript", description: 'Frontend programming language' },
            { id: "rust", description: 'Backend programming language' },
            { id: "tauri", description: 'Crossplatform desktop toolkit' },
            { id: "vue", description: 'UI framework' },
        ],
        images: [
            {
                url: "/assets/images/docbuddy-1.png",
                description: "Search"
            },
            {
                url: "/assets/images/docbuddy-2.png",
                description: "Search results"
            },
            {
                url: "/assets/images/docbuddy-3.png",
                description: "Website preview"
            }
        ]
    },
    {
        name: "Vagas Tech RN Bot",
        description: "A Telegram bot that scrapes multiple sources of job listing websites, processes them and post on a channel.",
        path: "vagastechrnbot",
        sourceUrl: "https://github.com/neumanf/vagastechrnbot",
        liveUrl: "t.me/s/vagastechrn",
        platform: "Telegram",
        stack: [
            { id: "typescript", description: 'Programming language' },
            { id: "grammy", description: 'Telegram bot framework' },
            { id: "mysql", description: 'SQL database' },
        ],
        images: [
            {
                url: "/assets/images/vagastechrnbot.png",
                description: "Telegram channel"
            }
        ]
    },
    {
        name: "Henshi (WIP)",
        description: "A microservices based app for improving your short and long-term memory.",
        path: "henshi",
        sourceUrl: "https://github.com/henshiapp/henshi",
        liveUrl: "github.com/henshiapp/henshi",
        platform: "Web",
        stack: [
            { id: "typescript", description: 'Programming language' },
            { id: "nest", description: 'Backend framework' },
            { id: "vue", description: 'Frontend framework' },
            { id: "rabbitmq", description: 'Message broker' },
            { id: "grpc", description: 'Service intercommunication' },
            { id: "postgresql", description: 'SQL database' },
            { id: "redis", description: 'Cache' },
            { id: "kubernetes", description: 'Container orchestration' },
        ],
        images: [
            {
                url: "/assets/images/henshi-1.png",
                description: "Logo"
            }
        ]
    },
];