import PostHeader from "./post-header";
import PostContainer from "./post-container";
import SlideContainer from "./slide-container";

const Fragment = ({children,imageSrc,title,collection}) => {
    return (
        <>
            <PostHeader imageSrc={imageSrc}>{title}</PostHeader>
            <PostContainer>
                {
                    (page) => {
                        return (
                            <SlideContainer page={page} collection={collection}>
                                {children}
                            </SlideContainer>
                        )
                    }
                }
            </PostContainer>
        </>
    );
}
export default Fragment;