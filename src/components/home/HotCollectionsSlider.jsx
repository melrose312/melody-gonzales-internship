import { Link } from "react-router-dom";
import KeenSlider from "../UI/KeenSlider";

function HotCollectionsSlider({ items }) {
  const skeletonCount = 4;

  return (
    <section id="section-collections" className="no-bottom" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        </div>

        <KeenSlider slides={
          items.length > 0 ? (
            items.map((item) => (
              <div className="keen-slider__slide" key={item.id}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to={`/item-details/${item.nftId}`}>
                      <img
                        src={item.nftImage}
                        className="lazy img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to={`/author/${item.authorId}`}>
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
              </div>
            ))
          ) : (
            Array(skeletonCount).fill(0).map((_, index) => (
              <div className="keen-slider__slide" key={index}>
                <div className="nft_coll">
                  <div className="nft_wrap skeleton-box"></div>
                  <div className="nft_coll_pp skeleton-box"></div>
                  <div className="nft_coll_info skeleton-box"></div>
                </div>
              </div>
            ))
          )
        } />
      </div>
    </section>
  );
}

export default HotCollectionsSlider;
