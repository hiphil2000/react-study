import {useMutation} from "@tanstack/react-query";
import {login, me} from "../services/AuthService";
import {useUserStore} from "../stores/authStore";

export default function useLogin() {
    const { setUser } = useUserStore();
    const {mutate, status, data, error} = useMutation({
        mutationFn: login,
        onSuccess: async (data) => {
            sessionStorage.setItem("token", data.token);
            setUser((await me()).user);
        }
    });

    return {mutate, status, data, error};
}