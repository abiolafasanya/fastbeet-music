import View from "@/@ui/_view";
import { Button } from "@/components/ui/button";
import { about, programs, services } from "@/data/home";
import Image from "next/image";
import { LuCheck } from "react-icons/lu";
import { Center, Component, Heading } from "@/@ui/component";
import { Contact } from "@/@ui/form/contact";
import { Login, LoginButton } from "@/@ui/form/login";

export default function Home() {
  return (
    <View>
      <Hero />
      <Services />
      <Program />
      <About />
      <Contact />
      <Footer />
      <Login />
    </View>
  );
}

const data = {
  intro: `Redefining Your Musical Journey`,
};

function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-hero-bg bg-cover relative"
    >
      <div className="absolute w-full h-full bg-black/50">
        <article className="w-full h-full flex justify-center items-center max-w-6xl mx-auto py-5">
          <div className="w-[450px] text-center">
            <h2 className="text-4xl text-white font-semibold">{data.intro}</h2>
            <LoginButton>Get Started</LoginButton>
          </div>
        </article>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Component>
      <Center className="w-full h-full py-16 px-5 md:px-0">
        <Heading
          id="services"
          title="Our Services"
          body={`We offer a variety of music lessons tailored to your needs. Whether
            you’re a beginner or an advanced musician, we have something for
            everyone.`}
        />
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-full h-64 border cursor-pointer"
            >
              <Image
                src={service.image}
                alt=""
                height={300}
                width={300}
                className="relative w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 w-full h-full flex flex-col gap-2 items-center justify-center p-3 bg-black/50 hover:bg-black/70 transition-all ease-in-out">
                <h2 className="text-xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="text-center text-pretty text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </Center>
    </Component>
  );
}

function Program() {
  return (
    <Component>
      <Center className="w-full h-full py-16 px-5 md:px-0">
        <Heading
          id="program"
          title="Our Program"
          body={`Our programs are designed to help you achieve your musical goals.
            Explore our offerings and find the perfect fit for you.`}
        />

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10">
          {programs.map((program) => (
            <div
              key={program.id}
              className="w-full border min-h-64 flex flex-col gap-2 items-center justify-center p-3 bg-white"
            >
              <h2 className="text-xl font-semibold text-primary-800">
                {program.title}
              </h2>
              <p className="text-center text-pretty text-primary-700">
                {program.description}
              </p>
            </div>
          ))}
        </section>
      </Center>
    </Component>
  );
}

function About() {
  return (
    <Component>
      <article
        id="about"
        className="my-14 p-20 bg-primary-500 text-primary-50 px-5 md:px-0"
      >
        <Center>
          <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
            <section className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold my-5">{about.headline}</h2>
              <div className="text-xl">{about.description}</div>
            </section>
            <section className="py-5">
              <Image
                src={about.image}
                alt=""
                width={400}
                height={400}
                className="w-[300px] h-[300px] object-cover object-center"
              />
            </section>
          </div>
        </Center>
      </article>
      <Center className="px-5 md:px-0">
        <article className="flex flex-col md:flex-row justify-between items-center">
          <section>
            <Image
              src={about.image}
              alt=""
              width={400}
              height={400}
              className="w-[500px] h-[500px] object-cover object-center"
            />
          </section>
          <section className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold my-5 text-primary-500">
              {about.misson.title}
            </h2>
            <div className="text-xl space-y-3">
              <p>{about.misson.description}</p>
              <p>{about.misson.content}</p>

              <div>
                <h3>Join us!</h3>
                <ul className="">
                  {about.misson.actions.map((action, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <LuCheck className="text-primary-900 text-sm" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </article>
      </Center>
      <section className="mt-16 h-56 bg-primary-500 text-white">
        <Center className="w-full h-full flex justify-center items-center">
          <p className="text-pretty text-center text-white text-2xl font-semibold p-5">
            “Music can change the world because it can change people.” — Bono
          </p>
        </Center>
      </section>
    </Component>
  );
}

function Footer() {
  return (
    <footer className="border-t-2">
      <Center className="text-center">
        <p className="p-5">
          &copy; {new Date(Date.now()).getFullYear()} Fastbeet Music. All Rights
          Reserved.
        </p>
      </Center>
    </footer>
  );
}
