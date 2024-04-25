import { Route, Routes } from "react-router-dom"
import { AdminRoute } from "./AdminRoutes"
import { CustomerRouter } from "./CustomerRouter"

export const Routers = () => {
    return (
        <Routes>
            <Route path='/admin/restaurant/*' element={<AdminRoute />}/>
            <Route path='/*' element={<CustomerRouter />}/>
        </Routes>
    )
}