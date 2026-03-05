import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function HotCollectionsSlider({ items }) {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      1200: { items: 4 },
    },
  };

  const skeletonCount = 4;

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        </div>

        {items.length > 0 ? (
          <OwlCarousel className="owl-theme" key="loaded" {...options}>
            {items.map((item) => (
              <div className="nft_coll" key={item.id}>
                <div className="nft_wrap">
                  <Link to={`/item-details/${item.id}`}>
                    <img
                      src={item.nftImage}
                      className="lazy img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img
                      className="lazy pp-coll"
                      src={item.authorImage}
                      alt=""
                    />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{item.title}</h4>
                  </Link>
                  <span>ERC-{item.code}</span>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <OwlCarousel className="owl-theme" key="skeleton" {...options}>
            {Array(skeletonCount).fill(0).map((_, index) => (
              <div className="nft_coll" key={index}>
                <div className="nft_wrap skeleton-box"></div>
                <div className="nft_coll_pp skeleton-box"></div>
                <div className="nft_coll_info skeleton-box"></div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
}

export default HotCollectionsSlider;
