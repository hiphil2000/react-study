import {useMutation} from "@tanstack/react-query";
import {ILoginResponse, login, me} from "../services/AuthService";
import {useUserStore} from "../stores/authStore";

type LoginProps = {
    onSuccess?: (data: ILoginResponse) => void;
    onError?: (error: Error) => void;
}

export default function useLogin({onSuccess, onError}: LoginProps) {
    const { user, setUser } = useUserStore();
    const {mutate, status, data, error} = useMutation({
        mutationFn: login,
        onSuccess: async (data) => {
            sessionStorage.setItem("token", data.token);
            setUser((await me()).user);
            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            if (onError) {
                onError(error);
            }
        }
    });

    return {mutate, status, data, error, user};
}