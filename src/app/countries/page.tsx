"use client"
import { fetchCountries } from '@/store/slices/countries-slice'
import { AppDispatch, RootState } from '@/store/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function page() {
    const countries = useSelector((state: RootState) => state.countries)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    console.log(countries);
    
    return (
        <div>page</div>
    )
}
