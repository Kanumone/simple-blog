import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";

function AppRouter() {
    const {isAuth} = useContext(AuthContext);
    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                )
                :
                publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                )
            }
        </Routes>
    );

}

export default AppRouter;

