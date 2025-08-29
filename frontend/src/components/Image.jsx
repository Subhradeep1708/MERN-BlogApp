import { Image as IKImage } from '@imagekit/react';

const Image = ({ src, className, w, h, alt }) => {
    return (

        <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src={src}
            className={className}
            width={w}
            height={h}
            alt={alt}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
        />

    )
}

export default Image
