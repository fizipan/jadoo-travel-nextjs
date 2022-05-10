import Image from 'next/image';

export default function IlustrationHero() {
  return (
    <div className="relative hidden h-[764px] w-[783px] pt-24 lg:block">
      <div className="absolute top-44 left-40 z-30 h-[95px] w-[137px]">
        <Image
          alt="plane"
          layout="responsive"
          width="100%"
          height="100%"
          src="/images/plane.png"
        />
      </div>
      <div className="absolute top-56 right-8 z-10 h-[95px] w-[137px]">
        <Image
          alt="plane"
          layout="responsive"
          width="100%"
          height="100%"
          src="/images/plane.png"
        />
      </div>
      <div className="relative z-20 -translate-x-16 transform">
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
