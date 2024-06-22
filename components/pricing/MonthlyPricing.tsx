import React from 'react'
import PriceCard from './PriceCard'
import { monthlyPrices } from '@/data'

export default function MonthlyPricing({priceType}:{priceType: string}) {
  return (
    <div className='grid md:grid-cols-3 gap-12 sm:grid-cols-1'>
        {monthlyPrices.map((monthlyPrice, i)=> <PriceCard key={i}  priceDetails={monthlyPrice} priceType={priceType}/>)}
    </div>
  )
}
