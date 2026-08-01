import { motion } from "framer-motion";

export default function Loading() {

    return (

        <motion.div

            className="loading"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

        >

            <h1>

                Initializing Surprise...

            </h1>

            <div className="loader"/>

        </motion.div>

    );

}