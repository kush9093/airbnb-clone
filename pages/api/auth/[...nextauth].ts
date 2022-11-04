import { compare } from "bcryptjs";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import account from "../../../lib/models/account";



export const option =
{
    providers: [
        Credentials({
            async authorize(credentials, req) {
                const one = await account.findOne({ email: credentials!.email });
                if (!one || !(await compare(credentials!.password, one.password))) {
                    return null
                }
                return { email: credentials!.email,name:one.firstname+one.lastname }
            }
        })
    ]
}

export default nextAuth(option);