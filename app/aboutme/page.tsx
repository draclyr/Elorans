import Image from "next/image";
import Link from "next/link";
export default function AboutMe() {
    return (
        <section className="bg-gray-100 rounded-xl p-8 my-10">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">Hesam Shahmoradi</h1>
                    <p className="text-gray-600 mb-4">
                        I have been a front-end developer for 7 years I was born in Tehran and I am skilled in my profession. My goal is unique and rare design in the web field. My skills are: Html , Css , Scss ,
                        Next.js ,
                        Bootstrap , Tailwind CSS ,
                        JavaScript ,
                        Jquery , React ,
                        Wordpress ,
                        Web Design ,
                        Seo ,
                        Material UI ,
                        Shadcn
                    </p>

                    <Link className="bg-black rounded-xl text-white p-3 hover:opacity-75 hover:transition" href="https://github.com/draclyr">My Github</Link>

                </div>
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/me.png"
                        alt="Profile Picture"
                        width={300}
                        height={300}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}