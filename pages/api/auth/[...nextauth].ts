import { compare } from "bcryptjs";
import nextAuth, { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import account from "../../../lib/models/account";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect"
import { AccountData } from "../../../interface";
import CredentialsProvider from "next-auth/providers/credentials"


export const option: NextAuthOptions =
{
    pages: {
        error: "/auth/error"
    },
    providers: [

        CredentialsProvider({
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials: any, req: any) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/api/account/finduser?email=${credentials.email}`, {
                    method: 'GET',
                })
                const {data} = await res.json()
                const user: User = {
                    id: data._id,
                    email: data.email,
                    name: `${data.lastname} ${data.firstname}`
                }

                // If no error and we have user data, return it
                if (res.ok && data) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        GoogleProvider({
            clientId:
                "362938165472-mngl1sen3pjtdd8d1b747jo0t9k5t0at.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account?.provider === "credentials") {
                return true;
            }

            // 이 소셜 계정에 해당하는 정보가 만약 관리중인 데이터라면
            // return true;

            // 기타등등의 상황에서는 다음 작업을 이어갈수 있는 경로를 보내주면 됨.

            if (account?.provider === "google") {
                // return "http://localhost:3000/auth/error?error=NotEnough&email=abcdefu"
                return true
            }
            // return true; 인증이 됨.

            return false; // error = AccessDenied

        }
    }

}

export default nextAuth(option);