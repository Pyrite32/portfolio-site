import { Photo } from "react-photo-album";

export const charDesign = [
    {
        asset: "cat-character-design-orig.png",
        width: 4000,
        height: 2500,
        alt: "Cat Character Design"
    },
    {
        asset: "cyberpsychosis-design.png",
        width: 3000,
        height: 1906,
        alt: "Cat Character Design"
    },
    {
        asset: "depparin.png",
        width: 2500,
        height: 1700,
        alt: "Cat Character Design"
    },
    {
        asset: "jump-the-gun-char.png",
        width: 1600,
        height: 1200,
        alt: "Cat Character Design"
    },
    {
        asset: "karin-old.png",
        width: 3000,
        height: 1943,
        alt: "Cat Character Design"
    },
    {
        asset: "lanterns.png",
        width: 643,
        height: 657,
        alt: "Cat Character Design"
    },
    {
        asset: "luka-character-design-orig.png",
        width: 4000,
        height: 2500,
        alt: "Cat Character Design"
    },
    {
        asset: "luka-turnaround-360.png",
        width: 4468,
        height: 1250,
        alt: "Cat Character Design"
    },
    {
        asset: "ritual-character-designs.png",
        width: 1920,
        height: 689,
        alt: "Cat Character Design"
    },
    {
        asset: "sisters-character-design-orig.png",
        width: 4000,
        height: 2500,
        alt: "Cat Character Design"
    },
].map(
    ({asset, alt, width, height}) => 
        ({
            src: `../assets/art-gallery/char-design/${asset}`,
            alt,
            width,
            height
    }) as Photo,
);

export const pixelArt = [
    {
        asset: "alice.png",
        width: 336,
        height: 374,
        alt: "Cat Character Design"
    },
    {
        asset: "cannon.png",
        width: 213,
        height: 109,
        alt: "Cat Character Design"
    },
    {
        asset: "cat.png",
        width: 363,
        height: 431,
        alt: "Cat Character Design"
    },
    {
        asset: "chicken.png",
        width: 350,
        height: 373,
        alt: "Cat Character Design"
    },
    {
        asset: "explosion.png",
        width: 610,
        height: 366,
        alt: "Cat Character Design"
    },
    {
        asset: "laser.png",
        width: 218,
        height: 113,
        alt: "Cat Character Design"
    },
    {
        asset: "mockup.png",
        width: 586,
        height: 290,
        alt: "Cat Character Design"
    },
    {
        asset: "rabbit.png",
        width: 313,
        height: 348,
        alt: "Cat Character Design"
    },
    {
        asset: "reimu.png",
        width: 244,
        height: 304,
        alt: "Cat Character Design"
    },
    {
        asset: "rifle.png",
        width: 183,
        height: 95,
        alt: "Cat Character Design"
    },
].map(
    ({asset, alt, width, height}) => 
        ({
            src: `../assets/art-gallery/pixel-art/${asset}`,
            alt,
            width,
            height
    }) as Photo,
);

export const ui = [
    {
        asset: "ada1.png",
        width: 850,
        height: 474,
        alt: "Cat Character Design"
    },
    {
        asset: "ada2.png",
        width: 1025,
        height: 585,
        alt: "Cat Character Design"
    },
    {
        asset: "chromeclash.png",
        width: 888,
        height: 452,
        alt: "Cat Character Design"
    },
    {
        asset: "chromeclash1.png",
        width: 1070,
        height: 580,
        alt: "Cat Character Design"
    },
    {
        asset: "flyer-design.png",
        width: 2550,
        height: 3300,
        alt: "Cat Character Design"
    },
    {
        asset: "welderly.png",
        width: 904,
        height: 620,
        alt: "Cat Character Design"
    },
].map(
    ({asset, alt, width, height}) => 
        ({
            src: `../assets/art-gallery/ui/${asset}`,
            alt,
            width,
            height
    }) as Photo,
);

export const personalPieces = [
    {
        asset: "amine.png",
        width: 2000,
        height: 2000,
        alt: "Cat Character Design"
    },
    {
        asset: "armb.png",
        width: 1868,
        height: 1501,
        alt: "Cat Character Design"
    },
    {
        asset: "beachside.png",
        width: 3000,
        height: 2250,
        alt: "Cat Character Design"
    },
    {
        asset: "crowne.png",
        width: 1828,
        height: 2271,
        alt: "Cat Character Design"
    },
    {
        asset: "Kyrie.png",
        width: 1480,
        height: 2006,
        alt: "Cat Character Design"
    },
    {
        asset: "marisa.png",
        width: 497,
        height: 621,
        alt: "Cat Character Design"
    },
    {
        asset: "reimu.png",
        width: 1149,
        height: 1400,
        alt: "Cat Character Design"
    },
    {
        asset: "star-guardian.png",
        width: 2388,
        height: 4000,
        alt: "Cat Character Design"
    },
    {
        asset: "sunandmoon.png",
        width: 2000,
        height: 2000,
        alt: "Cat Character Design"
    },
    {
        asset: "witch-in-the-moonlight.png",
        width: 2144,
        height: 2733,
        alt: "Cat Character Design"
    },
].map(
    ({asset, alt, width, height}) => 
        ({
            src: `../assets/art-gallery/misc/${asset}`,
            alt,
            width,
            height
    }) as Photo,
);

export default {
    CharacterDesignPhotos : charDesign,
    PixelArtPhotos : pixelArt,
    UIPhotos : ui,
    PersonalPiecePhotos : personalPieces
}