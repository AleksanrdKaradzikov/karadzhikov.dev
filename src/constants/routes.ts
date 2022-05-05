export const mapPathToLabel = {
    '/': 'Главная',
    blog: 'Статьи',
    about: 'Об авторе',
    works: 'Работы',
    category: 'Категории',
} as Record<string, string>;

export const staticRoutes = [
    {
        path: '/',
        label: mapPathToLabel['/'],
    },
    {
        path: '/blog',
        label: mapPathToLabel.blog
    },
    {
        path: '/about',
        label: mapPathToLabel.about
    },
    {
        path: '/works',
        label: mapPathToLabel.works
    },
];

export const staticTitles = {
    about: mapPathToLabel.about,
    blog: mapPathToLabel.blog,
    works: mapPathToLabel.works,
    category: mapPathToLabel.category,
}