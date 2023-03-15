
import mainImg from "../../images/img1.svg"
import backImg from "../../images/backImg.svg"
import gardenImg from "../../images/garden.svg"
import lawnImg from "../../images/lawn.svg"
import vegesImg from "../../images/veges.svg"
import flowersImg from "../../images/flowers.svg"
import Footer from "~/shared/components/Footer";
import { motion } from "framer-motion"
import ParallaxBox from "~/shared/components/ParralaxBox";
import ServiceBox from '../../shared/components/ServiceBox/index';
import Carousel from "~/shared/components/Carousel";
import { Outlet } from "@remix-run/react"


export default function HomeRoute() {
    return (
        <div>

            <div className="-z-50 overflow-hidden flex flex-col md:flex-row max-w-screen">
                <div className="">
                    <ParallaxBox imgSrc={mainImg} />
                </div>
                <div className="text-green-dark w-full md:w-7/12 max-w-screen bg-green-main relative bg-bottom" style={{ backgroundImage: `url(${backImg})` }}>
                    <div className="px-20 py-32 z-50">
                        <motion.h1
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-6xl my-6">Piękno natury w twoim ogrodzie.</motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.55 }} className="text-xl my-10">OGRODNICTWO TRADYCYJNE WIECCY</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.6 }} className="text-lg">Ogrodnictwo Tradycyjne Wieccy to firma z ponad 100-letnim doświadczeniem w projektowaniu, tworzeniu i pielęgnacji pięknych ogrodów. </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.65 }} className="text-sm mt-20 font-area underline-left-to-right-inverted py-2 w-max cursor">ZOBACZ WIĘCEJ</motion.p>
                    </div>
                </div>
            </div>
            <div className=" p-24 bg-sandi">
                <Carousel />
            </div>
            <div>
                <ServiceBox imgSrc={gardenImg} imgSideLeft={true} bgColor="green-main" textColor="green-dark" title="Odkryj piękno swojego ogrodu z naszymi projektami ogrodów!" subtitle="Czy marzysz o pięknym, estetycznym ogrodzie, który będzie Twoim prywatnym rajem? Nasza firma specjalizuje się w projektowaniu i tworzeniu wymarzonych ogrodów. Zaufaj naszemu doświadczeniu i ciesz się pięknem natury w Twoim własnym ogrodzie." />
                <ServiceBox imgSrc={lawnImg} imgSideLeft={false} bgColor="green-dark" textColor="dark-sandi" title="Ożyw swój ogród z naszą usługą zakładania trawników!" subtitle="Zakładanie trawnika może być skomplikowane, ale nie z naszą pomocą. Pozwól nam stworzyć dla Ciebie piękny, zielony trawnik, który będzie dumą Twojego ogrodu." />
                <ServiceBox imgSrc={mainImg} imgSideLeft={true} bgColor="sandi" textColor="green-dark" title="Zdrowe, smaczne warzywa metodą tradycyjną" subtitle="Nie szukaj dalej, jeśli chcesz cieszyć się zdrowymi i smacznymi warzywami, które zostały uprawione tradycyjną metodą na oborniku w ziemi. W naszej ofercie znajdziesz ogórki gruntowe, pomidory, buraki, marchew, fasolkę szparagową, groch, czosnek, dynię i wiele innych pyszności, które zachwycą Twoje podniebienie. Nie używamy nawozów sztucznych, dlatego nasze warzywa mają niepowtarzalny smak jak z dawnych lat." />
                <ServiceBox imgSrc={flowersImg} imgSideLeft={false} bgColor="green-main" textColor="green-dark" title="Piękne i wyjątkowe kwiaty do dekoracji Twojego domu i ogrodu!" subtitle="Jeśli marzysz o kolorowym i pełnym życia ogrodzie, nasza oferta kwiatów ozdobnych jest dla Ciebie idealna. Oferujemy chryzantemy, surfinie, pelargonie, bratki i wiele innych pięknych kwiatów, które zachwycą Twoje zmysły. Ponadto, w naszym sklepie znajdziesz także kwiaty rabatowe i balkonowe, które idealnie nadają się do ozdabiania Twojego domu lub ogrodu. Odkryj piękno natury dzięki naszej ofercie kwiatów ozdobnych!" />
                <ServiceBox imgSrc={mainImg} imgSideLeft={true} bgColor="sandi" textColor="green-dark" title="Znajdź wszystko, czego potrzebujesz do swojego ogrodu w jednym miejscu!" subtitle="Nie trać czasu na szukanie różnych sklepów, aby zdobyć wszystkie potrzebne produkty do swojego ogrodu. W naszym sklepie oferujemy szeroki wybór bylin, drzew, krzewów ozdobnych oraz drzew i krzewów owocowych. Ponadto, w naszej ofercie znajdziesz również artykuły ogrodnicze, takie jak ziemia, nawozy, środki ochrony roślin, nasiona, cebule kwiatowe i wiele innych. Dzięki nam, Twoje ogrodnictwo stanie się łatwiejsze i bardziej przyjemne!" />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}


export function CatchBoundary({ error }: { error: Error }) {
    return (<div>
        Oh no 404
        <pre>{error.message}</pre>
    </div>)

}


export function ErrorBoundary({ error }: { error: Error }) {
    return (<div>
        Oh no something wrong
        <pre>{error.message}</pre>
    </div>)

}