export type AboutPageProps = {
  title: string;
  content: string;
  image?: {
    src: string;
  };
};

export const AboutPage = ({ title, content, image }: AboutPageProps) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            {image && <img src={image.src} alt="" className="img-fluid d-block mx-auto rounded-circle mb-4" />}
            <h4 className="widget-title">{title}</h4>
            <div className="content">{content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
