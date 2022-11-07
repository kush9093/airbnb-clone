import { compare } from "bcryptjs";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import account from "../../../lib/models/account";



export const option =
{
    providers: [
        Credentials({
            async authorize(credentials, req) {
                console.log("credentials - ",credentials);
                const one = await account.findOne({ email: credentials!.email });
                if (!one || !(await compare(credentials!.password, one.password))) {
                    return null
                }
                return { email: credentials!.email,name:one.lastname+" "+one.firstname }
                // next-auth에 리턴되는 User 데이터는 토큰에 포함됨.
            }
        })
    ]
}

export default nextAuth(option);