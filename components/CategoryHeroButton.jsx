export default function CategoryHeroButton({ title, icon }) {
  return (
    <button className="flex w-24 flex-col items-center">
      {icon}
      <h1 className="text-center text-sm font-medium text-white line-clamp-2">
        {title}
      </h1>
    </button>
  );
}
