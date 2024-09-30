import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useRef } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import Image from './Image'
import { useSpring, animated} from '@react-spring/web';

export const charDesignImages = {
    cat: {
        asset: "cat-character-design-orig.jpg",
        width: 1080,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    cyberpsychosis: {
        asset: "cyberpsychosis-design.jpg",
        width: 1080,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    depparin: {
        asset: "depparin.jpg",
        width: 1080,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    jumpTheGun: {
        asset: "jump-the-gun-char.jpg",
        width: 1080,
        height: 810,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    karinOld: {
        asset: "karin-old.jpg",
        width: 1080,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    lanterns: {
        asset: "lanterns.jpg",
        width: 675,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    luka: {
        asset: "luka-character-design-orig.jpg",
        width: 1080,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    luka360: {
        asset: "luka-turnaround-360.jpg",
        width: 1920,
        height: 575,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    ritual: {
        asset: "ritual-character-designs.jpg",
        width: 1920,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
    sisters: {
        asset: "sisters-character-design-orig.jpg",
        width: 1080,
        height: 675,
        scale: 1.0,
        alt: "Cat Character Design"
    },
}

const AnimatedImage = animated(Image);

const GraphicDesignPager = (props: {index : number}) => {

    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: "#graphic-design__gallery",
            children: 'a',
            pswpModule: () => import('photoswipe'),
            spacing: 0.5, // 50% of viewport width
            wheelToZoom: true,
        })
        lightbox.init();

        return () => {
            lightbox?.destroy();
            lightbox = null;
        }
    }, []);

    return (
        <>
        <div id="graphic-design__gallery" className='w-10/12 mx-auto pswp-gallery image-grid__row px-2 flex justify-between'>
           <div className='image-grid__column-double'>
                <AnimatedImage data={charDesignImages.ritual} style={spring} />
                <AnimatedImage data={charDesignImages.luka360} style={spring} />
                <div className='flex flex-row'>
                    <AnimatedImage data={charDesignImages.depparin} style={spring} />
                    <AnimatedImage data={charDesignImages.sisters} style={spring} />
                </div>
           </div>
           <div className='image-grid__column'>
                <AnimatedImage data={charDesignImages.luka} style={spring} />
                <AnimatedImage data={charDesignImages.cat} style={spring} />
                <AnimatedImage data={charDesignImages.karinOld} style={spring} />

           </div>
           <div className='image-grid__column'>
                <AnimatedImage data={charDesignImages.jumpTheGun} style={spring} />
                <AnimatedImage data={charDesignImages.cyberpsychosis} style={spring} />
                <div className='w-1/2'>
                    <AnimatedImage data={charDesignImages.lanterns} style={spring} />
                </div>
           </div>
        </div>
        {/* <div className="w-full flex flex-row gap-3 max-h-full">
            <div className="flex flex-col w-fit gap-3">
                <img src={sourceOf(charDesignImages.catronTalloume)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt=""/>
                <img src={sourceOf(charDesignImages.lukaTalloume)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt=""/>
            </div>
            <div className="flex flex-col w-fit gap-3">
                <img src={sourceOf(charDesignImages.sistersTrio)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt=""/>
                <img src={sourceOf(charDesignImages.depparin)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt=""/>
            </div>
            <div className="flex flex-col w-fit gap-3">
                <img src={sourceOf(charDesignImages.lukaRig)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt=""/>
                <img src={sourceOf(charDesignImages.karinOriginal)} style={scaled(charDesignImages.catronTalloume, 0.5)} alt=""/>
                <img src={sourceOf(charDesignImages.ritualOfRuinLineup)} style={scaledXY(charDesignImages.catronTalloume, 0.43, 0.8)} alt=""/>
            </div>
        </div> */}
        </>
    )
}

export default GraphicDesignPager;
