export default function ActionHeroButton({ title, icon, content }) {
  return (
    <div className="flex flex-col gap-1 p-2 w-40">
      <div className="flex items-center gap-1 text-sm font-semibold text-slate-600">
        {icon}
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p className="text-black line-clamp-1 font-bold ">{content}</p>
    </div>
  );
}
