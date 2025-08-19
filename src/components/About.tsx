import React from 'react'

export const About = () => {
    return (
        <div className='md:px-20 md:py-40 px-10 py-20 flex justify-between items-center bg-[#332020] gap-4 md:flex-row flex-col-reverse'>
            <div>
                <h2 className='text-yellow-400 text-2xl sm:text-5xl md:text-6xl md:max-w-xl max-w-sm font-extrabold mb-6'>Ma'had Daar AL-Shuffah Cilembu</h2>
                <p className='mt-4 md:mt-0 text-white max-w-3xl text-base sm:text-lg md:text-xl'>
                    Didirikan sebagai pusat pengembangan pemahaman Islam yang kaffah, Ma’had ini menjadikan masjid sebagai pusat kegiatan dan ruang belajar sebagai tempat utama pembinaan bagi santri dan masyarakat sekitar.
                </p>
                <div className='w-fit h-10 p-5 mt-5 border-white border-2 flex items-center justify-center text-white hover:bg-white hover:text-black transition'><p>Selengkapnya 👉</p></div>
            </div>
            <div>
                <img
                    src="/about-image.jpg"
                    alt="Example"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    )
}
