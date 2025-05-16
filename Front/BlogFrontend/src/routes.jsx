import { NotFound } from "./pages/Notfoud"
import { Postspage } from "./pages/Posts"
export const routes = [
    {path: '/*',element: <NotFound />},
    {path: '/',element:<Postspage/> },
]