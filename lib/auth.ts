// lib/auth.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // if (!credentials?.email || !credentials?.password) return null;

        // lib/auth.ts

        const mockUser = {
          id: "1",
          name: "Ahmad Syarifuddin",
          email: "alumni@ikasda.org",
          password: "password123", // Password asli (untuk tujuan demo)
          role: "alumni",
        };

        // if (credentials.email !== mockUser.email) return null;

        // // Verifikasi enkripsi password
        // const isValid = await bcrypt.compare(
        //   credentials.password as string,
        //   mockUser.passwordHash
        // );

        // if (!isValid) return null;

        // Cek email dan password langsung
        if (
          credentials.email === "alumni@ikasda.org" &&
          credentials.password === "password123"
        ) {
          return {
            id: "1",
            name: "Ahmad Syarifuddin",
            email: "alumni@ikasda.org",
            role: "alumni",
          };
        }

        return {
          id: mockUser.id,
          name: mockUser.name,
          email: mockUser.email,
          role: mockUser.role,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) (session.user as any).role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "super-secret-key-ikasda-2026",
});