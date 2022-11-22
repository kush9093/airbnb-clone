import { compare } from "bcryptjs";
import nextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import account from "../../../lib/models/account";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect"



export const option:NextAuthOptions =
{
    pages: {
        error: "/auth/error"
    },
    providers: [
        Credentials({
            async authorize(credentials, req) {
                console.log("credentials - ",credentials);
                await dbConnect();
                const one = await account.findOne({ email: credentials!.email });
                if (!one || !(await compare(credentials!.password, one.password))) {
                    return null
                }
                return { email: credentials!.email,name:one.lastname+" "+one.firstname }
                // next-auth에 리턴되는 User 데이터는 토큰에 포함됨.
            }
        }),
        GoogleProvider({
            clientId:
            "362938165472-mngl1sen3pjtdd8d1b747jo0t9k5t0at.apps.googleusercontent.com",
            clientSecret:"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",
        })
    ],
    callbacks:{
        async signIn({user,account,profile,email,credentials}){
            console.log("credentials = ",credentials)
            console.log("account",account)
            if(account?.provider === "credentials"){
                return true;
            }

            // 이 소셜 계정에 해당하는 정보가 만약 관리중인 데이터라면
            // return true;

            // 기타등등의 상황에서는 다음 작업을 이어갈수 있는 경로를 보내주면 됨.

            if(account?.provider === "google"){
                // return "http://localhost:3000/auth/error?error=NotEnough&email=abcdefu"
                return true
            }
            // return true; 인증이 됨.

            // return false; // error = AccessDenied
            
        }
    }

}

export default nextAuth(option);