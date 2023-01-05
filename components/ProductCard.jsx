import Image from "next/image";

import Card from "./Card";

export default function ProductCard(props) {
  return (
    <Card color={props.color || "blue"} size={props.size} shadow={false}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <div className="border-base relative -mx-[42px] -mt-6 h-32 w-64 overflow-hidden rounded-lg  bg-white">
            <Image
              src={props.image}
              className="object-cover px-4"
              alt={props.title}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <h1 className="text-xs font-medium line-clamp-2">{props.title}</h1>
            <h2 className="font-bold">${props.price}</h2>
            <div className="inline-flex gap-1 ">
              <Image
                width={15}
                height={15}
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg"
                alt="rating"
              />
              <p>
                {props.rating.rate} | Terjual {props.rating.count}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-3  w-full">
          <Button
            text="Add to cart"
            icon={<ShoppingCartIcon className="w-5 h-5" />}
            color="yellow"
            className="flex gap-2 cursor-pointer text-sm"
            hover="pink"
            size="sm"
          />
        </div> */}
      </div>
    </Card>
  );
}
