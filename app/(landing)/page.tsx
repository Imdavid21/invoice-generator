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
    <div className="bg-[#F5F5E6] flex justify-center items-center overflow-x-hidden">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-[#E0E0E0]">
        
        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="border-t border-dashed border-[#E0E0E0] w-full mx-auto py-10 flex justify-center items-center relative">
            <Plus className="text-[#A5B4A2] group-hover:text-[#A5B4A2] w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
            <Image
              src="/android-chrome-512x512.png"
              width={100}
              height={100}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="relative group">
            <h1 className="font-semibold text-3xl md:text-7xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-[#333333] border-[#E0E0E0]">
              <span className="">Zero commitment. No ads. Just quick, clean </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#A5B4A2] to-[#6E7D66]">
                Invoices
              </span>
            </h1>
          </div>
          <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-[#E0E0E0] border-b w-full justify-center border-dashed relative">
            <Plus className="text-[#A5B4A2] group-hover:text-[#A5B4A2] w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-[#4A4A4A] text-white hover:bg-[#333333] px-6 py-2 text-lg"
            >
              Generate Invoice
            </Link>
          </div>
          <div className="group border-b border-dashed text-balance text-center w-full font-semibold border-[#E0E0E0]">
            <div className="grid grid-cols-2 px-4 relative py-6 text-3xl md:text-7xl max-w-lg mx-auto">
              <div className="flex flex-col border-r border-dashed border-[#E0E0E0]">
                <div className="flex justify-center items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Generate In</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#A5B4A2] to-[#6E7D66]">
                  30
                </span>
                <span className="text-xs">seconds</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="text-xs">Downloaded</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#A5B4A2] to-[#6E7D66]">
                  1000+
                </span>
                <span className="text-xs">Invoices</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <DemoPreview />
        </div>
        <p className="font-medium text-xl md:text-3xl border-t border-[#E0E0E0] border-b border-dashed md:py-6 py-3 px-7 text-[#333333] text-center">
          Here&apos;s why you&apos;ll love our Free Invoice Generator
        </p>
        <div className="grid sm:grid-cols-2 relative">
          <Plus className="text-[#A5B4A2] group-hover:text-[#A5B4A2] w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
          <Plus className="text-[#A5B4A2] group-hover:text-[#A5B4A2] w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
          <div className="border-r border-b border-dashed p-7 border-[#E0E0E0] flex justify-center flex-col items-center">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
              <Rocket />
            </p>
            <p className="font-bold text-xl">Instant & Effortless</p>
            <p className="text-[#333333] mt-1 text-center">
              Generate invoices in under a minute – no sign-up required.
            </p>
          </div>
          <div className="border-b border-dashed flex justify-center flex-col items-center p-7 border-[#E0E0E0]">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
              <Infinity />
            </p>
            <p className="font-bold text-xl">Free & Unlimited</p>
            <p className="text-[#333333] mt-1 text-center">
              Create as many invoices as you need, forever, at no cost.
            </p>
          </div>
          <div className="border-r border-b border-dashed flex justify-center flex-col items-center p-7 border-[#E0E0E0]">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
              <NotebookText />
            </p>
            <p className="font-bold text-xl">Polished & Professional</p>
            <p className="text-[#333333] mt-1 text-center">
              Stand out with sleek, high-quality invoice designs.
            </p>
          </div>
          <div className="border-b border-[#E0E0E0] border-dashed flex justify-center flex-col items-center p-7">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
              <Receipt />
            </p>
            <p className="font-bold text-xl">Get Paid Faster</p>
            <p className="text-[#333333] mt-1 text-center">
              Send invoices electronically with secure payment links for faster
              client payments.
            </p>
          </div>
          <div className="border-r border-[#E0E0E0] border-b border-dashed flex justify-center flex-col items-center p-7">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
              <Hourglass />
            </p>
            <p className="font-bold text-xl">Save Time & Money</p>
            <p className="text-[#333333] mt-1 text-center">
              Ditch the spreadsheets and expensive invoicing software.
            </p>
          </div>
          <div className="border-b border-dashed p-7 border-[#E0E0E0] flex justify-center flex-col items-center">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-[#E0E0E0] bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
              <CodeXml />
            </p>
            <p className="font-bold text-xl">Customizable & Open</p>
            <p className="text-[#333333] mt-1 text-center">
              No sign-ups, no barriers – make it yours, on your terms.
            </p>
          </div>
        </div>
        <div className="px-5 py-11 flex justify-center items-center border-b border-dashed border-[#E0E0E0]">
          <div className="flex justify-center rounded-2xl max-w-3xl border-dashed items-center px-4 py-10 w-full flex-col gap-4  bg-gradient-to-br from-[#E8EAD5] to-[#D2D6BA]">
            <p className="md:max-w-2xl text-center font-semibold text-xl text-[#333333] p-4 md:text-3xl text-balance">
              Stop wasting time and start getting paid what you deserve. Try our
              Free Invoice Tool.
            </p>
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-[#4A4A4A] text-white hover:bg-[#333333] px-6 py-2 text-lg"
            >
              Generate Invoice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
