import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {persistor, store} from "./store/store.ts";
import {PersistGate} from "redux-persist/integration/react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ToastContainer} from "react-toastify";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        loader: async () => {
            return null
        },
        children: [
            {
                path: "/",
                index: true,
                element: <Home/>,
                loader: async () => {
                    return null
                },
            },
        ],
    },
]);


const theme = createTheme({
    palette: {
        mode: 'dark',
    },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <RouterProvider router={router}/>
                    <ToastContainer/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
)
