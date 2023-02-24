import React from 'react'
import { motion } from "framer-motion"
const Team = () => {
    return (
        <div name="team" className="text-white md:h-screen">
            <h2 className="text-center text-4xl font-bold underline m-[100px] pt-100 md:p-0">Our Team</h2>
            <div className="hidden md:flex md:flex-row flex-col items-center justify-around mb-[50px] my-2">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/3441.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Mrshahiii</p>
                    <p>Founder, Duck</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/9699.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>James</p>
                    <p>Lead Design, Duck</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/3494.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Andrew</p>
                    <p>Blockchain Dev, Duck</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/949.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Diana</p>
                    <p>Lead Animator, Duck</p>
                </motion.div>

            </div>
            <div className="hidden md:flex md:flex-row flex-col items-center justify-around mb-[50px] my-2">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/479.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Emily</p>
                    <p>Marketing Manager, Duck</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/329.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Victoria</p>
                    <p>Discord Manager, Duck</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/529.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Gween</p>
                    <p>Front-End Dev, Duck</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/78.png" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Harry</p>
                    <p>Project Lead, Duck</p>
                </motion.div>

            </div>


            {/* Mobile View  */}
            <div className="md:hidden flex md:flex-row flex-col items-center justify-around space-y-5">
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/3441.png" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Mrshahiii</p>
                    <p>Founder, Duck</p>
                </motion.div>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/9699.png" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>James</p>
                    <p>Lead Design, Duck</p>
                </motion.div>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/3494.png" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Andrew</p>
                    <p>Blockchain Dev, Duck</p>
                </motion.div>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/949.png" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Diana</p>
                    <p>Lead Animator, Duck</p>
                </motion.div>
            </div>

        </div>
    )
}

export default Team