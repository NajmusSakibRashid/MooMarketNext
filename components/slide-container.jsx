import { useEffect, useState } from "react";
import Post from "./post";
import { motion, useAnimationControls } from "framer-motion";

const postsToShow = (data, page) => {
    page = (page % data.length + data.length) % data.length
    if (page + 3 > data.length) {
        return [...data.slice(page), ...data.slice(0, page + 3 - data.length)]
    }
    else {
        return data.slice(page, page + 3)
    }
}

const SlideContainer = ({ children: data, page,collection }) => {
    const proxyControlLeft = useAnimationControls()
    const proxyControlRight = useAnimationControls()
    const control = useAnimationControls()
    const [prevPage, setPrevPage] = useState(0)
    useEffect(() => {
        if (page > prevPage) {
            control.set({ x: 280 })
            proxyControlLeft.set({x:0})
        }
        else if (page < prevPage) {
            proxyControlRight.set({ x: 0 })
            control.set({ x: -280 })
        }
        proxyControlLeft.start({x:-280})
        proxyControlRight.start({ x: 280 })
        control.start({ x: 0 })
        setPrevPage(page)
    }, [page])
    return (
        <div className="slide-container" style={{ position: "relative", display: 'flex', justifyContent: "space-around", overflow: "hidden" }}>
            {
                data ?
                    <>
                        {
                            postsToShow(data, page).map(record => {
                                return (
                                    <motion.div
                                        animate={control}
                                        transition={{ duration: .5 }}
                                    >
                                        <Post id={record.id} collection={collection}>
                                            {record}
                                        </Post>
                                    </motion.div>
                                )
                            })
                        }
                        <motion.div style={{ position: "absolute", left: 560 }}
                            initial={{x:280}}
                            animate={proxyControlRight}
                            transition={{ duration: .5 }}
                        >
                            <Post id={data[((page % data.length + data.length) % data.length + 3) % data.length].id} collection={collection}>
                                {data[((page % data.length + data.length) % data.length + 3) % data.length]}
                            </Post>
                        </motion.div>
                        <motion.div style={{ position: "absolute", left: 0 }}
                            initial={{x:-280}}
                            animate={proxyControlLeft}
                            transition={{ duration: .5 }}
                        >
                            <Post id={data[((page-1) % data.length + data.length) % data.length].id} collection={collection}>
                                {data[((page-1) % data.length + data.length) % data.length]}
                            </Post>
                        </motion.div>
                    </>
                    :
                    <>Loading...</>
            }
        </div>
    );
}
export default SlideContainer;