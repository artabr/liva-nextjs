import { data } from '@/components/Sidebar/mockData';

export type AdvertisementWidgetProps = {
  title?: string;
};

export const AdvertisementWidget = (props: AdvertisementWidgetProps) => {
  return (
    <div className="widget">
      <img src={data.advertisementImage} alt="" className="img-fluid" />
    </div>
  );
};
