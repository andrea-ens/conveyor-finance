import React, { FC } from 'react'

interface HeroSubProps {
  title: string
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {
  return (
    <section className="pt-36 pb-10 bg-background">
      <div className="container px-4 mx-auto">
        <p className="text-primary text-sm uppercase tracking-wide mb-3">
          conveyor.finance
        </p>
        <h1 className="text-white md:text-5xl text-4xl font-medium">{title}</h1>
      </div>
    </section>
  )
}

export default HeroSub
