import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useRef } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring, animated} from '@react-spring/web';
import graphicDesignImages from '../../ts/data/GraphicDesignImages';


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
        <div id="graphic-design__gallery" className='sm:w-full mx-auto pswp-gallery image-grid__row px-2'>
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
