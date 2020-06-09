export declare const header: {
    logoUrl: string;
    menu: {
        id: string;
        linkName: string;
    }[];
    subscribeText: string;
};
export declare const firstPage: {
    newsImg: string;
    news: {
        category: string;
        title: string;
        subtitle: string;
        btnText: string;
    }[];
    sidebar: {
        category: string;
        title: string;
        btnText: string;
        widgetImg: string;
    }[];
    newPostTitle: string;
    newPost: {
        newPostImg: string;
        block: string;
        category: string;
        title: string;
        btnText: string;
    }[];
    popularAsideTitle: string;
    popularAside: {
        category: string;
        title: string;
        btnText: string;
        asidetImg: string;
    }[];
    popularBanner: {
        id: string;
        title: string;
        btnText: string;
    }[];
    eventsTitle: string;
    events: {
        eventsImg: string;
        block: string;
        category: string;
        title: string;
        btnText: string;
    }[];
    newlistner: {
        title: string;
        subtitle: string;
        linkText: string;
        btnText: string;
        theme: boolean;
    }[];
};
export declare const blog: {
    p: {
        text: string;
    }[];
};
export declare const footer: ({
    firstBlockTitle: string;
    icons: {
        id: string;
        name: string;
    }[];
}[] | ({
    title: string;
    id: string;
    items: {
        id: string;
        linkName: string;
    }[];
} | {
    title: string;
    items: {
        id: string;
        linkName: string;
    }[];
    id?: undefined;
})[])[];
