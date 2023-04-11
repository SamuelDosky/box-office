import { Outlet } from "react-router"
import Navs from './Navs'
import Apptitle from './Apptitle'

const MainLayout = () => {
    return (
        <div>
            <Apptitle/>
            <Navs />
            <Outlet />
        </div>
    )
}

export default MainLayout