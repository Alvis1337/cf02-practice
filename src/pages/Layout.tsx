import {Grid} from "@mui/material";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
            <Grid container sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}>
                <Outlet/>
            </Grid>
    )
}

export default Layout;
