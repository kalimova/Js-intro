import React from 'react'

const Card = ({setNum, el, setIsProduct}) => {
  return ( 
    <>
    <section
        // style={{
        //   background: isOpenDay
        //     ? " linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"
        //     : "linear-gradient(to bottom, #0033cc 0%, #333300 100%",
        // }}
        className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div
                // style={{
                //   background: isOpenDay
                //     ? "white"
                //     : "linear-gradient(to bottom, #0099cc 0%, #0066cc 100%)",
                // }}
                className="bg-white rounded-lg overflow-hidden mb-10"
              >
                <img
                  src={el.image}
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      {el.title}
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    {el.desc}
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    Add to Basket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card