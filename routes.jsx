import Index from "./src/pages/Index/Index"
import Login from "./src/pages/Login/Login"
import Register from "./src/pages/Register/Register"

// Project paths
let routes = [
    { path: '/', element: <Index /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]

export default routes