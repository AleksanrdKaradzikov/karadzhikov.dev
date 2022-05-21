export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageview = (url: string, title: string) => {
    const { gtag } = window as any;
    gtag('config', GA_TRACKING_ID, {
        page_location: url,
        page_title: title,
    });
};

export const event = ({ action, category, label, value }: Record<string, string>) => {
    const { gtag } = window as any;
    gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
