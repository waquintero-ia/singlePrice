const Description = () => {
  const container__description = 'text-white bg-blue-100 opacity-70'
  const composition_h2 = 'tracking-[-0.01375rem]'
  const composition_description = 'leading-[185.72%] tracking-[-0.010625rem]'
  return (
    <>
      <article className={`container__description ${container__description}`}>
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
