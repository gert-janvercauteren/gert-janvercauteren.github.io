import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    // @ts-ignore
    return (
        <div className={'main-content'}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}

export default ErrorPage