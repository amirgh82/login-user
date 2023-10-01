import Index from "./src/pages/Index/Index"
import Login from "./src/pages/Login/Login"
import Register from "./src/pages/Register/Register"

let routes = [
    { path: '/', element: <Index /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]

export default routes