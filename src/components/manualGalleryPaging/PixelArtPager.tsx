import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring} from '@react-spring/web';

import pixelArtImages from '../../ts/data/PixelArtImages';


const PixelArtPager = () => {

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
