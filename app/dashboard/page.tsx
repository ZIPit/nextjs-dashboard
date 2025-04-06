import Image from 'next/image';
export default function Page() {
    return (
    <div>
        <p>Dashboard page!!!!!</p>
    <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshot of the dashboard project showing desktop version"
          />
    <Image
                src="/hero-mobile.png"
                width={560}
                height={620}
                className="block md:hidden"
                alt="Screenshot of the dashboard project showing mobile version"
              />
    </div>
    );
}