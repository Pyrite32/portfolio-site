import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useRef } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring, animated} from '@react-spring/web';

export const pixelArtImages = {
    alice: {
        asset: "alice.png",
        width: 336,
        height: 374,
        alt: "Cat Character Design"
    },
    cannon: {
        asset: "cannon.png",
        width: 213,
        height: 109,
        alt: "Cat Character Design"
    },
    cat: {
        asset: "cat.png",
        width: 363,
        height: 431,
        alt: "Cat Character Design"
    },
    chicken: {
        asset: "chicken.png",
        width: 350,
        height: 373,
        alt: "Cat Character Design"
    },
    explosion: {
        asset: "explosion.png",
        width: 610,
        height: 366,
        alt: "Cat Character Design"
    },
    laser: {
        asset: "laser.png",
        width: 218,
        height: 113,
        alt: "Cat Character Design"
    },
    mockup: {
        asset: "mockup.png",
        width: 586,
        height: 290,
        alt: "Cat Character Design"
    },
    rabbit: {
        asset: "rabbit.png",
        width: 313,
        height: 348,
        alt: "Cat Character Design"
    },
    reimu: {
        asset: "reimu.png",
        width: 244,
        height: 304,
        alt: "Cat Character Design"
    },
    rifle: {
        asset: "rifle.png",
        width: 183,
        height: 95,
        alt: "Cat Character Design"
    },
}


const PixelArtPager = (props: {index : number}) => {

    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: "#pixel-art__gallery",
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
        <div id="pixel-art__gallery" className='w-9/12 mx-auto pswp-gallery image-grid__row px-2'>
           <div className='image-grid__column-double'>
                <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.mockup} style={spring} />
                <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.explosion} style={spring} />
           </div>
           <div className='image-grid__column'>
                <div className='flex flex-row gap-2'>
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.rabbit} style={spring} />
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.alice} style={spring} />
                </div>
                <div className='flex flex-row gap-2'>
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.chicken} style={spring} />
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.cat} style={spring} />
                </div>
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.rifle} style={spring} />
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.cannon} style={spring} />   
           </div>
           <div className='image-grid__column'>
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.reimu} style={spring} />
                    <AnimatedImage sourceFolder={"pixel-art"} data={pixelArtImages.laser} style={spring} />
           </div>
        </div>
        </>
    )
}

export default PixelArtPager;
