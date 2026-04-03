import tshirt_andromorph from "../assets/merch_img/white_tshirt.jpg"
import patch1 from "../assets/merch_img/patch1.jpg"
import cap_black from "../assets/merch_img/cap_black.jpg"
import black_tshirt from "../assets/merch_img/black_tshirt.jpg"
import hermes_tshirt from "../assets/merch_img/hermes_tshirt.jpg"
import sticker1 from "../assets/merch_img/sticker1.jpg" 

export type MerchItem = {
  name: string;
  price: string;
  image: string;
  link: string;
  soldOut?: boolean;
};

export const merchItems: MerchItem[] = [
  {
    name: "OROBOROS T-Shirt Andromorph",
    price: "CHF 20",
    image: tshirt_andromorph,
    link: "https://oroboros-crew.bandcamp.com/merch/t-shirt-2-andromorph",
  },
  {
    name: "Patch",
    price: "CHF 8",
    image: patch1,
    link: "https://oroboros-crew.bandcamp.com/merch/patch-1",
  },
  {
    name: "Cap",
    price: "CHF 18",
    image: cap_black,
    link: "https://oroboros-crew.bandcamp.com/merch/cap-1",
  },
  {
    name: "OROBOROS T-Shirt Logo",
    price: "CHF 20",
    image: black_tshirt,
    link: "https://oroboros-crew.bandcamp.com/merch/t-shirt-1-oroboros",
    soldOut: true,
  },
  {
    name: "OROBOROS T-Shirt Hermès",
    price: "CHF 20",
    image: hermes_tshirt,
    link: "https://oroboros-crew.bandcamp.com/merch/t-shirt-1-herm-s",
  },
  {
    name: "Sticker (3 pack)",
    price: "CHF 2",
    image: sticker1,
    link: "https://oroboros-crew.bandcamp.com/merch/sticker-1-3-pack",
  },
];