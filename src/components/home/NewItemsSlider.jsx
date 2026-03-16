import KeenSlider from "../UI/KeenSlider";
import NftInfo from "../UI/NftInfo";
import Skeleton from "../UI/Skeleton";

function NewItemsSlider({ newItems }) {
  const skeletonCount = 4;

  return (
    <section id="section-items" className="no-bottom" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        </div>

        <KeenSlider
          slides={
            newItems.length > 0
              ? newItems.map((newItem) => (
                <div className="keen-slider__slide" key={newItem.id}>
                  <NftInfo nftCard={newItem} />
                </div>
              ))
              : Array(skeletonCount)
                .fill(0)
                .map((_, index) => (
                  <div className="keen-slider__slide" key={index}>
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Skeleton width="50px" height="50px" borderRadius="50%" />
                      </div>
                      <Skeleton width="100%" height="250px" />
                      <div className="nft__item_info">
                        <Skeleton width="120px" height="20px" />
                        <Skeleton width="80px" height="16px" />
                      </div>
                    </div>
                  </div>
                ))
          }
        />
      </div>
    </section>
  );
}

export default NewItemsSlider;
