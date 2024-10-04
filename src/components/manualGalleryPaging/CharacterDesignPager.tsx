import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect, useRef } from 'react';

import 'photoswipe/photoswipe.css';
import './ImageGrid.css'

import AnimatedImage from './AnimatedImage'
import { useSpring, animated} from '@react-spring/web';

import charDesignImages from '../../ts/data/CharacterDesignImages';

const CharacterDesignPager = (props: {index : number}) => {

    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: "#char-design__gallery",
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
        <div id="char-design__gallery" className='sm:w-full md:w-10/12 mx-auto pswp-gallery image-grid__row sm:px-0 md:px-2 flex justify-between'>
           <div className='image-grid__column-double'>
                <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.ritual} style={spring} />
                <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.luka360} style={spring} />
                <div className='flex flex-row gap-2'>
                    <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.depparin} style={spring} />
                <AnimatedImage sourceFolder={"char-design"}data={charDesignImages.karinOld} style={spring} />
                </div>
           </div>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.luka} style={spring} />
                <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.cat} style={spring} />
                <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.sisters} style={spring} />
           </div>
           <div className='image-grid__column'>
                <AnimatedImage sourceFolder={"char-design"}data={charDesignImages.jumpTheGun} style={spring} />
                <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.cyberpsychosis} style={spring} />
                <div className='w-1/2'>
                    <AnimatedImage sourceFolder={"char-design"} data={charDesignImages.lanterns} style={spring} />
                </div>
           </div>
        </div>
        </>
    )
}

export default CharacterDesignPager;
