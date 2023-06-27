import '../style/side-bar.css'
import { motion } from "framer-motion"

const variants={
    closed:{x:-205,opacity:0},
    open:{x:0,opacity:1}
}

const SideBar = ({status}) => {
    return (
        <motion.div
            initial={{x:-205,opacity:0}}
            animate={status?'open':'closed'}
            variants={variants}
            class="side-bar"
            id="side-bar">
            <ol>
                <li>Home</li>
                <li>
                    Messages
                    <ol>
                        <li>
                            Friend 1
                            <ol>
                                <li>Message 1</li>
                                <li>Message 2</li>
                            </ol>
                        </li>
                        <li>Friend 2</li>
                        <li>Friend 3</li>
                    </ol>
                </li>
                <li>
                    Notifications
                    <ol>
                        <li>Notification 1</li>
                        <li>Notification 2</li>
                    </ol>
                </li>
                <li>Element1</li>
                <li>Element2</li>
                <li>Element3</li>
                <li>Element4</li>
            </ol>
        </motion.div>
    );
}
export default SideBar;