import React, { useState } from 'react'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import MoonLoader from "react-spinners/MoonLoader"
import { motion } from "framer-motion"
import toast from "react-hot-toast";

const Hero = () => {
    const user = useAddress();
    const [count, setCount] = useState(1)
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT, "nft-drop")
    const { data: maxTotalSupply, isLoading: maxTotalSupplyLoading } = useContractRead(contract, "maxTotalSupply")
    const { data: totalMinted, isLoading: totalMintedLoading } = useContractRead(contract, "totalMinted")

    function handleIncrement() {
        setCount(count >= 5 ? 5 : count + 1);
    }

    function handleDecrement() {
        setCount(count <= 1 ? 1 : count - 1);
    }

    async function handleMint() {
        const notification = toast.loading("Minting Your NFTs...");
        if (user) {
            try {
                const tx = await contract.claimTo(user, count);
                console.info("contract call successs", tx);
                toast.success("Successfully minted your NFTs!", {
                    id: notification,
                });
            } catch (err) {
                toast.error(err.reason, {
                    id: notification,
                });
                console.error("contract call failure", err);
            }
        } else {
            toast.error("Connect Your Wallet First", {
                id: notification,
            });
        }

    }
    return (
        <div name="hero">
            <div className='h-screen text-white justify-center items-center flex'>
                <div className='hidden md:flex items-center w-screen mx-auto justify-between'>
                    <div className="ml-[100px]">
                        <motion.h1
                            whileInView={{ x: 0 }}
                            transition={{ type: "tween", duration: 1 }}
                            initial={{ x: -500 }}
                            className='text-7xl font-extrabold my-5'>
                            Are You Ready
                        </motion.h1>
                        <motion.h1
                            whileInView={{ x: 0 }}
                            transition={{ type: "tween", duration: 1 }}
                            initial={{ x: -500 }}
                            className='text-7xl font-extrabold my-5'>
                            To Enter the
                        </motion.h1>
                        <motion.h1
                            whileInView={{ x: 0 }}
                            transition={{ type: "tween", duration: 1 }}
                            initial={{ x: -500 }}
                            className='text-7xl font-extrabold my-5'>
                            World of Ducks?
                        </motion.h1>
                        <motion.h1
                            whileInView={{ x: 0 }}
                            transition={{ type: "tween", duration: 1 }}
                            initial={{ x: -500 }}
                            className='text-2xl font-thin mt-5 mb-2'>
                            Grab your Duck now:
                        </motion.h1>
                        <div className="flex py-2 space-x-5 items-center">
                            <svg onClick={handleDecrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 cursor-pointer">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-3xl">{count}</p>
                            <svg onClick={handleIncrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 cursor-pointer">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <button
                            onClick={handleMint}
                            className='bg-emerald-500 py-2 px-10 text-xl font-bold rounded-[5px] hover:bg-emerald-800 mb-3 mx-2'>Mint</button>
                    </div>


                    <div>
                        <motion.div
                            // animate={{ rotate: 1 }}
                            transition={{ type: "tween", duration: 1 }}
                            initial={{ scale: 0.2, rotate: 30 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            whileHover={{ scale: 0.7, rotate: 30 }}
                            className="flex">
                            <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/230.png" alt="NFT Image"
                                className='w-[350px] rounded-md mr-[100px]'
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0 }}
                            transition={{ type: "tween", duration: 1 }}
                            initial={{ x: -500 }}
                            className='text-4xl font-semibold mb-3 flex space-x-1 ml-[125px] mt-2'>
                            {totalMinted && !totalMintedLoading && maxTotalSupply && !maxTotalSupplyLoading ?
                                (<>
                                    <p>{totalMinted.toString()}</p>
                                    <p>/</p>
                                    <p>{maxTotalSupply.toString()}</p>
                                </>) :
                                <MoonLoader color="#36d7b7" size="25" />
                            }
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Section  */}
                <div className='flex flex-col md:hidden'>
                    <h1 className="text-3xl font-bold p-5">Are You Ready To Enter The World Of Pots?</h1>
                    <p className="text-xl font-thin p-5 text-center">Grab your pot now:</p>
                    <div className="flex justify-center">
                        <img src="https://bafybeib4qoidyknwvhs2qjkkcwn7jc5snkltr35sfdzidu3ngvybc23r34.ipfs.nftstorage.link/759.png" alt="NFT Image"
                            className='w-[250px] rounded-md'
                        />
                    </div>
                    <div className='text-2xl font-semibold mb-3 flex space-x-1 my-2 justify-center'>
                        {totalMinted && !totalMintedLoading && maxTotalSupply && !maxTotalSupplyLoading ?
                            (<>
                                <p>{totalMinted.toString()}</p>
                                <p>/</p>
                                <p>{maxTotalSupply.toString()}</p>
                            </>) :
                            <MoonLoader color="#36d7b7" size="25" />
                        }
                    </div>
                    <div className="flex py-2 space-x-5 items-center justify-center">
                        <svg onClick={handleDecrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 cursor-pointer">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-3xl">{count}</p>
                        <svg onClick={handleIncrement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 cursor-pointer">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={handleMint}
                            className='bg-emerald-500 py-2 px-10 text-xl font-bold rounded-[5px] hover:bg-emerald-800 mb-3 mx-2'>Mint</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero