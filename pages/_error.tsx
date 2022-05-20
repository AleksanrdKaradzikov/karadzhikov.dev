import { ErrorPage } from '../src/components/ErrorPage';
import { PageNotFound } from '../src/components/404';


function Error({ statusCode = 404 }: any) {
    switch (statusCode) {
        case 404: {
            return <PageNotFound />;
        }

        case 500: {
            return <ErrorPage />;
        }

        default:
            return <ErrorPage />;
    }
}

Error.getInitialProps = ({ res, err }: any) => {
    let statusCode = null;

    if (res) {
        statusCode = res.statusCode;
    }

    if (err) {
        statusCode = err.statusCode;
    } else {
        statusCode = 404;
    }

    return { statusCode }
}

export default Error;