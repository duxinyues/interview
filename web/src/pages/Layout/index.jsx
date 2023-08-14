/**
 * 这是登录后的页面，一般作为整个应用的基座
 */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Layout() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }
    }, [])
    return <div>这是登录后的页面</div>
}

export default Layout