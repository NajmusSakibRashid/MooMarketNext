import '../style/banner.css'
const FarmBanner=({children,backgroundImage})=>{
    return(
        <div className="banner" style={{backgroundImage:`url("/best-seller/${backgroundImage}")`}}>
            <div className="title">
                {children}
            </div>
        </div>
    );
}
export default FarmBanner;