import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { points } from "../../../../../service/endPoints";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          try {
            const baseUrl = `${process.env.NEXTAUTH_URL}/${points.login}`;
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            const response: any = await fetch(baseUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            });
            const user = await response?.json();

            if (typeof user !== "undefined") {
              return {
                ...user.user,
                apiToken: user.token,
              };
            } else {
              return null;
            }
          } catch (e) {
            console.error(e);
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }: any) {
      if (user) {
        token.accessToken = user.apiToken;
        // token.refreshToken = user.refreshToken;
        token.role = user.role;
        token.userName = user.userName;
        token.id = user.id;
      }
      return token;
    },

    //  The session receives the token from JWT
    async session({ session, token, user }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          userName: token.userName,
          accessToken: token.accessToken as string,
          refreshToken: token.refreshToken as string,
          role: token.role,
          id: token.id,
        },
        error: token.error,
      };
    },
  },
  pages: {
    signIn: "/signIn",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
