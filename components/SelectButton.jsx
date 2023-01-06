export default function SelectButton({title, ...props}){
	return (
			<div className="inline-flex items-center space-x-2">
				<input type="checkbox" className="rounded w-4 h-4 text-baseYellow focus:ring-0 focus:ring-offset-0 transition-color duration-300" {...props} />
				<p className="font-semibold">{title}</p>
			</div>
	);
}