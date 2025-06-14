import Card from "./card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonal = () => {
    /** react‑slick responsive settings */
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280, // lg
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024, // md
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640, // sm
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className=" bg-zinc-200 " >
            <div className="w-[90vw] mx-auto py-10">
                <h1 className="text-3xl sm:text-4xl text-center font-semibold text-zinc-800">
                    Testimonials
                </h1>
                <p className="mt-2 text-base sm:text-lg text-center text-zinc-600">
                    Real stories. Genuine experiences.
                </p>

                <div className="mt-10">
                    <Slider {...settings}>
                        {/* Replace / map actual testimonials as needed */}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Slider>
                </div>
            </div>
        </section>
    );
};
