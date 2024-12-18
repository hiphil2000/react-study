import "@mantine/core/styles.css"
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import {MantineProvider, createTheme} from "@mantine/core"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Dashboard, Login, NotFound} from "./pages";
import {useUserStore} from "./libs/stores/authStore.ts";
import AuthPage from "./components/AuthPage.tsx";

const theme = createTheme({
    fontFamily: "'Nanum Gothic', sans-serif",
    headings: { fontFamily: "'Nanum Gothic', sans-serif" }
})

const queryClient = new QueryClient();

export default function App() {
    const { user } = useUserStore();
    const authenticated = user !== null;

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<AuthPage page={<Dashboard />} authenticated={authenticated} />} />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </MantineProvider>
        </QueryClientProvider>
    )
}

