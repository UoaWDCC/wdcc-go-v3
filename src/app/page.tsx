import Image from 'next/image';
import { getLinks } from '@/lib/data';
import { LinkCard } from '@/components/LinkCard';

export default async function Home() {
  const links = await getLinks();

  return (
    <main className="min-h-screen py-24 px-4 flex justify-center items-center bg-gradient-to-b from-wdcc-blue-100 to-wdcc-blue-200">
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
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>
      </div>
    </main>
  );
}
