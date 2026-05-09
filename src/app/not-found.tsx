import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen py-24 px-4 flex justify-center items-center bg-gradient-to-b from-wdcc-blue-100 to-wdcc-blue-200">
      <div className="flex-grow">
        <div className="flex flex-row m-auto justify-center items-center">
          <Image
            src="/logo_white_512.png"
            alt="WDCC Logo"
            width={512}
            height={512}
            className="w-36 flex-shrink"
            priority
          />
        </div>

        <div className="text-center flex flex-col max-w-md mx-auto my-4 font-display pb-28">
          <hr className="border-white border my-4" />
          <p className="text-white text-lg mb-4">That link doesn&apos;t exist.</p>
          <Link
            href="/"
            className="py-3 rounded-lg my-2 hover:brightness-90 transition duration-300 shadow-md block"
            style={{ backgroundColor: '#FFFFFF', color: '#183249', fontWeight: 440 }}
          >
            Back to WDCC links
          </Link>
        </div>
      </div>
    </div>
  );
}
