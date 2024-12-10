import {useMemo} from "react";
import {ActionIcon, Anchor, Card, Group, Stack, Title} from "@mantine/core";
import {MRT_Table, type MRT_ColumnDef, useMantineReactTable} from "mantine-react-table";
import {IconExternalLink} from "@tabler/icons-react";
import classes from "./ReportCard.module.css";

type ReportCardProps = {
    title: string;
    href?: string;
    ongoing: number;
    completed: number;
    rejected: number;
    recentData: ReportData[];
}

type ReportData = {
    appNo: string;
    pid: number;
    appTitle: string;
    curAppStateId: string;
}

export default function ReportCard({title, href, ongoing, completed, rejected, recentData}: ReportCardProps) {
    const columns = useMemo<MRT_ColumnDef<ReportData>[]>(
        () => [
            {
                accessorKey: "appTitle",
                header: "제목"
            },
            {
                accessorKey: "curAppStateId",
                header: "결재대기"
            },
        ],
        [],
    );

    const table = useMantineReactTable<ReportData>({
        columns: columns,
        data: recentData,
        enableColumnActions: false,
        enableColumnFilters: false,
        enableSorting: false,
    });

    return (
        <Card shadow="md" radius="lg" withBorder className={classes.summaryCard}>
            <Group align="start" mb="md">
                <Title order={4}>{title}</Title>
                {href && (
                    <ActionIcon component="a" href="/calendar"
                                size="xs" variant="transparent" ml="auto">
                        <IconExternalLink/>
                    </ActionIcon>
                )}
            </Group>
            <Stack gap="xs">
                <Group align="center" justify="center" gap="xl">
                    <Stack justify="center" align="center" gap="0">
                        <Anchor href={`/${href}?status=ongoing`}
                                size="xl" style={{fontWeight: "bold"}}>
                            {ongoing}
                        </Anchor>
                        <Title order={6}>진행중</Title>
                    </Stack>
                    <Stack justify="center" align="center" gap="0">
                        <Anchor href={`/${href}?status=completed`}
                                size="xl" style={{fontWeight: "bold", color: "green"}}>
                            {completed}
                        </Anchor>
                        <Title order={6}>승인</Title>
                    </Stack>
                    <Stack justify="center" align="center" gap="0">
                        <Anchor href={`/${href}?status=rejected`}
                                size="xl" style={{fontWeight: "bold", color: "red"}}>
                            {rejected}
                        </Anchor>
                        <Title order={6}>반려</Title>
                    </Stack>
                </Group>
                <MRT_Table table={table}/>
            </Stack>
        </Card>
    )
}