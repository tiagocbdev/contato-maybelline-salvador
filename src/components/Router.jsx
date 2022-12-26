import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Kiosk } from "./Kiosk";

const kiosks = [
    {
        name: "Aeroporto",
        address: {
            fullAddress:
                "Praça Gago Coutinho, S/N - São Cristóvão, Salvador - BA, 41510-045, Brasil",
            addressReference: "Área de Embarque",
            linkMaps: "https://goo.gl/maps/buHCCookrgGi4QxM7",
        },
    },
    {
        name: "Shopping da Bahia",
        address: {
            fullAddress:
                "Avenida Tancredo Neves, Caminho das Árvores - Salvador - Bahia, Brasil",
            addressReference: "Terceiro Piso",
            linkMaps: "https://goo.gl/maps/tqrFBHSaTiwFmMnV6",
        },
    },
    {
        name: "Shopping Barra",
        address: {
            fullAddress:
                "Av. Centenário, 2992 - Chame-Chame, Salvador - BA, 40149-900, Brasil",
            addressReference: "Terceiro Piso",
            linkMaps: "https://goo.gl/maps/J1LPkU55fHwGenz48",
        },
    },
    {
        name: "Shopping Paralela",
        address: {
            fullAddress:
                "Av. Luís Viana Filho, 8544 - Alphaville, Salvador - BA, 41730-101, Brasil",
            addressReference: "Primeiro Piso",
            linkMaps: "https://goo.gl/maps/m5yGc96GhaJKYazN8",
        },
    },
    {
        name: "Salvador",
        address: {
            fullAddress:
                "Av. Tancredo Neves, 3133 - Caminho das Árvores, Salvador - BA, 41820-021, Brasil",
            addressReference: "Primeiro Piso",
            linkMaps: "https://goo.gl/maps/sjkYTFEWuMAY5YEu9",
        },
    },
];

const sellers = [
    {
        name: "Érica",
        phone: "5571987587584",
        kiosk: "aeroporto",
        schedule: "08h - 16h",
        isWorking: true,
    },
    {
        name: "Iraildes",
        phone: "5571985382740",
        kiosk: "aeroporto",
        schedule: "11h - 19h",
        isWorking: true,
    },
    {
        name: "Beatriz",
        phone: "5571982296991",
        kiosk: "aeroporto",
        schedule: "14h - 22h",
        isWorking: true,
    },
    {
        name: "Luci",
        phone: "5571986519885",
        kiosk: "bahia",
        schedule: "14h - 22h",
        isWorking: true,
    },
    {
        name: "Camila",
        phone: "5571987870799",
        kiosk: "bahia",
        schedule: "12h - 20h",
        isWorking: true,
    },
    {
        name: "Letícia",
        phone: "5571996795750",
        kiosk: "bahia",
        schedule: "09h - 17h",
        isWorking: true,
    },
    {
        name: "Daniela",
        phone: "5571988247355",
        kiosk: "barra",
        schedule: "09h - 17h",
        isWorking: true,
    },
    {
        name: "Sandra",
        phone: "5571986937668",
        kiosk: "barra",
        schedule: "14h - 22h",
        isWorking: true,
    },
    {
        name: "Tânia",
        phone: "5571987555350",
        kiosk: "paralela",
        schedule: "14h - 22h",
        isWorking: true,
    },
    {
        name: "Jamile",
        phone: "5571993155528",
        kiosk: "paralela",
        schedule: "09h - 17h",
        isWorking: true,
    },
    {
        name: "Neide",
        phone: "5571999068313",
        kiosk: "salvador",
        schedule: "",
        isWorking: false,
    },
    {
        name: "Taís",
        phone: "5571988184971",
        kiosk: "salvador",
        schedule: "09h - 17h",
        isWorking: true,
    },
    {
        name: "Luana",
        phone: "5571984365765",
        kiosk: "salvador",
        schedule: "12h - 20h",
        isWorking: true,
    },
    {
        name: "Patrícia",
        phone: "5571992883870",
        kiosk: "salvador",
        schedule: "14h - 22h",
        isWorking: true,
    },
];

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/quiosque/:quiosqueName"
                    element={<Kiosk kiosks={kiosks} sellers={sellers} />}
                />
            </Route>
        </Routes>
    );
}
