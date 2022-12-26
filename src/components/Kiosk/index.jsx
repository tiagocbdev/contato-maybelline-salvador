import { NavLink, useParams } from "react-router-dom";

import { RiRoadMapLine } from "react-icons/ri";
import { IoIosReturnLeft, IoLogoWhatsapp } from "react-icons/io"

import "./style.scss";

export function Kiosk(props) {
    const { quiosqueName } = useParams();

    function identifyKiosk(kiosksList) {
        let kioskIdentified;

        kiosksList.map((kiosk) => {
            let nameLowerCase = kiosk.name.toLowerCase();

            if (nameLowerCase.includes(quiosqueName)) {
                kioskIdentified = kiosk;
            }
        });

        return kioskIdentified;
    }

    function identifySellers(sellersList) {
        let identifiedSellers = [];

        for (let seller of sellersList) {
            if (seller.kiosk.includes(quiosqueName)) {
                identifiedSellers.push(seller);
            }
        }

        return identifiedSellers;
    }

    let identifiedKiosk = identifyKiosk(props.kiosks);

    let identifiedSellers = identifySellers(props.sellers);

    return (
        <div className="kioskGrid">
            <div className="kioskContent">
                {identifiedKiosk ? (
                    <div className="kioskInformations">
                        <h1>Quiosque: {identifiedKiosk["name"]}</h1>
                        <h3>Endereço: {identifiedKiosk["address"]["fullAddress"]}</h3>
                        <h3>
                            Complemento: {identifiedKiosk["address"]["addressReference"]}
                        </h3>
                        <a href={identifiedKiosk["address"]["linkMaps"]} target="_blank">
                            <h3>
                                <RiRoadMapLine /> Link para o Google Maps
                            </h3>
                        </a>
                        <NavLink className="return" to="/">
                            <IoIosReturnLeft size={25} />
                            <p>
                                Voltar
                            </p>
                        </NavLink>
                    </div>
                ) : (
                    <h1>Informação não encontrada</h1>
                )}
            </div>
            <div className="sellersContent">
                <h2>Vendedoras:</h2>
                {identifiedSellers.map((seller) => {
                    return seller.isWorking ? (
                        <div key={seller.name} className="sellerInformations">
                            <h2 className="sellerName">
                                {seller.name}{" "}
                                <a href={`https://wa.me/${seller.phone}`} target="_blank">
                                    <IoLogoWhatsapp size={25} />
                                </a>
                            </h2>
                            <p className="sellerSchedule">Horário: {seller.schedule}</p>
                        </div>
                    ) : (
                        ""
                    );
                })}
            </div>
        </div>
    );
}
