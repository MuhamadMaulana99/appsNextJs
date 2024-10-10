import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/components/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold mt-4">Welcome to My App</h1>
    </Layout>
  );
}
