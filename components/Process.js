const processData = [
  {
    id: "01",
    title: "Mosaic Tiles",
    image: "assets/images/MOSIAC TILES/1.png",
    desc: "Premium mosaic tiles in glass, ceramic, stone, and metal finishes that add elegance, texture, and artistic appeal to walls and floors.",
  },
  {
    id: "02",
    title: "Fluted Panels",
    image: "assets/images/FLUTED/1.png",
    desc: "Modern fluted wall panels with stylish linear textures, perfect for creating sophisticated accent walls and enhancing interior aesthetics.",
  },
  {
    id: "03",
    title: "Wallpapers & PVC Panels",
    image: "assets/images/wallpaper.jpeg",
    desc: "Imported wallpapers, 3D PVC wall panels, and textured coverings that instantly upgrade your space.",
  },
  {
    id: "04",
    title: "PVC Flooring",
    image: "assets/images/312.140/pvc panel.png",
    desc: " Elegant, durable, and low-maintenance flooring options perfect for homes, offices, and commercial areas.",
  },
];

export default function Process() {
  return (
    <section className="process-section overflow-hidden fade-wrapper">
      <div
        className="bg-shape"
        data-background="assets/img/shapes/process-shape-1.png"
      ></div>

      <div className="container container-2">
        <div className="heading-space align-items-end">
          <div className="section-heading mb-0">
            <h4
              className="sub-heading"
              data-text-animation="fade-in-right"
              data-split="char"
              data-duration="0.9"
              data-stagger="0.03"
            >
              How We Work
            </h4>

            <h2 className="section-title cursor-effect title-2">
             We offer a wide range of <br/>
             personalized home decor<br/> services and products, <br/>
             including
            </h2>
          </div>
        </div>

        <div className="row gy-xl-0 gy-4 process-wrap fade-wrapper">
          {processData.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-6 col-md-6"
            >
              <div className="process-item fade-top">
                <div className="process-thumb">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="process-content">
                  <h3 className="title">
                    <span>{item.id}</span>. {item.title}
                  </h3>

                  <p>{item.desc}</p>
                </div>

                <span className="number">{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}