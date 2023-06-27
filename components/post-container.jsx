import '../style/post-container.css'
import Image from 'next/image';
import { useState } from 'react';

const PostContainer = ({ children }) => {
    const [page,setPage]=useState(0)
    return (
        <>
            <div className="post-container">
                <button className="angle-left" onClick={()=>setPage(page=>page-1)}><Image src='/../public/Icons/angle-left.png' width={30} height={30} alt="left-angle"/></button>
                {children(page)}
                <button className="angle-right" onClick={()=>setPage(page=>page+1)}><Image src='/../public/Icons/angle-right.png' width={30} height={30} alt="right-angle"/></button>
            </div>
        </>
    );
}
export default PostContainer;