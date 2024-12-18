export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Simone Boldrini',
    subtitle: 'Personal Page',
    description: 'This is the personal page of Simone Boldrini PhD in Economics and Finance at Bocconi University',
    image: {
        src: '/simoboldrini.JPEG',
        alt: 'Simone Boldrini'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'CV',
            href: '/cv'

        },

        {
            text: 'Academic work',
            href: '/academic-works'
        },

        {
            text: 'Policy work',
            href: '/projects'
        },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [

        {
            text: 'Home',
            href: '/'
        },

        {
            text: 'More about me',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }

    ],
    socialLinks: [
        {
            text: 'Google Scholar',
            href: 'https://scholar.google.com/citations?hl=en&user=z1OTiHUAAAAJ'
        },

        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/simone-boldrini-225a9418a/'
        },
        {
            text: 'Mail',
            href: 'mailto:simone.boldrini@phd.unibocconi.it'
        },
    ],
    hero: {
        title: 'Simone Boldrini',
        text: 'I am a PhD student in Economics and Finance at <a href="https://www.unibocconi.eu/" class="text-blue-600 underline">Bocconi University</a>. I hold a BSc in Finance (2020) and a MSc in Economics (2022), both from <a href="https://www.unibocconi.eu/" class="text-blue-600 underline">Bocconi</a>. <br/><br/>After my Master, I worked for two years at the <a href="https://www.ecb.europa.eu/pub/research/authors/profiles/simone-boldrini.it.html" class="text-blue-600 underline">European Central Bank</a> on topics related to financial stability and climate change from an academic and policy perspective. <br/>',
        image: {
            src: '/simoboldrini.JPEG',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
