import React from "react"
import ContentLoader from "react-content-loader"

const LazyLoader = () => (
    <ContentLoader
        speed={1}
        width={300}
        height={168}
        viewBox="0 0 360 168"
        backgroundColor="#e4f1f1"
        foregroundColor="#d1eaea"
    >
        <rect x="169" y="35" rx="0" ry="0" width="158" height="22" />
        <rect x="171" y="81" rx="0" ry="0" width="109" height="24" />
        <rect x="169" y="140" rx="0" ry="0" width="190" height="22" />
        <rect x="15" y="30" rx="20" ry="20" width="132" height="138" />
        <rect x="337" y="33" rx="10" ry="10" width="6" height="6" />
        <rect x="337" y="42" rx="10" ry="10" width="6" height="6" />
        <rect x="337" y="51" rx="10" ry="10" width="6" height="6" />
    </ContentLoader>
)

export default LazyLoader