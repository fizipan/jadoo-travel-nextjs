import Image from 'next/image';

export default function IlustrationHero() {
  return (
    <div className="hidden lg:block w-[783px] h-[764px] pt-24 relative">
      <div className="absolute w-[137px] h-[95px] top-44 left-40 z-30">
        <Image
          alt="plane"
          layout="responsive"
          width="100%"
          height="100%"
          src="/images/plane.png"
        />
      </div>
      <div className="absolute w-[137px] h-[95px] top-56 right-8 z-10">
        <Image
          alt="plane"
          layout="responsive"
          width="100%"
          height="100%"
          src="/images/plane.png"
        />
      </div>
      <div className="relative z-20 transform -translate-x-16">
        <Image
          alt="hero traveller"
          priority
          layout="responsive"
          width="100%"
          height="100%"
          src="/images/hero-traveller.png"
        />
      </div>
    </div>
  );
}
