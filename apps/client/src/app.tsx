import "@mantine/core/styles.css"
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import {MantineProvider, createTheme} from "@mantine/core"
import MainRoutes from "./main-routes.tsx";

const theme = createTheme({
    fontFamily: "'Nanum Gothic', sans-serif",
    headings: { fontFamily: "'Nanum Gothic', sans-serif" }
})

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <MainRoutes />
        </MantineProvider>
    )
}

