import {
  QrCodeIcon,
  BanknotesIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { IoPhonePortraitOutline, IoTicketOutline } from "react-icons/io5";
import ActionHeroButton from "./ActionHeroButton";
import CategoryHeroButton from "./CategoryHeroButton";

export default function Hero() {
  const iconClass = "w-4 h-4 text-basePink";
  const iconCategoryClass =
    "w-10 h-10 rounded-lg p-1 text-white hover:ring-2 hover:ring-black";

  return (
    <div className="-mx-4 bg-baseYellow px-4 pt-12">
      <div className="border-base w-full items-center justify-center rounded-lg bg-white px-4 py-2">
        {/* START Action Button */}
        <div className="flex justify-between gap-4 divide-x-2 divide-black">
          <ActionHeroButton
            title="Scan"
            icon={<QrCodeIcon className={iconClass} />}
            content="Bayar dengan QR-Code"
          />
          <ActionHeroButton
            title="Pay-ah"
            icon={<BanknotesIcon className={iconClass} />}
            content="$123"
          />
          <ActionHeroButton
            title="Location"
            icon={<MapPinIcon className={iconClass} />}
            content="Jl. Aja dulu Desa Konoha, RT.06 RW. 66"
          />
        </div>
        {/* END Action Button */}
      </div>

      {/* START Content Button */}
      <div className="-mx-4 mt-6 rounded-t-lg bg-basePink py-3 ring-2 ring-black">
        <div className="flex flex-wrap justify-between">
          <CategoryHeroButton
            title="Kategori"
            icon={
              <img
                src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png"
                className={iconCategoryClass}
              />
            }
          />
          <CategoryHeroButton
            title="Handphone & Tablet"
            icon={
              <img
                src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/a809e96e-3c18-4e63-ac83-8deb9b4c1b1c.png"
                className={iconCategoryClass}
              />
            }
          />
          <CategoryHeroButton
            title="Top-Up & Tagihan"
            icon={
              <img
                src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png"
                className={iconCategoryClass}
              />
            }
          />
          <CategoryHeroButton
            title="Komputer & Laptop"
            icon={
              <img
                src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png"
                className={iconCategoryClass}
              />
            }
          />
        </div>
      </div>
      {/* End Content Button */}
    </div>
  );
}
