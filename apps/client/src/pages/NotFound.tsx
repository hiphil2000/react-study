import {Stack, Text, Title} from "@mantine/core";

export default function NotFound() {
    return (
        <Stack>
            <Title order={3}>404 NOT FOUND</Title>
            <Text>찾으시는 페이지가 존재하지 않습니다.</Text>
        </Stack>

    )
}