import HeroBg from '../assets/herobg2.jpg'

const Hero = () => {
  return (
    <div className='text-white'>
        <img src = {HeroBg} alt="bg-img" className='w-full rounded-2xl h-[480px]
        object-center object-cover'/>


        <div>
            <button>Save for Later</button>
            <button>Watch Now</button>
        </div>
    </div>
  )
}

export default Hero
