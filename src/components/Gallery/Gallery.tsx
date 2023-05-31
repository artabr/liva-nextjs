export type GalleryProps = {
  gallery: {
    id: string;
    imageURL: string;
  }[];
};

export const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <section>
      <div className="container-fluid px-0">
        <div className="text-center">
          <h4 className="widget-title">My Gallery</h4>
        </div>
        <div className="row no-gutters">
          {gallery.map((item) => (
            <div key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <a href={item.imageURL} className="venobox" data-gall="gallery">
                <img className="img-fluid w-100" src={item.imageURL} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
