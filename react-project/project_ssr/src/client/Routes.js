import LogInPage from "./Pages/LogInPage";
import HomePage from './Pages/HomePage'
import NotFoundPage from "./Pages/NotFoundPage";

export default [
    {
        ...LogInPage,
        path: '/auth',
        exact: true
    },
    {
        ...HomePage,
        path: '/test1'
    },
    {
        ...NotFoundPage
    }
]