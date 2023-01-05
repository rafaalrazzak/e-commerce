export default function ActionHeroButton({ title, icon, content }) {
  return (
    <button className="flex w-40 flex-col gap-1 p-2">
      <div className="flex items-center gap-1 text-sm font-semibold text-slate-600">
        {icon}
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p className="font-bold text-black line-clamp-1 ">{content}</p>
    </button>
  );
}
