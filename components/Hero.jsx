import {
  QrCodeIcon,
  BanknotesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import ActionHeroButton from "./ActionHeroButton";

export default function Hero() {
  const iconClass = "w-4 h-4 text-basePink";

  return (
    <div className="bg-baseYellow -mx-12 px-12 py-12">
      <div className="bg-white border-base rounded-lg px-4 py-2 items-center justify-center w-full">
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
      </div>
    </div>
  );
}
