import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"
import Button from "../Components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" > 
          <span className="text-coral-red p-4">
             Special
          </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatables deals. From premier selections to incredible savings, we offer umparalleled value that sets us apart.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Navigate to a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest expectations. Your journy with us is nothing short of exceptional. </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='View Details' iconUrl={arrowRight} />
          <Button 
            label='Learn more'
            backgroundColor='bg-white'
            borderColor= 'border-slate-gray'
            text-color='text-slate-grey'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer