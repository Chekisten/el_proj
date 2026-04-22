'use client'

import { usePathname } from "next/navigation"

const CultureTours = () => {
    const pathname = usePathname()
    const countrySegment = pathname.split('/')[1]
    return (
        <>
        <h1><div>Раздел: {countrySegment}</div></h1>
        </>
    )
}


export default CultureTours