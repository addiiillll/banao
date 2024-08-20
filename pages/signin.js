import Link from 'next/link';
import Image from 'next/image';

export default function SignIn() {
  return (
    <>
      <div className='min-h-screen mx-auto'>
        <div className="flex flex-col items-center bg-off-white md:flex-row md:justify-between">
          {/* Left Side */}
          <div className="md:w-1/2 mx-auto mt-24 xl:mt-28 md:pl-10 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins">
              <i>Explore your <i className="text-blue">hobby</i> or <span className="text-purple">passion</span></i>
            </h1>
            <p className="mt-4 md:mt-6 text-sm md:text-sm font-light leading-7 tracking-wide">
              Sign-in to interact with a community of fellow hobbyists and an ecosystem of experts, teachers, suppliers, classes, workshops, and places to practice, participate, or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
            </p>
            <p className="mt-4 md:mt-6 text-sm md:text-sm font-light leading-7 tracking-wide">
              If you are an expert or a seller, you can add your listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.
            </p>

            <div className="flex justify-center md:justify-start mt-6 md:mt-10">
              <Image
                src="/illustration.png"
                alt="Hobby Illustrations"
                priority
                width={700}
                height={200}
                quality={100}
                objectFit="contain"
                className="w-3/4 md:w-full"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 md:w-1/3 mt-16 xl:mt-0 mx-auto flex flex-col justify-center text-center md:text-left">
            <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-x-0 md:space-x-6">
              <Link href="#" className="text-purple leading-7 font-semibold border-b-2 border-purple pb-2">
                Sign In
              </Link>
              <Link href="#" className="text-gray-400 leading-7 font-semibold">
                Join In
              </Link>
            </div>

            <div className="mb-4 w-full md:w-[410px] h-[40px]">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center bg-continue">
                <Image src="/Google.png" alt="Google" width={20} height={20} />
                <span className="ml-2 font-semibold text-sm">Continue with Google</span>
              </button>
            </div>
            <div className="mb-4 w-full md:w-[410px] h-[40px]">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center bg-continue">
                <Image src="/Facebook.png" alt="Facebook" width={20} height={20} />
                <span className="ml-2 font-semibold text-sm">Continue with Facebook</span>
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-line"></div>
              <span className="mx-4 text-black text-xs font-semibold">Or connect with</span>
              <div className="flex-grow border-t border-line"></div>
            </div>

            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 px-4 placeholder:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 px-4 placeholder:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-purple-600" />
                  <span className="ml-2 text-sm font-normal">Remember me</span>
                </label>
                <Link href="#" className="text-sm flex flex-row hover:underline">
                  <Image src={'/Vector.png'} height={14} width={10} className='object-contain' />
                  <h2 className='ml-2'>Forgot password?</h2>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black border border-black"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FEATURE 1 */}
      <div className="container min-h-screen mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="block group hover:bg-purple hover:text-white rounded-xl border border-line px-6 py-8 md:px-10 md:py-11">
            <div className="flex items-center mb-4">
              <Image
                src={'/people.png'}
                width={40}
                height={40}
                className="object-contain group-hover:hidden"
              />
              <Image
                src={'/public white.png'}
                width={40}
                height={40}
                className="object-contain hidden group-hover:block"
              />

              <h2 className="ml-4 font-semibold text-lg md:text-xl">People</h2>
            </div>
            <p className="text-base font-light mt-3">
              Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
            </p>
            <button className="rounded-lg mt-6 px-6 py-2 text-sm text-purple border border-purple hover:bg-white hover:text-white font-semibold">Connect</button>
          </div>


          <div className="block group rounded-xl border hover:bg-green hover:text-white border-line px-6 py-8 md:px-10 md:py-11">
            <div className="flex items-center mb-4">
            <Image
                src={'/place.png'}
                width={40}
                height={40}
                className="object-contain group-hover:hidden"
              />
              <Image
                src={'/place white.png'}
                width={40}
                height={40}
                className="object-contain hidden group-hover:block"
              />
              <h2 className="ml-4 font-semibold text-lg md:text-xl">Place</h2>
            </div>
            <p className="text-base font-light mt-3">
              Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
            </p>
            <button className="rounded-lg mt-6 px-6 py-2 text-sm text-purple border border-purple font-semibold">Meet up</button>
          </div>

          <div className="block rounded-xl border border-line px-6 py-8 md:px-10 md:py-11">
            <div className="flex items-center mb-4">
              <Image src={'/product.png'} width={40} height={40} className='object-contain' />
              <h2 className="ml-4 font-semibold text-lg md:text-xl">Product</h2>
            </div>
            <p className="text-base font-light mt-3">
              Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
            </p>
            <button className="rounded-lg mt-6 px-6 py-2 text-sm text-purple border border-purple font-semibold">Get it</button>
          </div>

          <div className="block rounded-xl border border-line px-6 py-8 md:px-10 md:py-11">
            <div className="flex items-center mb-4">
              <Image src={'/program.png'} width={40} height={40} className='object-contain' />
              <h2 className="ml-4 font-semibold text-lg md:text-xl">Program</h2>
            </div>
            <p className="text-base font-light mt-3">
              Find events, meetups and workshops related to your hobby. Register or buy tickets online.
            </p>
            <button className="rounded-lg mt-6 px-6 py-2 text-sm text-purple border border-purple font-semibold">Attend</button>
          </div>
        </div>
      </div>

      {/* Add your own */}
      <div className='bg-blue-light p-20'>
        <div className="block rounded-lg border bg-white border-line px-6 py-8 md:px-10 md:py-11">
          <div className="flex items-center mb-4">
            <Image src={'/plus.png'} width={33} height={33} className='object-contain' />
            <h2 className="ml-4 font-semibold text-2xl md:text-xl">Add you own</h2>
          </div>
          <p className="text-base font-light mt-3">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>
          <button className="rounded-lg mt-6 px-6 py-2 text-sm text-purple border border-purple font-semibold">Add new</button>
        </div>
      </div>


      {/* Testimonials */}
      <div className="bg-[#f8f7fa] p-8 mt-24 rounded-lg w-full md:w-10/12 mx-auto">
        <h2 className="text-purple text-2xl mb-4">Testimonials</h2>

        <div className="mb-6">
          <p className="text-lg font-light text-testimonial leading-7">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycues.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycues community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center bg-purple-light rounded-lg p-5 mb-4 md:mb-0 w-full md:w-9/12">
            <button className="bg-white rounded-full w-10 h-9 flex items-center justify-center mr-8">
              <Image src={'/play.png'} width={24} height={24} className='object-contain' />
            </button>
            <Image src={'/playstatus.svg'} width={12} height={12} />
            <div className="flex ml-auto items-center w-10/12 bg-white h-1 rounded-full">
              <div className="flex-grow h-full bg-transparent"></div>
            </div>
            <h2 className="ml-3 text-xs font-normal text-purple">0:00</h2>
            <Image src={'/mic.png'} alt='Mic' width={40} height={50} className='left-5 top-3 relative' />
            <Image src={'/user.png'} alt="User" width={60} height={60} className="object-contain" />
          </div>

          <div className="flex items-center">
            <div className="ml-4">
              <div className="flex items-center mb-1">
                <Image src={'/dancer.png'} alt="GV" width={100} height={100} className="object-contain" />
                <div className="flex flex-col ml-3">
                  <h3 className="font-bold text-sm text-purple">Shubha Nagarajan</h3>
                  <p className="text-xs text-blue">Classical dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
