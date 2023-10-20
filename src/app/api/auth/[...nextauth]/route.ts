import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          const data = {
            userName: "admin@test.com",
            password: "Admin.123",
          };
          process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
          const response: any = await fetch(
            "https://localhost:5000/api/User/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );

          const res = await response.json();
          console.info("resresresresres", res);

          if (typeof res !== "undefined") {
            return { ...res.user, apiToken: res.token };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        // token.accessToken = user.apiToken;
        // token.refreshToken = user.refreshToken;
        // token.accessTokenExpires = user.accessTokenExpires;
        // token.role = user.role;
        token.id = user.id;
      }
      return token;
    },

    //  The session receives the token from JWT
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
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
    signIn: "/auth/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
