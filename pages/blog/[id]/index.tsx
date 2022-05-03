import { Layout } from "../../../src/components/Layouts/AnimateLayout";
import { Breadcrumbs } from '../../../src/components/Breadcrumbs';
import { useBreadcrumbsPaths } from '../../../src/hooks/useBreadcrumbs';

const params = {
    id: 'articleName',
    articleName: 'Название статьи',
}

const ArticlePage = () => {
    const breadcrumbs = useBreadcrumbsPaths();
    return (
        <Layout>
            <Breadcrumbs dinamicParams={params} breadcrumbs={breadcrumbs} />
        </Layout>
    )
};

export default ArticlePage;