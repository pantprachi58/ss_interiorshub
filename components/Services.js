export default function Services() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<section id="services" class="service-section pt-100 pb-110 overflow-hidden tl-bg-color fade-wrapper">
            <div class="bg-shape" data-background="assets/img/shapes/service-bg-shape-1.png"></div>
            <div class="container">
                <div class="row section-heading-wrap fade-top">  
                    <div class="shape"><img src="assets/img/shapes/section-heading.png" alt="shape"></div>
                    <div class="col-lg-4 col-md-12">
                        <div class="section-heading mb-0">
                            <h4 class="sub-heading" data-text-animation="fade-in-right" data-split="char" data-duration="0.9" data-stagger="0.03">WHO We Are</h4>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="section-heading section-heading-2 mb-0">
                            <h2 class="section-title cursor-effect">Experience <span>the art of Interior</span> Design</h2>
                            <p class="mb-0">We specialize in transforming visions into reality. <br> Explore our portfolio of innovative architectural and interior design projects <br> crafted with precision.</p>
                            <a href="/contact" class="btn btn-primary mt-4" style="background-color: #1a1a1a; color: white; padding: 12px 30px; border-radius: 8px; border: none; cursor: pointer; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; font-size: 14px; text-decoration: none; display: inline-block;">
                              Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>` }} />
  );
}
