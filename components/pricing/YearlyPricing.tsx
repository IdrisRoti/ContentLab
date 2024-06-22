import { yearlyPrices } from '@/data'
import React from 'react'
import PriceCard from './PriceCard'

export default function YearlyPricing({priceType}:{priceType: string}) {
  return (
    <div className='grid md:grid-cols-3 gap-12 sm:grid-cols-1'>
        {yearlyPrices.map((yearlyPrice, i)=> <PriceCard key={i} priceDetails={yearlyPrice} priceType={priceType}/>)}
    </div>
  )
}
