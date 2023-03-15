import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
    return (
        <Marquee className="bg-green-dark text-dark-sandik py-2 flex" pauseOnHover={true} gradient={false} loop={17}>
            <span className="mx-8 text-dark-sandi">Marquee2 Item 1</span>
            <span className="mx-8 text-dark-sandi">Marquee2 Item 2</span>
            <span className="mx-8 text-dark-sandi">Marquee2 Item 3</span>
        </Marquee>

    )
}
