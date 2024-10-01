import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useRef } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring, animated} from '@react-spring/web';

export const personalPiecePictures = {
    anime: {
        asset: "amine.jpg",
        width: 2000,
        height: 2000,
        alt: "Cat Character Design"
    },
    armbrost: {
        asset: "armb.jpg",
        width: 1868,
        height: 1501,
        alt: "Cat Character Design"
    },
    beach: {
        asset: "beachside.jpg",
        width: 3000,
        height: 2250,
        alt: "Cat Character Design"
    },
    crowne: {
        asset: "crowne.jpg",
        width: 1828,
        height: 2271,
        alt: "Cat Character Design"
    },
    valkyrie: {
        asset: "Kyrie.jpg",
        width: 1480,
        height: 2006,
        alt: "Cat Character Design"
    },
    marisa: {
        asset: "marisa.jpg",
        width: 497,
        height: 621,
        alt: "Cat Character Design"
    },
    reimu: {
        asset: "reimu.jpg",
        width: 1149,
        height: 1400,
        alt: "Cat Character Design"
    },
    starGuardian: {
        asset: "_star-guardian.jpg",
        width: 2388,
        height: 4000,
        alt: "Cat Character Design"
    },
    sunAndMoon: {
        asset: "sunandmoon.jpg",
        width: 2000,
        height: 2000,
        alt: "Cat Character Design"
    },
    moonlight: {
        asset: "witch-in-the-moonlight.jpg",
        width: 2144,
        height: 2733,
        alt: "Cat Character Design"
    },
}


const MiscDesignPager = (props: {index : number}) => {

    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: "#misc__gallery",
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
        <div id="misc__gallery" className='w-10*/12 mx-auto pswp-gallery image-grid__row px-2'>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.moonlight} style={spring} />

           </div>
           <div className='image-grid__column'>
                    <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.reimu} style={spring} />
                <div className='flex flex-row gap-2'>
                    <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.sunAndMoon} style={spring} />
                    <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.anime} style={spring} />
                </div>
           </div>
           <div className='image-grid__column'>
                <div className='flex flex-row gap-2'>
                <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.marisa} style={spring} />
                    <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.valkyrie} style={spring} />
                </div>
                <div className='flex flex-row gap-2'>
                    <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.starGuardian} style={spring} />
                    <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.crowne} style={spring} />
                </div>
           </div>
                <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.beach} style={spring} />
                <AnimatedImage sourceFolder={"misc"} data={personalPiecePictures.armbrost} style={spring} />
                </div>
        </div>
        </>
    )
}

export default MiscDesignPager;
