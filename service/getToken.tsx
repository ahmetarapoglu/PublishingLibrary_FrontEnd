import { getSession } from "next-auth/react";

export const GetToken = async () => {
  const session = await getSession();
  if (session) {
    const { accessToken }: any = session.user;
    return accessToken
  }
  return ""
};
