/* eslint-disable @next/next/no-img-element */
"use client";

import {
  BarChart4,
  CodeXml,
  Download,
  Hourglass,
  Infinity,
  Linkedin,
  NotebookText,
  Plus,
  Receipt,
  Rocket,
  Twitter,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const Home = () => {
  return (
    <div className="bg-[#F7F7F7] flex justify-center items-center overflow-x-hidden">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-[#E0E0E0]">
        
        {/* Logo Section */}
        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="border-t border-dashed border-[#E0E0E0] w-full mx-auto py-10 flex justify-center items-center relative">
            <Plus className="text-black group-hover:text-black w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
            <Image
              src="/android-chrome-512x512.png"
              width={100}
              height={100}
              className="rounded-lg"
              alt="logo"
            />
          </div>

          {/* Title Section */}
          <div className="relative group">
            <h1 className="font-semibold text-3xl md:text-7xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-black border-[#E0E0E0]">
              <span>Put </span>
              <span className="underline">people</span>
              <span> first</span>
            </h1>
          </div>

          {/* Button Section */}
          <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-[#E0E0E0] border-b w-full justify-center border-dashed relative">
            <Plus className="text-black group-hover:text-black w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-[#32CD32] text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              Book a Demo
            </Link>
          </div>

          {/* Stats Section */}
          <div className="group border-b border-dashed text-balance text-center w-full font-semibold border-[#E0E0E0]">
            <div className="grid grid-cols-2 px-4 relative py-6 text-3xl md:text-7xl max-w-lg mx-auto">
              <div className="flex flex-col border-r border-dashed border-[#E0E0E0]">
                <div className="flex justify-center items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Average daily activity</span>
                </div>
                <span className="text-black">75.2%</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="text-xs">Average daily users</span>
                </div>
                <span className="text-black">~20k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Preview Section */}
        <div className="mb-10">
          <DemoPreview />
        </div>

        {/* Features Section */}
        <p className="font-medium text-xl md:text-3xl border-t border-[#E0E0E0] border-b border-dashed md:py-6 py-3 px-7 text-neutral-700 text-center">
          Here&apos;s why you&apos;ll love our Free Invoice Generator
        </p>
        <div className="grid sm:grid-cols-2 relative">
          <Plus className="text-black group-hover:text-black w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
          <Plus className="text-black group-hover:text-black w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

          {/* Feature Boxes */}
          {[
            { icon: Rocket, title: "Fast & Easy", text: "Simply fill in the blanks and generate professional invoices in seconds" },
            { icon: Infinity, title: "Free & Unlimited", text: "Create as many invoices as you need, forever, at no cost." },
            { icon: NotebookText, title: "Beautiful Templates", text: "Choose from a variety of modern and customizable invoice templates." },
            { icon: Receipt, title: "Get Paid Faster", text: "Send invoices electronically with secure payment links for faster client payments." },
            { icon: Hourglass, title: "Save Time & Money", text: "Ditch the spreadsheets and expensive invoicing software." },
            { icon: CodeXml, title: "Free & Open Source", text: "Absolutely no cost, with the freedom to customize and adapt to your needs." }
          ].map((feature, index) => (
            <div key={index} className={`border-${index % 2 === 0 ? "r" : ""} border-b border-dashed p-7 border-[#E0E0E0] flex justify-center flex-col items-center`}>
              <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E0E0E0] to-[#32CD32]">
                <feature.icon />
              </p>
              <p className="font-bold text-xl">{feature.title}</p>
              <p className="text-neutral-500 mt-1 text-center">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="px-5 py-11 flex justify-center items-center border-b border-dashed border-[#E0E0E0]">
          <div className="flex justify-center rounded-2xl max-w-3xl border-dashed items-center px-4 py-10 w-full flex-col gap-4 bg-gradient-to-br from-[#E0E0E0] to-[#32CD32]">
            <p className="md:max-w-2xl text-center font-semibold text-xl text-black p-4 md:text-3xl text-balance">
              Stop wasting time and start getting paid what you deserve. Try our Free Invoice
            </p>
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-[#32CD32] text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              Generate Today!
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center border-b border-dashed mb-20 border-[#E0E0E0] py-10 px-4 gap-4">
          <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-[#E0E0E0]">
            <a target="_blank" href="https://www.linkedin.com/in/uddalak-das-crypto-nft-defi/">
              <Linkedin />
            </a>
          </div>
          <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-[#E0E0E0]">
            <a target="_blank" href="https://x.com/ninja_writer21">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
