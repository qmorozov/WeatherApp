import ContentLoader from "react-content-loader"

import style from './MenuLoading.module.scss';

const MenuLoading = (props) => (
    <ContentLoader
        speed={2}
        className={style.svg}
        viewBox="0 0 400 460"
        backgroundColor="rgba(0, 0, 0, 0)"
        backdropfilter="blur(20px)"
        foregroundColor="var(--main-loading)"
        {...props}
    >
        <rect x="5" y="5" rx="5" ry="5" width="158" height="30" />
        <rect x="5" y="69" rx="5" ry="5" width="200" height="20" />
        <rect x="292" y="70" rx="5" ry="5" width="55" height="20" />
        <rect x="6" y="103" rx="5" ry="5" width="200" height="20" />
        <rect x="293" y="102" rx="5" ry="5" width="55" height="20" />
        <rect x="5" y="138" rx="5" ry="5" width="200" height="20" />
        <rect x="292" y="139" rx="5" ry="5" width="55" height="20" />
        <rect x="6" y="172" rx="5" ry="5" width="200" height="20" />
        <rect x="293" y="171" rx="5" ry="5" width="55" height="20" />
        <rect x="7" y="256" rx="5" ry="5" width="158" height="30" />
        <rect x="7" y="320" rx="5" ry="5" width="200" height="20" />
        <rect x="294" y="321" rx="5" ry="5" width="55" height="20" />
        <rect x="8" y="354" rx="5" ry="5" width="200" height="20" />
        <rect x="295" y="353" rx="5" ry="5" width="55" height="20" />
        <rect x="7" y="389" rx="5" ry="5" width="200" height="20" />
        <rect x="294" y="390" rx="5" ry="5" width="55" height="20" />
        <rect x="8" y="423" rx="5" ry="5" width="200" height="20" />
        <rect x="295" y="422" rx="5" ry="5" width="55" height="20" />
        <rect x="6" y="219" rx="2" ry="2" width="342" height="3" />
    </ContentLoader>
)

export default MenuLoading