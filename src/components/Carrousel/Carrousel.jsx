//Importamos la librería de splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect, useState, useRef } from "react";

//Importamos intersection, el cual debe servir para que las fotos pasen automáticamente
import { Intersection } from '@splidejs/splide-extension-intersection';
import destinos from "./destinos.json"
import "../../styles/Carrousel/main.css"

const Carrousel = () => {

    const [destinations, setDestinations] = useState([]);

    const getDataAPI = async () => {
        const response = await fetch('https://api-node-viajes.vercel.app/destinations');
        const res = await response.json();
        setDestinations(res);
    }

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const interval = setInterval(() => {
                ref.current.splide.go('>');
            }, 3000);

            // Si necesitas detener el autoplay cuando el componente se desmonta,
            // puedes desactivar el intervalo aquí.
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {

        getDataAPI();
    }, []);

    const options = {
        type: "loop",
        perPage: 1,
        autoplay: "play",
        interval: 3000,
        pauseOnHover: false,
        rewind: true,
        rewindSpeed: 1500,
        arrows: false,
        intersection: {
            inView: {
                autoplay: true,
            },
            outView: {
                autoplay: true,
            },
        }
    }
    return (
        <>
            <div className="carrousel">

                <Splide ref={ref} tag="section" options={options} className="section_carrousel" >
                    {destinations.map((destination, i) => {
                        return (
                            <SplideSlide key={i}>
                                <article className="destination_card">
                                    <img src={destination.destinationImg[0]} alt="destinationimage" />
                                    <div className="destination_information">
                                        <span className="destination_name">{destination.destinationPlace}</span>
                                        <span className="destination_hotel">{destination.destinationHotel.hotelName}</span>
                                    </div>
                                </article>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </>
    )
}

export default Carrousel;