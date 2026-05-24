import Bg from '../assets/HomeBackrgound.webp' 

export default function Home() {
  return (
    <section 
      id="home" 
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center">
        <h1 className="font-display text-7xl text-bc-anti font-black tracking-wider uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Black Clover
        </h1>
        <p className="text-bc-text mt-4 text-lg max-w-md mx-auto font-medium">
          "Nunca desistir é a minha magia!"
        </p>
      </div>
    </section>
  )
}