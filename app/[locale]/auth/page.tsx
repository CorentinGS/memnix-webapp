import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// @ts-ignore
export default function Auth({ params: { lng } }) {
  return (
    <main>
      <div className="navbar md:px-5 transition-all">
        <div className="navbar-start">
          <Link className="" href={`/${lng}`} rel="prefetch">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
        </div>
        <div className="navbar-end">
          <select className="hidden md:block my-select-class select select-bordered select-md w-full max-w-[10rem] 0 text-base-content px-5" />
          <a
            href={`/${lng}/auth`}
            aria-label="login"
            rel="prefetch"
            className="ml-3 btn btn-primary h-10 px-5 shadow-none text-base"
          >
            Login
          </a>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:flex md:h-screen 2xl:h-auto pt-[72px] md:min-h-[calc(100vh-72px)]">
        <div className="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div className="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              <h1 className="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                A <span className="text-accent">spaced repetition</span>
                <span className="lg:block">learning app</span>
                <span className="sm:whitespace-nowrap text-secondary">
                  using AI
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <div className="max-w-xs sm:max-w-md flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start">
                  <div className="flex w-full sm:w-auto">
                    <a
                      className="btn btn-primary sm:mb-0 w-full"
                      href={"/auth"}
                      rel="noopener prefetch "
                    >
                      {"cta.get_started"}
                    </a>
                  </div>
                  <div className="flex w-full sm:w-auto">
                    <a
                      href={"https://github.com/CorentinGS"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-full btn-outline"
                    >
                      {"cta.learn_more"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:flex items-center flex-1">
            <div className="relative m-auto max-w-4xl">
              <Image
                src="/next.svg"
                className="mx-auto w-full rounded-md md:h-full drop-shadow-2xl"
                loading={"eager"}
                decoding={"async"}
                alt="Memnix app logo"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
