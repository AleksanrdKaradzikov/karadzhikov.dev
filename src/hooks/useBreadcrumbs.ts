import { useRouter } from 'next/router';
import { mapPathToLabel, staticRoutes } from '../constants/routes';

export const useBreadcrumbsPaths = () => {
    const { pathname } = useRouter();
    const labelToHref: Record<string, string> = {};
    const replacePaths = pathname.replace(/\w+/g, function (word, index) {
        if (mapPathToLabel[word]) {
            labelToHref[mapPathToLabel[word]] = pathname.slice(index - 1, word.length + 1);
        } else {
            labelToHref[`[${word}]`] = pathname.slice(0, index + word.length + 1);
        }

        return mapPathToLabel[word] ? mapPathToLabel[word] : word;
    });
    const items = replacePaths.split('/').slice(1);
    const breadcrumbs = items.reduce((
        acc: { label: string; path: string, isRoot?: boolean }[],
        item: string, index
    ) => {
        const breadcrumb = {
            label: item,
            path: labelToHref[item],
            isRoot: false,
        };

        if (index === items.length - 1) {
            breadcrumb.isRoot = true;
        }

        return [...acc, breadcrumb];
    }, [staticRoutes[0]]);

    return breadcrumbs;
};