import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring} from '@react-spring/web';

import personalPiecePictures from '../../ts/data/MiscImages';


const MiscDesignPager = () => {

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
