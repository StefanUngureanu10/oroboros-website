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
    image: "/src/assets/merch_img/white_tshirt.jpg",
    link: "https://oroboros-crew.bandcamp.com/merch/t-shirt-2-andromorph",
  },
  {
    name: "Patch",
    price: "CHF 8",
    image: "/src/assets/merch_img/patch1.jpg",
    link: "https://oroboros-crew.bandcamp.com/merch/patch-1",
  },
  {
    name: "Cap",
    price: "CHF 18",
    image: "/src/assets/merch_img/cap_black.jpg",
    link: "https://oroboros-crew.bandcamp.com/merch/cap-1",
  },
  {
    name: "OROBOROS T-Shirt Logo",
    price: "CHF 20",
    image: "/src/assets/merch_img/black_tshirt.jpg",
    link: "https://oroboros-crew.bandcamp.com/merch/t-shirt-1-oroboros",
    soldOut: true,
  },
  {
    name: "OROBOROS T-Shirt Hermès",
    price: "CHF 20",
    image: "/src/assets/merch_img/hermes_tshirt.jpg",
    link: "https://oroboros-crew.bandcamp.com/merch/t-shirt-1-herm-s",
  },
  {
    name: "Sticker (3 pack)",
    price: "CHF 2",
    image: "/src/assets/merch_img/sticker1.jpg",
    link: "https://oroboros-crew.bandcamp.com/merch/sticker-1-3-pack",
  },
];