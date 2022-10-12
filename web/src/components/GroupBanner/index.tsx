interface GroupBannerProps {
  title: string;
  adsCount: number;
  bannerUrl: string;
}

export function GroupBanner({ title, adsCount, bannerUrl }: GroupBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anuncio(s)
        </span>
      </div>
    </a>
  );
}
