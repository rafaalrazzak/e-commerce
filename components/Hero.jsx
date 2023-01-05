import {
  QrCodeIcon,
  BanknotesIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import ActionHeroButton from "./ActionHeroButton";
import CategoryHeroButton from "./CategoryHeroButton";

export default function Hero() {
  const iconClass = "w-4 h-4 text-basePink";
  const iconCategoryClass =
    "w-12 h-12 bg-baseGreen rounded-lg p-1 text-white hover:border-base";

  return (
    <div className="bg-baseYellow -mx-12 px-12 pt-12">
      <div className="bg-white border-base rounded-lg px-4 py-2 items-center justify-center w-full">
        {/* START Action Button */}
        <div className="flex gap-4 justify-between divide-x-2 divide-black">
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
      <div className="bg-basePink  -mx-6 mt-6 px-12 py-3 rounded-t-lg border-t-base ">
        <div className="flex-wrap flex items-center justify-between">
          <CategoryHeroButton
            title="Pulsa & Tagihan"
            icon={<DevicePhoneMobileIcon className={iconCategoryClass} />}
          />
          <CategoryHeroButton
            title="Pulsa & Tagihan"
            icon={<DevicePhoneMobileIcon className={iconCategoryClass} />}
          />
          <CategoryHeroButton
            title="Pulsa & Tagihan"
            icon={<DevicePhoneMobileIcon className={iconCategoryClass} />}
          />
          <CategoryHeroButton
            title="Pulsa & Tagihan"
            icon={<DevicePhoneMobileIcon className={iconCategoryClass} />}
          />
        </div>
      </div>
      {/* End Content Button */}
    </div>
  );
}
