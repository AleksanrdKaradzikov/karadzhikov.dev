import { translations } from './translations';

interface MapFunc {
    (locale: 'ru' | 'en'): string;
}

export const HOME = '/';
export const ABOUT = '/about';
export const WORKS = '/works';
export const BLOG = '/blog';
export const CATEGORY = `${BLOG}/category`;

export const mapPathToLabel = {
    [HOME](locale) { return translations[locale].pagesTitle.home || translations.ru.pagesTitle.home },
    [BLOG](locale) { return translations[locale].pagesTitle.blog || translations.ru.pagesTitle.blog },
    [ABOUT](locale) { return translations[locale].pagesTitle.about || translations.ru.pagesTitle.about },
    [WORKS](locale) { return translations[locale].pagesTitle.works || translations.ru.pagesTitle.works },
    [CATEGORY](locale) { return translations[locale].pagesTitle.categories || translations.ru.pagesTitle.categories },
} as Record<string, MapFunc>;

export const staticRoutes = (locale: 'ru' | 'en') => ([
    {
        path: HOME,
        label: mapPathToLabel[HOME](locale),
    },
    {
        path: BLOG,
        label: mapPathToLabel[BLOG](locale),
    },
    {
        path: ABOUT,
        label: mapPathToLabel[ABOUT](locale),
    },
    {
        path: WORKS,
        label: mapPathToLabel[WORKS](locale),
    },
]);

export const staticTitles = (locale: 'ru' | 'en') => ({
    home: mapPathToLabel[HOME](locale),
    about: mapPathToLabel[ABOUT](locale),
    blog: mapPathToLabel[BLOG](locale),
    works: mapPathToLabel[WORKS](locale),
    category: mapPathToLabel[CATEGORY](locale),
});
