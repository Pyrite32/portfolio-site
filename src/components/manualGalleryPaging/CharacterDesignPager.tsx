export const charDesignImages = {
    catronTalloume: {
        asset: "cat-character-design-orig.jpg",
        width: 1080,
        height: 675,
        alt: "Cat Character Design"
    },
    cyberpsychosis: {
        asset: "cyberpsychosis-design.jpg",
        width: 1080,
        height: 675,
        alt: "Cat Character Design"
    },
    depparin: {
        asset: "depparin.jpg",
        width: 1080,
        height: 675,
        alt: "Cat Character Design"
    },
    jumpTheGun: {
        asset: "jump-the-gun-char.jpg",
        width: 1080,
        height: 810,
        alt: "Cat Character Design"
    },
    karinOriginal: {
        asset: "karin-old.jpg",
        width: 1080,
        height: 675,
        alt: "Cat Character Design"
    },
    lanterns: {
        asset: "lanterns.jpg",
        width: 675,
        height: 675,
        alt: "Cat Character Design"
    },
    lukaTalloume: {
        asset: "luka-character-design-orig.jpg",
        width: 1080,
        height: 675,
        alt: "Cat Character Design"
    },
    lukaRig: {
        asset: "luka-turnaround-360.jpg",
        width: 1920,
        height: 575,
        alt: "Cat Character Design"
    },
    ritualOfRuinLineup: {
        asset: "ritual-character-designs.jpg",
        width: 1920,
        height: 675,
        alt: "Cat Character Design"
    },
    sistersTrio: {
        asset: "sisters-character-design-orig.jpg",
        width: 1080,
        height: 675,
        alt: "Cat Character Design"
    },
}

interface ImageData {
    asset: string,
    width: number,
    height: number,
    alt: string
}

const sourceOf = (data: ImageData) => {
    return `art-gallery/char-design/${data.asset}`
}

const scaled = (data: ImageData, scaleXY: number) => {
    return { maxWidth: (data.width * scaleXY), maxHeight: (data.height * scaleXY)}
}

const scaledXY = (data: ImageData, scaleX: number, scaleY: number) => {
    return { maxWidth: (data.width * scaleX), maxHeight: (data.height * scaleY)}
}

const CharacterDesignPager = (props: {index : number}) => {
    return (
        <>
        <div className="w-full flex flex-row gap-3 max-h-full">
            <div className="flex flex-col w-fit gap-3">
                <img src={sourceOf(charDesignImages.catronTalloume)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt="" />
                <img src={sourceOf(charDesignImages.lukaTalloume)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt="" />
            </div>
            <div className="flex flex-col w-fit gap-3">
                <img src={sourceOf(charDesignImages.sistersTrio)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt="" />
                <img src={sourceOf(charDesignImages.depparin)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt="" />
            </div>
            <div className="flex flex-col w-fit gap-3">
                <img src={sourceOf(charDesignImages.lukaRig)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt="" />
                <img src={sourceOf(charDesignImages.karinOriginal)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt="" />
                <img src={sourceOf(charDesignImages.ritualOfRuinLineup)} style={scaledXY(charDesignImages.catronTalloume, 0.43, 0.8)} alt="" />
            </div>
        </div>
        </>
    )
}

export default CharacterDesignPager;
