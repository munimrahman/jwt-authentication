import apiSlice from "../api/apiSlice";
import Cookies from "js-cookie";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/sign-up",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const accessToken = Cookies.get("jwt-access");
          console.log(accessToken);
        } catch (error) {}
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/log-in",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: res.data.data.accessToken,
              refreshToken: res.data.data.refreshToken,
              user: res.data.data.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: res.data.data.accessToken,
              refreshToken: res.data.data.refreshToken,
              user: res.data.data.user,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
