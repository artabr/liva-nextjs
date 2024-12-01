import Image from 'next/image';

export const AdvertisementWidget = () => {
  return (
    <div className="widget">
      <Image
        className="img-fluid"
        src="/images/promotion.png"
        width="318"
        height="329"
        alt=""
      />
    </div>
  );
};
