const Title = () => {
  const composition_container_title = 'bg-white px-[6.4vw] pt-[7.47vw] pb-[8.54vw]'
  const composition_title = 'tracking-[-0.015625rem] text-blue-100 leading-[110%]'
  const composition_subtitle = 'leading-[133%] tracking-[-0.011875rem] text-green-100'
  const composition_description = 'leading-[187%] tracking-[-0.010625rem] text-grey-100'
  return (
    <>
      <article className={`container__title flow__title ${composition_container_title}`}>
        <h1 className={`title ${composition_title}`}>
          Join our community
        </h1>
        <div className="container__description flow__description">
          <p className={`subtitle ${composition_subtitle}`}>
            30-day, hassle-free money back guarantee
          </p>
          <p className={`description ${composition_description}`}>
            Gain access to our full library of tutorials along with expert code reviews. 
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>
      </article>
    </>
  )
}

export default Title
