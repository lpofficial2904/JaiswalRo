import novo from "../assets/products/novo-smart-ro.png";
import aiqua from "../assets/products/aiqua-organic-series.png";
import aquaalliteNext from "../assets/products/aquaallite-next-generation.png";
import aquaEra from "../assets/products/aqua-era-silk-blue.png";
import omega from "../assets/products/omega-plus-ro.png";
import lexter from "../assets/products/lexter-ro-alkaline-uv.png";
import nanshe from "../assets/products/nanshe-titanium.png";
import blueshell from "../assets/products/blueshell-xtreme.png";
import aquaalliteBlue from "../assets/products/aquaallite-blue.png";
import aquaWavePro from "../assets/products/aqua-wave-pro-new.jpeg";
import canixCopper from "../assets/products/canix-copper-ro.png";
import lextter from "../assets/products/lexterr-ro.png";

export const products = [
  {
    slug: "novo-smart-ro",
    name: "Novo Smart RO",
    price: "6,999",
    image: novo,
    description:
      "A dependable everyday purifier with smart indicators and multi-stage water care.",
    features: [
      "RO + UV + UF purification",
      "TDS, zinc, copper & alkaline support",
      "LED tank and purification indicators",
    ],
  },
  {
    slug: "aiqua-organic-series",
    name: "AiQua Organic Series",
    price: "5,499",
    image: aiqua,
    description:
      "A family-friendly purifier with alkaline and mineral enrichment for daily use.",
    features: [
      "RO + UV + UF multi-stage filtration",
      "Alkaline, zinc & copper enrichment",
      "Large storage tank for families",
    ],
  },
  {
    slug: "aquaallite-next-generation",
    name: "Aquaallite Next Generation",
    price: "5,999",
    image: aquaalliteNext,
    description:
      "Transparent modern design that makes each purification stage easy to understand.",
    features: [
      "RO, UV and UF purification",
      "Copper, alkaline and zinc cartridges",
      "1-year warranty included",
    ],
  },
  {
    slug: "aqua-era-silk-blue",
    name: "Aqua Era Silk Blue",
    price: "7,499",
    image: aquaEra,
    description:
      "A clean, compact purifier that combines reliable filtration with a sleek finish.",
    features: [
      "Multi-stage purification",
      "9-litre storage tank",
      "Slim, premium wall-mount design",
    ],
  },
  {
    slug: "omega-pro-plus",
    name: "Omega Pro+",
    price: "4,999",
    image: omega,
    description:
      "A feature-rich purifier built for homes that want an advanced multi-stage system.",
    features: [
      "7-stage water purification",
      "UV, alkaline, copper & zinc",
      "TDS controller and low power use",
    ],
  },
  {
    slug: "lexter-ro-alkaline-uv",
    name: "Lexter RO Alkaline UV",
    price: "8,499",
    image: lextter,
    description:
      "Three layers of RO, UV and alkaline protection in a compact home purifier.",
    features: [
      "RO + UV + alkaline protection",
      "Multi-stage filtration",
      "Compact design for home or office",
    ],
  },
  {
    slug: "nanshe-titanium",
    name: "Nanshe Titanium",
    price: "8,499",
    image: nanshe,
    description:
      "A minimal, modern wall-mounted purifier with helpful status indicators.",
    features: [
      "Modern compact purifier",
      "Power, purifying and tank-full indicators",
      "Easy water dispensing",
    ],
  },
  {
    slug: "blueshell-xtreme",
    name: "Blueshell Xtreme",
    price: "9,799",
    image: blueshell,
    description:
      "An efficient purifier with clear maintenance alerts and a refined finish.",
    features: [
      "5-stage advanced purification",
      "Timer and filter-change alerts",
      "High-flow, energy-efficient design",
    ],
  },
  {
    slug: "aquaallite-blue",
    name: "Aquaallite Blue",
    price: "4,999",
    image: aquaalliteBlue,
    description:
      "A visible-tank purifier designed to bring advanced filtration into everyday homes.",
    features: [
      "RO + UV + UF filtration",
      "Copper, zinc and alkaline stages",
      "Visible tank and water-level window",
    ],
  },
  {
    slug: "aqua-wave-pro",
    name: "Aqua Wave Pro",
    price: "6,499",
    image: aquaWavePro,
    description:
      "A modern transparent RO purifier with a high-capacity filtration system and bold blue finish.",
    features: [
      "Multi-stage RO water purification",
      "Visible filters and water-level indicator",
      "Large storage tank for daily family use",
    ],
  },
  {
    slug: "canix-copper-ro",
    name: "CANIX Copper RO",
    price: "7,499",
    image: canixCopper,
    description:
      "A premium black-and-copper purifier combining elegant design with reliable everyday water purification.",
    features: [
      "9-litre storage tank",
      "Smart power and purification indicators",
      "Premium black and copper finish",
    ],
  },
];

export const getProduct = (slug) =>
  products.find((product) => product.slug === slug);
