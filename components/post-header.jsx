import Image from 'next/image';
import '../style/post-header.css'

const PostHeader = ({imageSrc,children}) => {
    return (
        <div className="post-container-header">
            <hr />
            <Image src={`/../public/Icons/${imageSrc}`} width={30} height={imageSrc=='popular.png'?40:30} alt="header image"/>
            <p>{children}</p>
            <hr />
        </div>
    );
}
export default PostHeader;