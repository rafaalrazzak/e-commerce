import Image from "next/image";

export default function Rating({text}) {
  return (
   <div className="inline-flex gap-1">
              <Image
                width={15}
                height={15}
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg"
                alt="rating"
              />
              <p>
               {text}
              </p>
            </div>
  )
}
