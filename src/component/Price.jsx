const Price = () => {
  const composition_container_price = 'text-white bg-blue-100 p-[6.4vw]'
  const composition_h2 = 'tracking-[-0.01375rem]'
  const composition_price = 'tracking-[-0.025rem]'
  const composition_unit = 'leading-[162.5%] tracking-[-0.0125rem]'
  const composition_button = 'leading-[162.5%] tracking-[-0.0125rem] w-[100%] min-h-[3rem] rounded-[0.3125rem] bg-green-100'
  const utility_opacity = 'opacity-50'

  return (
    <>
      <article className={`container__price flow__price ${composition_container_price}`}>
        <h2 className={`${composition_h2}`}>
          Monthly Subscription
        </h2>
        <div className="container__pricing flow__pricing">
          <div className="content__pricing flow__content__pricing">
            <p className="pricing">
              <span className={`price ${composition_price}`}>$29</span> <span className={`unit ${composition_unit} ${utility_opacity}`}>per month</span> 
            </p>
            <p className={`unit ${composition_unit}`}>
              Full access for less than $1 a day
            </p>
          </div>
          <button className={`${composition_button}`}>
            Sign Up
          </button>
        </div>
      </article>
    </>
  )
}

export default Price
