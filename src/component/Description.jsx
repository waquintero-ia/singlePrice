const Description = () => {
  const container__description = 'text-white bg-blue-100 opacity-70 pt-[6.4vw] pr-[29.34vw] pb-[6.4vw] pl-[6.4vw]'
  const container__description_xl = 'sm:p-[2.78vw]'
  const composition_h2 = 'tracking-[-0.01375rem] leading-[100%]'
  const composition_description = 'leading-[146%] tracking-[-0.010625rem]'
  return (
    <>
      <article className={`container__description flow__description__footer ${container__description} ${container__description_xl}`}>
        <h2 className={`${composition_h2}`}>
          Why Us
        </h2>
        <p className={`description ${composition_description}`}>
          Tutorials by industry experts
          Peer &amp; expert code review
          Coding exercises
          Access to our GitHub repos
          Community forum
          Flashcard decks
          New videos every week
        </p>
      </article>
    </>
  )
}

export default Description
