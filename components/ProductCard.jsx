import Image from "next/image";

import Card from "./Card";

export default function ProductCard(props) {
  return (
    <Card
      color={props.color || "blue"}
      className="px-2"
      shadow={false}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <div className="relative -mx-[42px] -mt-6 bg-white w-64 h-32 rounded-lg border-base  overflow-hidden">
            <Image
              src={props.image}
              className="object-cover px-4"
              alt={props.title}
              fill
            />
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <h1 className="text-xs font-medium line-clamp-2">{props.title}</h1>
            <h2 className="font-bold">${props.price}</h2>
            <div className="inline-flex gap-1">
              <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg" />
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
