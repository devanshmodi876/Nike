import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../Components/Button"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >
          We Provide You 
          <span className="text-coral-red p-4">
             Super
          </span>
          <br />
          <span className="text-coral-red p-4">
            Quality 
          </span>Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovative,and a touch of elegence.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11 '>
          <Button label='Shop Now ' iconUrl={arrowRight}  />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe8"
          width={570}
          height={522}
          className="objects-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality