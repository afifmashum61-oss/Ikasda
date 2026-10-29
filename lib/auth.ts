import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface UserWithRole {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const mockUser = {
          id: "1",
          name: "Ahmad Syarifuddin",
          email: "alumni@ikasda.org",
          password: "password123",
          role: "alumni",
        };

        if (
          credentials.email === mockUser.email &&
          credentials.password === mockUser.password
        ) {
          return {
            id: mockUser.id,
            name: mockUser.name,
            email: mockUser.email,
            role: mockUser.role,
          } as UserWithRole;
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as UserWithRole).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as UserWithRole).role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "super-secret-key-ikasda-2026",
});
