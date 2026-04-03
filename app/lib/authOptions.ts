import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions, User } from "next-auth"; // ✅ এটা যোগ করুন
import { loginUser } from "@/app/actions/auth/loginUser";
import dbConnect, { collectionNamesObj } from "./dbConnect";

export const authOptions: NextAuthOptions = { // ✅ any → NextAuthOptions
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> { // ✅ any সরিয়ে দিন
        const user = await loginUser(credentials);
        if (user) return {
            id: user._id.toString(), // ✅ _id কে id তে map করুন
            email: user.email,
            name: user.name,
            image: user.image,
          }; else {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) { // ✅ any সরিয়ে দিন
      if (account) {
        const { providerAccountId, provider } = account;
        const { email: userEmail, image, name } = user;

        const userCollection = await dbConnect(collectionNamesObj.userCollection);

        const isExisted = await userCollection.findOne({ providerAccountId });
        if (!isExisted) {
          const payload = { providerAccountId, provider, userEmail, image, name };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    },
  }
};