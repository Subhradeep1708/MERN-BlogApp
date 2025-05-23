import React from 'react'
import { Image } from '@imagekit/react'


const Image = ({ src, className, w, h, alt }) => {
    return (

        < Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src={src}
            className={className}
            width={w}
            height={h}
            alt={alt}
            loading="lazy"
        />

    )
}

export default Image
