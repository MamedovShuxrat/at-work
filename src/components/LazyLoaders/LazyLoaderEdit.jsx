import React from "react"
import ContentLoader from "react-content-loader"

const LazyLoaderEdit = () => (
    <ContentLoader
        speed={1}
        width={1160}
        height={500}
        viewBox="0 0 1160 500"
        backgroundColor="#e4f1f1"
        foregroundColor="#d1eaea"

    >
        <rect x="365" y="62" rx="27" ry="27" width="680" height="435" />
        <rect x="7" y="65" rx="20" ry="20" width="281" height="427" />
    </ContentLoader>
)

export default LazyLoaderEdit