import Image from "next/image";

export const AboutMe = () => {
    return (
        <section className="bg-gray-100 rounded-xl p-8 my-10">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                {/* توضیحات */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">Welcome to Elorans Shop</h1>
                    <p className="text-gray-600 mb-4">
                        Create By Hesam Shahmoradi DRACLYR
                    </p>
                    <button className="bg-black text-white py-2 px-5 rounded-full hover:opacity-80 transition">
                        Browse All Products
                    </button>
                </div>

                {/* تصویر */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/me.png" // تصویرت رو داخل public قرار بده
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
