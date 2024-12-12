const currentYear = new Date().getFullYear();
const data = {
    sitename: "tripvivu",
    sitetagline: "✨Your journey, simplified 🔥",
    siteurl: "https://tripvivu.com",
    sitelogo: "",
    title: "tripvivu - Your journey, simplified",
    description: "🚀 Coming Soon! We're crafting an intelligent and personalized travel assistant just for YOU.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} TRIPVIVU.COM</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/",
        },
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: true,
        content: false,
        footer: false,
    }
}

export default data;
