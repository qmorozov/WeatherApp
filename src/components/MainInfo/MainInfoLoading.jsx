import ContentLoader from "react-content-loader"

import style from './MainInfoLoading.module.scss';

const MainInfoLoading = (props) => (
    <ContentLoader
        speed={2}
        className={style.svg}
        backgroundColor="rgba(0, 0, 0, 0)"
        backdropfilter="blur(20px)"
        foregroundColor="var(--main-loading)"
        {...props}
        >
        <rect x="2" y="3" rx="5" ry="5" width="159" height="170" />
        <circle cx="186" cy="26" r="22" />
        <rect x="208" y="55" rx="5" ry="5" width="258" height="82" />
        <rect x="207" y="146" rx="5" ry="5" width="258" height="28" />
        <rect x="487" y="39" rx="5" ry="5" width="100" height="100" />
        <rect x="488" y="147" rx="5" ry="5" width="100" height="28" />
    </ContentLoader>
)

export default MainInfoLoading