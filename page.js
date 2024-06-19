import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white items-center h-[45vh] flex-col gap-4">
        <div className="font-bold text-5xl flex gap-3 justify-center items-center mt-8">BUY ME A TEA <span className="pb-5"><img src="cup.gif" width={55} alt="" /></span></div>
        <p>A crowd funding platform for creators. Get funded by your fans and followers.</p>
        <div>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>

          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>

      <div className="text-white container mx-auto">
        <h1 className="text-3xl text-center py-12 font-bold">Your Fans can buy you a TEA</h1>
        <div className="flex gap-5 justify-around text-center">
          <div className="item flex flex-col justify-center items-center">
            <img src="man.png" width={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to support you</p>
          </div>
          <div className="item flex flex-col justify-center items-center">
            <img src="coin.gif" width={88} alt="" />
            <p className="font-bold">Fans want to contribute</p>
            <p>Your fans are willing to contribute financially</p>
          </div>
          <div className="item flex flex-col justify-center items-center">
            <img src="group.gif" width={88} alt="" />
            <p className="font-bold">Fans want to collaborate</p>
            <p>Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-5 mt-7"></div>
    </>
  );
}
