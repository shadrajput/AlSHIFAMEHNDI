import React, { useState } from 'react';
import '../index.scss';

const Images = [
  {
    id: 1,
    img_1: "./images/cvl.jpg",
    img_2: "./images/figur.jpg"
  },
  {
    id: 2,
    img_1: "/images/bridal.jpg",
    img_2: "./images/cvl.jpg"
  },
  {
    id: 3,
    img_1: "./images/cvl.jpg",
    img_2: "/images/bridal.jpg"
  },
  {
    id: 4,
    img_1: "/images/bridal.jpg",
    img_2: "./images/cvl.jpg"
  },
  {
    id: 5,
    img_1: "./images/cvl.jpg",
    img_2: "./images/figur.jpg"
  },
  {
    id: 6,
    img_1: "/images/bridal.jpg",
    img_2: "./images/cvl.jpg"
  },
  {
    id: 7,
    img_1: "./images/cvl.jpg",
    img_2: "/images/bridal.jpg"
  },
  {
    id: 8,
    img_1: "/images/bridal.jpg",
    img_2: "./images/cvl.jpg"
  },

]


const Galary = () => {
  // const[More , setmore] = React.useState(false)
  const [items, setitems] = React.useState(Images)
  const [visible, setvisible] = React.useState(4)

  const VeiwMore = () => {
    setvisible((PrevValue) => PrevValue + 4)
  }


  return (
    <section className=" py-5 xl:py-10" id='Galary'>
      <div className='lg:mx-10 md:mx-10 sm:mx-0 xl:mx-20 services xl:h-full   ' >


        <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]   '>
          My Work
        </h1>
        <div className='flex justify-center   '>
          <div>
            <div className='space-y-0 flex flex-wrap gap-5 xl:w-[100%] max-w-[1200px] justify-center xl:justify-between py-5 lg:py-10 xl:space-y-0  '>
              {items.slice(0, visible).map((item, index) => {
                console.log(item, "item")
                return (
              <div className=' w-[120px] md:w-[150px] lg:w-[200px] xl:w-[280px] space-y-5 sm:space-x-0 sm:space-y-10 md:space-y-5 justify-center items-center xl:block  xl:space-x-0  xl:space-y-10 xl:py-5 '>
                <div className='flex justify-center'>
                  <img src={item.img_1} alt="" className='w-3/4 md:w-5/6  xl:w-[230px] xl:h-[200px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />
                </div>
                <div className='flex justify-center'>
                  <img src={item.img_2} alt="" className='w-3/4 md:w-5/6  xl:w-[230px] xl:h-[300px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }}
                  />
                </div>
              </div>
              )
              })}
              {/* <div className=' w-[300px] space-x-5  sm:space-x-12 flex justify-center items-center xl:block  xl:space-x-0  xl:space-y-10 xl:py-5 '>
                <div className='flex justify-center'>
                  <img src="./images/figur.jpg" alt="" className=' w-1/2 sm:w-1/3 md:w-1/2 xl:w-[230px] xl:h-[300px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />

                </div>
                <div className='flex justify-center'>
                  <img src="./images/bridal.jpg" alt="" className=' w-1/2 sm:w-1/3 md:w-1/2 xl:w-[230px] xl:h-[200px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />

                </div>
              </div>
              <div className=' w-[300px] space-x-5  sm:space-x-12 flex justify-center items-center xl:block  xl:space-x-0  xl:space-y-10 xl:py-5 '>
                <div className='flex justify-center'>
                  <img src="./images/cvl.jpg" alt="" className=' w-1/2 sm:w-1/3 md:w-1/2 xl:w-[230px] xl:h-[230px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />

                </div>
                <div className='flex justify-center'>
                  <img src="./images/bridal.jpg" alt="" className=' w-1/2 sm:w-1/3 md:w-1/2 xl:w-[230px] xl:h-[270px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />

                </div>
              </div>
              <div className=' w-[300px] space-x-5  sm:space-x-12 flex justify-center items-center xl:block  xl:space-x-0  xl:space-y-10 xl:py-5 '>
                <div className='flex justify-center'>
                  <img src="./images/cvl.jpg" alt="" className=' w-1/2 sm:w-1/3 md:w-1/2 xl:w-[230px] xl:h-[300px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />

                </div>
                <div className='flex justify-center'>
                  <img src="./images/bridal.jpg" alt="" className=' w-1/2 sm:w-1/3 md:w-1/2 xl:w-[230px] xl:h-[200px]  rounded-md hover:scale-110 duration-300'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} />

                </div>
              </div> */}
            </div>
            <div className='flex justify-center items-center py-5 xl:py-5 ' onClick={VeiwMore}>
              <button className='g-btn py-2 px-6 lg:px-8   rounded-full border-4 font-semibold border-[#571217] hover:text-[#e9dac7] text-[#571217] hover:font-semibold'>
                Veiw More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galary







