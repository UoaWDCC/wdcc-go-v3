import Image from 'next/image';

function BarsSpinner() {
  return (
    <div style={{ height: 40, width: 40 }} className="m-auto">
      <style>{`
        @keyframes bars-pulse {
          0%, 50%, 100% { d: path("M0 12 V20 H4 V12z"); }
          20% { d: path("M0 4 V28 H4 V4z"); }
        }
        .bar { fill: white; animation: bars-pulse 1.2s infinite; }
      `}</style>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path className="bar" transform="translate(2)"  d="M0 12 V20 H4 V12z" style={{ animationDelay: '0s' }} />
        <path className="bar" transform="translate(8)"  d="M0 12 V20 H4 V12z" style={{ animationDelay: '-1.0s' }} />
        <path className="bar" transform="translate(14)" d="M0 12 V20 H4 V12z" style={{ animationDelay: '-0.8s' }} />
        <path className="bar" transform="translate(20)" d="M0 12 V20 H4 V12z" style={{ animationDelay: '-0.6s' }} />
        <path className="bar" transform="translate(26)" d="M0 12 V20 H4 V12z" style={{ animationDelay: '-0.4s' }} />
      </svg>
    </div>
  );
}

export default function Loading() {
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
          <BarsSpinner />
        </div>
      </div>
    </div>
  );
}
