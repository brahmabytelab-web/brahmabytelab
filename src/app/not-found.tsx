'use client';

import { ROUTES } from '@/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-gray-50 px-6 py-8">
      {/* Top content */}
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-6xl leading-tight font-extrabold text-orange-500 sm:text-7xl">
          404
        </h1>
        <h2 className="mt-2 text-xl font-semibold text-gray-800 sm:text-2xl md:text-2xl">
          Page Not Found
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have
          been moved. You can return to the homepage or explore other sections.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col justify-center gap-3 sm:mt-2 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-white shadow transition hover:bg-orange-600 sm:px-6 sm:py-2"
          >
            Go Back Home
          </Link>

          <Link
            href="/contact-us"
            className="rounded-lg border border-orange-500 px-4 py-2 font-medium text-orange-500 transition hover:bg-orange-50 sm:px-6 sm:py-2"
          >
            Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-4 text-xs text-gray-500 sm:mt-2 sm:text-sm">
          <p className="mb-1">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <Link
              href={ROUTES.home}
              className="transition hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href={ROUTES.about}
              className="transition hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href={ROUTES.products}
              className="transition hover:text-orange-500"
            >
              Products
            </Link>
            <Link
              href={ROUTES.services}
              className="transition hover:text-orange-500"
            >
              Services
            </Link>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex w-full justify-center">
        <Image
          height={400}
          width={400}
          src="https://illustrations.popsy.co/orange/crashed-error.svg"
          alt="404 illustration"
          className="max-h-[35vh] w-auto sm:max-h-[35vh] md:max-h-[40vh] lg:max-h-[45vh]"
        />
      </div>
    </div>
  );
}
