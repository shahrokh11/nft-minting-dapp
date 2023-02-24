import React from 'react'
import { motion } from "framer-motion"

const Roadmap = () => {
    return (
        <div name="roadmap" className="h-screen text-white flex flex-col items-center justify-center space-y-10">
            <motion.div
                whileInView={{ scale: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ scale: 0 }}
                className='md:w-[800px] text-center'>
                <h2 className="text-5xl font-bold underline p-2">Roadmap</h2>
            </motion.div>
            <motion.div
                whileInView={{ scale: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ scale: 0 }}
                className='md:w-[800px] text-center'>
                <div className="flex items-center justify-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/266.png" alt="Pots"
                        className='w-[35px] h-[35px] rounded-full' />
                    <h2 className="text-3xl font-bold underline p-2">Phase 1</h2>
                </div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quisquam veniam in doloremque corporis commodi, nobis saepe quaerat sequi!</p>
            </motion.div>
            <motion.div
                whileInView={{ scale: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ scale: 0 }}
                className='md:w-[800px] text-center'>
                <div className="flex items-center justify-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/94.png" alt="Pots"
                        className='w-[35px] h-[35px] rounded-full' />
                    <h2 className="text-3xl font-bold underline p-2">Phase 2</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quisquam veniam in doloremque corporis commodi, nobis saepe quaerat sequi!</p>
            </motion.div>
            <motion.div
                whileInView={{ scale: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ scale: 0 }}
                className='md:w-[800px] text-center'>
                <div className="flex items-center justify-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/35.png" alt="Pots"
                        className='w-[35px] h-[35px] rounded-full' />
                    <h2 className="text-3xl font-bold underline p-2">Phase 3</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quisquam veniam in doloremque corporis commodi, nobis saepe quaerat sequi!</p>
            </motion.div>
            <motion.div
                whileInView={{ scale: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ scale: 0 }}
                className='md:w-[800px] text-center'>
                <div className="flex items-center justify-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/318.png" alt="Pots"
                        className='w-[35px] h-[35px] rounded-full' />
                    <h2 className="text-3xl font-bold underline p-2">Phase 4</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quisquam veniam in doloremque corporis commodi, nobis saepe quaerat sequi!</p>
            </motion.div>

        </div>
    )
}

export default Roadmap