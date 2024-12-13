import "@mantine/core/styles.css"
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import {MantineProvider, createTheme} from "@mantine/core"
import MainRoutes from "./main-routes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const theme = createTheme({
    fontFamily: "'Nanum Gothic', sans-serif",
    headings: { fontFamily: "'Nanum Gothic', sans-serif" }
})

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <MainRoutes />
            </MantineProvider>
        </QueryClientProvider>
    )
}

