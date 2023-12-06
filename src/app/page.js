import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello NEXT js!</h1>
      <Image src="/hi.svg" width={100} height={100} alt="pic of hi" />
    </>
  );
}
