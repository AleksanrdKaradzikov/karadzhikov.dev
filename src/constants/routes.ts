export const HOME = '/';
export const ABOUT = '/about';
export const WORKS = '/works';
export const BLOG = '/blog';
export const CATEGORY = `${BLOG}/category`;

export const mapPathToLabel = {
    [HOME]: 'Главная',
    [BLOG]: 'Статьи',
    [ABOUT]: 'Об авторе',
    [WORKS]: 'Работы',
    [CATEGORY]: 'Категории',
} as Record<string, string>;

export const staticRoutes = [
    {
        path: HOME,
        label: mapPathToLabel[HOME],
    },
    {
        path: BLOG,
        label: mapPathToLabel[BLOG],
    },
    {
        path: ABOUT,
        label: mapPathToLabel[ABOUT],
    },
    {
        path: WORKS,
        label: mapPathToLabel[WORKS],
    },
];

export const staticTitles = {
    about: mapPathToLabel[ABOUT],
    blog: mapPathToLabel[BLOG],
    works: mapPathToLabel[WORKS],
    category: mapPathToLabel[CATEGORY],
}