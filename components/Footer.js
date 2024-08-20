import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='min-h-screen mx-auto'>
            <div className=" items-center ">
                <div className="max-w-6xl mx-auto mt-24 xl:mt-28 md:pl-10 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-3xl mt-24 md:text-4xl font-bold font-poppins">
                        <i>Your <span className="text-purple">Hobby,</span> Your <span className="text-blue">Community...</span></i>
                    </h1>
                    <button className='justify-start items-start mt-11 bg-purple w-fit rounded-lg text-white py-2 px-4 font-semibold text-xl'>
                        Get started
                    </button>

                    <div className="flex justify-center md:justify-start mt-6 md:mt-10">
                        <Image
                            src="/footer.png"
                            alt="Hobby Illustrations"
                            priority
                            width={1204}
                            height={302}
                            quality={100}
                            objectFit="contain"
                            className="w-3/4 md:w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="md:space-y-2 space-y-4 text-sm text-footer-text">
                        <p className="text-sm font-bold leading-4 mb-4 tracking-wide text-footer-text">Hobbycue</p>
                        <p className="mr-1">About</p>
                        <p className="mr-1 ">Our Services</p>
                        <p className="mr-1 ">Work with Us</p>
                        <p className="mr-1 ">FAQ</p>
                        <p className="mr-1 ">Contact Us</p>
                    </div>

                    <div className="md:space-y-2 space-y-4 text-sm text-footer-text">
                        <p className="text-sm font-bold leading-4 mb-4 tracking-wide text-footer-text">How Do I</p>
                        <p className="mr-1">Sign Up</p>
                        <p className="mr-1 ">Add a Listing</p>
                        <p className="mr-1 ">Claim Listing</p>
                        <p className="mr-1 ">Post a Query</p>
                        <p className="mr-1 ">Add a Blog Post</p>
                        <p className="mr-1 ">Other Queries</p>
                    </div>

                    <div className="md:space-y-2 space-y-4 text-sm text-footer-text">
                        <p className="text-sm font-bold leading-4 mb-4 tracking-wide text-footer-text">Quick Links</p>
                        <p className="mr-1">Listings</p>
                        <p className="mr-1 ">Blog Posts</p>
                        <p className="mr-1 ">Shop / Store</p>
                        <p className="mr-1 ">Community</p>
                    </div>


                    <div>
                        <span className="text-sm font-bold leading-4 tracking-wide text-footer-text">Social Media</span>
                        <div className="flex mt-4 items-center space-x-3">
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-facebook.png'} width={16} height={16} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-twitter.png'} width={16} height={13} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-instagram.png'} width={16} height={13} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/pinterest.png'} width={16} height={13} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-google.png'} width={16} height={16} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-youtube.png'} width={16} height={16} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-telegram.png'} width={16} height={16} />
                            </Link>
                            <Link href={'/'} className="bg-gray p-1 rounded-full transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <Image src={'/footer-mail.png'} width={16} height={16} />
                            </Link>
                        </div>


                        <form className='py-5 relative'>
                            <label className="text-sm font-bold leading-4 tracking-wide text-footer-text">
                                Invite Friends
                            </label>
                            <div className="relative mt-2">
                                <input
                                    className='border border-purple rounded-lg px-4 py-2 placeholder:text-xs placeholder:font-normal w-full pr-16'
                                    placeholder='Email ID'
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 bottom-0 bg-purple text-white font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Invite
                                </button>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
            <div className="flex flex-col-reverse items-center justify-center pt-5 pb-10 w-full bg-pink-light lg:flex-row">
                <p className="text-xs font-medium items-center text-black">
                    © Purple Cues Private Limited
                </p>
            </div>
        </div>
    )
}

export default Footer