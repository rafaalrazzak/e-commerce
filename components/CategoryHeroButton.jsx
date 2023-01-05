export default function CategoryHeroButton({ title, icon }) {
  return (
    <button className="flex flex-col items-center w-24">
      {icon}
      <h1 className="text-sm line-clamp-2 text-center text-white font-medium">
        {title}
      </h1>
    </button>
  );
}
