import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const {data,status} = useSession();
  return (
    <div>
      <h1>인덱스 - 메인</h1>
      <p>
        {status}
      </p>
    </div>
  );
}
