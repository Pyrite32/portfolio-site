import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useRef } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring, animated} from '@react-spring/web';

export const graphicDesignImages = {
    ada1: {
        asset: "ada1.png",
        width: 850,
        height: 474,
        alt: "Cat Character Design"
    },
    ada2: {
        asset: "ada2.png",
        width: 1025,
        height: 585,
        alt: "Cat Character Design"
    },
    chromeclash1: {
        asset: "chromeclash.png",
        width: 888,
        height: 452,
        alt: "Cat Character Design"
    },
    chromeclash2: {
        asset: "chromeclash1.png",
        width: 1070,
        height: 580,
        alt: "Cat Character Design"
    },
    flyer: {
        asset: "flyer-design.png",
        width: 2550,
        height: 3300,
        alt: "Cat Character Design"
    },
    welderly: {
        asset: "welderly.png",
        width: 904,
        height: 620,
        alt: "Cat Character Design"
    },
}


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
        <div id="graphic-design__gallery" className='w-10*/12 mx-auto pswp-gallery image-grid__row px-2'>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"ui"} data={graphicDesignImages.chromeclash1} style={spring} />
                <AnimatedImage sourceFolder={"ui"} data={graphicDesignImages.chromeclash2} style={spring} />
           </div>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"ui"} data={graphicDesignImages.ada1} style={spring} />
                <AnimatedImage sourceFolder={"ui"} data={graphicDesignImages.ada2} style={spring} />
           </div>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"ui"} data={graphicDesignImages.flyer} style={spring} />
           </div>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"ui"} data={graphicDesignImages.welderly} style={spring} />
           </div>
        </div>
        </>
    )
}

export default GraphicDesignPager;
