import classes from "./Login.module.css";
import logoSrc from "/Logo.png?url";
import {TextInput, PasswordInput, Checkbox, Button, Card, Image, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useDisclosure} from "@mantine/hooks";
import {useNavigate} from "react-router-dom";

const userData = {
    id: "test",
    pw: "test"
}

export default function Login() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            id: "",
            pw: "",
            autoLogin: false,
        }
    });
    const [loading, {open: startLoading, close: endLoading}] = useDisclosure();
    const navigate = useNavigate();
    const handleSubmit = form.onSubmit((values, event) => {
        // submit 되어버리는 것 방지
        event?.preventDefault();

        // 폼 초기화 및 로딩
        form.clearErrors();
        startLoading();

        // 테스트 로그인 로직, 이후 API로 변경
        const testInterval = setInterval(() => {
            clearInterval(testInterval);
            console.log(values);

            // 로그인 로직, 성공 시 홈으로 이동
            if (values.id !== userData.id || values.pw !== userData.pw) {
                const msg = "아이디 또는 비밀번호가 다릅니다.";
                form.setErrors({"id": msg, "pw": msg});
            } else {
                navigate("/");
            }

            endLoading();
        }, 1000);

    });

    return (
        <div className={classes.background}>
            <Card shadow="md" radius="lg" padding="lg" className={classes.card}>
                <div className={classes.logoWrap}>
                    <Image src={logoSrc} className={classes.logo}/>
                </div>
                <Title order={3} className={classes.title}>회원 로그인</Title>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextInput label="ID" required
                               key={form.key("id")}
                               {...form.getInputProps("id")}
                    />
                    <PasswordInput label="Password" required
                                   key={form.key("pw")}
                                   {...form.getInputProps("pw")}
                    />
                    <Checkbox label="자동 로그인"
                              key={form.key("autoLogin")}
                              {...form.getInputProps("autoLogin", {type: "checkbox"})}
                    />
                    <Button type="submit" loading={loading}>Login</Button>
                </form>
            </Card>
        </div>
    )
}