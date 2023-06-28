import '../style/banner.css'
const FarmBanner=({children,backgroundImage})=>{
    return(
        <div class="banner" style={{backgroundImage:`url("/best-seller/${backgroundImage}")`}}>
            <div class="title">
                {children}
            </div>
        </div>
    );
}
export default FarmBanner;