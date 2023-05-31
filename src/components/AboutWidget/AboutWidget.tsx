import { data } from '@/components/Sidebar/mockData';

export type AboutWidgetProps = {
  title?: string;
};

export const AboutWidget = (props: AboutWidgetProps) => {
  return (
    <div className="widget">
      <h4 className="widget-title">{data.aboutPage.title}</h4>
      {data.aboutPage.params.image && (
        <img
          src={data.aboutPage.params.image}
          alt=""
          className="img-fluid author-thumb-sm d-block mx-auto rounded-circle mb-4"
        />
      )}
      <p>{data.aboutPage.params.summary}</p>
      <a href={data.aboutPage.params.permalink} className="btn btn-outline-primary" type="button">
        Know More
      </a>
    </div>
  );
};
