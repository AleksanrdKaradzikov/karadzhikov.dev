import { Container } from "@chakra-ui/react";
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
            <Container maxW="container.xl" mt="10">
                <Breadcrumbs dinamicParams={params} breadcrumbs={breadcrumbs} />
            </Container>
        </Layout>
    )
};

export default ArticlePage;