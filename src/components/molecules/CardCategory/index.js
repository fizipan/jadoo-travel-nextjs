export default function CardCategory(props) {
  const { children } = props;

  return (
    <div className="w-3/12 px-8">
      <div className="group relative flex flex-col items-center justify-center rounded-[36px] bg-white text-center shadow-none transition-all duration-300 hover:shadow-great">
        <div className="absolute bottom-12 left-12 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 rounded-tl-3xl rounded-br-lg bg-accent-2 opacity-0 transition-all duration-300 group-hover:bottom-6 group-hover:left-6 group-hover:opacity-100"></div>
        {children}
      </div>
    </div>
  );
}
