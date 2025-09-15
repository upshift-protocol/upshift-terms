import Logo from "@/components/logo";
import FONTS from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Logo width={180} height={90} />
        <div className="max-w-md text-center">
          <p style={FONTS.visiaPro.style}>
          You are accessing Upshift products and services from a restricted jurisdiction. We do not allow access from certain jurisdictions including locations subject to sanctions restrictions and other jurisdictions where our services are ineligible for use. 
          <br/><br/>
          For more information, see our Terms of Use. If you think this is an error, try refreshing the page.
          </p>
        </div>
      </main>
      <footer className="row-start-4 flex gap-8 flex-wrap items-center justify-center">
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4 transition duration-150"
          href="https://upshift.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/apple-touch-icon.png"
            alt="Window icon"
            width={24}
            height={24}
          />
          Home
        </a>
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4 transition duration-150"
          href="https://docs.upshift.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/folder-150.png"
            alt="File icon"
            width={24}
            height={24}
          />
          <p>Docs</p>
        </a>
      </footer>
    </div>
  );
}
