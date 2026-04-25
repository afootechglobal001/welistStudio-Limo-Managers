import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { queryClient } from "@/lib/query-client";
import { AuthLoginType } from "@/types/auth/schema";

export const login = async (data: AuthLoginType) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: AuthLoginType) => login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["loggedInUser"],
      });
    },
  });
};
