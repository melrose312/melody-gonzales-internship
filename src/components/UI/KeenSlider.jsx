import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function KeenSlider({ slides }) {
    const [loaded, setLoaded] = useState(false);

    const [slider, setSlider] = useKeenSlider({
        loop: true,
        slides: { perView: 1, spacing: 10 },
        breakpoints: {
            "(min-width: 576px)": { slides: { perView: 2, spacing: 10 } },
            "(min-width: 768px)": { slides: { perView: 3, spacing: 10 } },
            "(min-width: 1200px)": { slides: { perView: 4, spacing: 10 } },
        },
        created() {
            setLoaded(true);
        },
    });
    // Keeps slide sizing consistent when slides(nftImage) scroll
    useEffect(() => {
        if (setSlider.current) {
            setSlider.current.update();
        }
    }, [slides, setSlider]);

    return (
        <div className="navigation-wrapper" style={{ position: "relative" }}>
            <div ref={slider} className="keen-slider">
                {slides}
            </div>

            {loaded && setSlider.current && (
                <>
                    <button
                        onClick={() => setSlider.current?.prev()}
                        className="arrow arrow--left"
                        aria-label="Previous slide"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "-20px",
                            transform: "translateY(-50%)",
                            background: "#ffffff",
                            border: "1px solid #ccc",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "18px",
                            zIndex: 10,
                        }}
                    >
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={() => setSlider.current?.next()}
                        className="arrow arrow--right"
                        aria-label="Next slide"
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "-20px",
                            transform: "translateY(-50%)",
                            background: "#ffffff",
                            border: "1px solid #ccc",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "18px",
                            zIndex: 10,
                        }}
                    >
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </>
            )}
        </div>
    );
}

export default KeenSlider;
