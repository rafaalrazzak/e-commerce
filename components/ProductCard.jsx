import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import Card from "./Card";
import Button from "./Button";

export default function ProductCard(props) {
  return (
    <Card color="blue" className="max-w-sm ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <div className="w-84 h-32  relative rounded-lg border-base shadow-base bg-white items-center justify-center overflow-hidden">
            <Image
              src={props.image}
              className="absolute object-contain px-4"
              alt={props.title}
              fill
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-extrabold line-clamp-2">
              {props.title}
            </h1>
          </div>
        </div>
        <div className="flex gap-3  w-full">
          <Button text={`$${props.price}`} color="pink" size="sm" />

          <Button
            text="Add to cart"
            icon={<ShoppingCartIcon className="w-5 h-5" />}
            color="yellow"
            className="flex gap-2 cursor-pointer text-sm"
            hover="pink"
            size="sm"
          />
        </div>
      </div>
    </Card>
  );
}
