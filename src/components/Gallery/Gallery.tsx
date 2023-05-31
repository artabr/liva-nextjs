<section>
  <div className="container-fluid px-0">
    <div className="text-center">
      <h4 className="widget-title">My Gallery</h4>
    </div>
    <div className="row no-gutters">
      {{range .gallery}}
      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
        <a href="{{ .image | absURL}}" className="venobox" data-gall="gallery"><img className="img-fluid w-100"
                                                                                    src="{{ .image | absURL}}"
                                                                                    alt=""></a>
      </div>
      {{end}}
    </div>
  </div>
</section>
