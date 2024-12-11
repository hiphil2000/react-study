import MainLayout from "../components/MainLayout.tsx";
import {
    ActionIcon,
    Alert,
    Anchor,
    Card,
    Center,
    Container,
    Grid,
    Group,
    Stack,
    Table,
    Text, ThemeIcon,
    Title
} from "@mantine/core";
import {Calendar} from "@mantine/dates";
import {IconExternalLink, IconInfoCircle, IconBellRingingFilled, IconPinned} from "@tabler/icons-react";
import classes from "./Dashboard.module.css";
import ReportCard from "../components/ReportCard.tsx";


export default function Dashboard() {

    return (
        <MainLayout>
            <Container>
                <Grid mt="md" align="stretch">
                    <Grid.Col span={12}>
                        <Stack>
                            <Alert color="blue" variant="light" title="12월 RTD 공지" icon={<IconInfoCircle/>}
                                   withCloseButton>
                                2024년 12월 RTD는 2024-12-05(목) 19:00에 진행될 예정입니다.
                            </Alert>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6, md: 4}}>
                        <SummaryCard title="상신함" href="/application">
                            <Stack gap="xs">
                                <Group align="center" justify="center" gap="xl">
                                    <Stack justify="center" align="center" gap="0">
                                        <Anchor href="/application?status=ongoing"
                                                size="xl" style={{fontWeight: "bold"}}>
                                            10
                                        </Anchor>
                                        <Title order={6}>진행중</Title>
                                    </Stack>
                                    <Stack justify="center" align="center" gap="0">
                                        <Anchor href="/application?status=ongoing"
                                                size="xl" style={{fontWeight: "bold", color: "green"}}>
                                            10
                                        </Anchor>
                                        <Title order={6}>승인</Title>
                                    </Stack>
                                    <Stack justify="center" align="center" gap="0">
                                        <Anchor href="/application?status=ongoing"
                                                size="xl" style={{fontWeight: "bold", color: "red"}}>
                                            10
                                        </Anchor>
                                        <Title order={6}>반려</Title>
                                    </Stack>
                                </Group>
                                {/* 테스트 데이터 */}
                                <Table width="20">
                                    <Table.Thead>
                                        <Table.Tr>
                                            <Table.Th align="left">제목</Table.Th>
                                            <Table.Th align="center">결재대기</Table.Th>
                                        </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                        <Table.Tr>
                                            <Table.Td align="left">
                                                <Stack gap="0" flex="1">
                                                    <Anchor size="sm" truncate="end">2024년 연차휴가 신청</Anchor>
                                                    <Text size="xs">2024-12-05 11:16:25</Text>
                                                </Stack>
                                            </Table.Td>
                                            <Table.Td align="center">대기자 1</Table.Td>
                                        </Table.Tr>
                                        <Table.Tr>
                                            <Table.Td align="left">
                                                <Stack gap="0" flex="1">
                                                    <Anchor size="sm" truncate="end">2024년 연차휴가 신청</Anchor>
                                                    <Text size="xs">2024-12-05 11:16:25</Text>
                                                </Stack>
                                            </Table.Td>
                                            <Table.Td align="center">대기자 1</Table.Td>
                                        </Table.Tr>
                                        <Table.Tr>
                                            <Table.Td align="left">
                                                <Stack gap="0" flex="1">
                                                    <Anchor size="sm" truncate="end">2024년 연차휴가 신청</Anchor>
                                                    <Text size="xs">2024-12-05 11:16:25</Text>
                                                </Stack>
                                            </Table.Td>
                                            <Table.Td align="center">대기자 1</Table.Td>
                                        </Table.Tr>
                                        <Table.Tr>
                                            <Table.Td align="left">
                                                <Stack gap="0" flex="1">
                                                    <Anchor size="sm" truncate="end">2024년 연차휴가 신청</Anchor>
                                                    <Text size="xs">2024-12-05 11:16:25</Text>
                                                </Stack>
                                            </Table.Td>
                                            <Table.Td align="center">대기자 1</Table.Td>
                                        </Table.Tr>
                                    </Table.Tbody>
                                </Table>
                                {/* 테스트 데이터 */}
                            </Stack>
                        </SummaryCard>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6, md: 4}}>
                        <ReportCard title="결재함" href="/report"
                                    ongoing={0} completed={0} rejected={0}
                                    recentData={[]}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6, md: 4}}>
                        <SummaryCard title="캘린더" href="/calendar">
                            <Center>
                                <Calendar firstDayOfWeek={0}
                                          monthLabelFormat={(date) => date.toLocaleDateString("ko-KR", {year: "numeric", month: "long"})}
                                          weekdayFormat={(date) => date.toLocaleDateString("ko-KR", {weekday: "short"})}
                                />
                            </Center>
                        </SummaryCard>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6, md: 12}}>
                        <SummaryCard title="커뮤니티" href="/community">
                            <Table>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th align="left"><Text size="sm">제목</Text></Table.Th>
                                        <Table.Th align="center"><Text size="sm">작성일</Text></Table.Th>
                                        <Table.Th align="left"><Text size="sm">작성자</Text></Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    <Table.Tr bg={"var(--mantine-color-red-1)"}>
                                        <Table.Td align="left">
                                            <Group gap="sm">
                                                <ThemeIcon size="sm" color="red" variant="light">
                                                    <IconBellRingingFilled />
                                                </ThemeIcon>
                                                <Anchor size="sm">
                                                    [진급공지] 비정기 승진발령
                                                </Anchor>
                                                <ThemeIcon size="sm" variant="transparent" ml="auto">
                                                    <IconPinned />
                                                </ThemeIcon>
                                            </Group>
                                        </Table.Td>
                                        <Table.Td align="center">
                                            <Text size="sm">2024-12-05</Text>
                                        </Table.Td>
                                        <Table.Td align="center">
                                            <Text size="sm">
                                                사용자
                                            </Text>
                                        </Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td align="left">
                                            <Group gap="sm">
                                                <Anchor size="sm">
                                                    전직원 RTD '24년 11월 일정공지 (변경확인 필)
                                                </Anchor>
                                            </Group>
                                        </Table.Td>
                                        <Table.Td align="center">
                                            <Text size="sm">2024-12-05</Text>
                                        </Table.Td>
                                        <Table.Td align="left">
                                            <Text size="sm">
                                                사용자
                                            </Text>
                                        </Table.Td>
                                    </Table.Tr>
                                </Table.Tbody>
                            </Table>
                        </SummaryCard>
                    </Grid.Col>
                </Grid>
            </Container>
        </MainLayout>
    )
}

type SummaryCardProps = {
    title: string;
    href?: string;
    children?: React.ReactNode;
}

function SummaryCard({title, href, children}: SummaryCardProps) {
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
            {children}
        </Card>
    )
}