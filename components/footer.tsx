"use client";
import Link from "next/link";
import { Text } from "./uiL/text";

export default function Footer() {
  return (
    <div className="w-full bg-blue_gray-800 py-10 md:py-5">
      <div className="container flex flex-col items-center justify-center mx-auto gap-8 px-6 md:px-5 sm:gap-8">
        {/* Name and Links */}
        <div className="flex flex-col items-center gap-8 w-full md:w-auto">
          <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
            Saurabh Badaya
          </Text>
          <ul className="flex flex-wrap justify-center gap-5">
            <li>
              <Link href="/about" target="_blank" rel="noreferrer">
                <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
                  About
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/courses" target="_blank" rel="noreferrer">
                <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
                  Courses
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/linkedin" target="_blank" rel="noreferrer">
                <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
                  LinkedIn
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/contact" target="_blank" rel="noreferrer">
                <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-100">
                  Contact
                </Text>
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-100" />

        {/* Footer Bottom */}
        <div className="flex justify-between gap-5 w-full md:flex-col md:items-center">
          <Text as="p" className="text-[14px] font-normal text-gray-100">
            © 2024 BadayaFitness&Sports. All rights reserved.
          </Text>
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <Link href="/privacy-policy">
                <Text as="p" className="text-[14px] font-normal text-gray-100">
                  Privacy Policy
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">
                <Text as="p" className="text-[14px] font-normal text-gray-100">
                  Terms & Conditions
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/refunds-policy">
                <Text as="p" className="text-[14px] font-normal text-gray-100">
                  Refunds & Cancellation Policy
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
