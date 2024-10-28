import { NextResponse } from "next/server";


interface Country {
    name: string,
    capital: string,
    iso2: string,
    iso3: string
}


let countriesArr: Country[] = [];

async function getCountries() {
    try {
        const res = await fetch(process.env.COUNTRY_API_URL!);
        const data = await res.json()
        countriesArr = data
        const validCountries = data.data.filter((country: Country ) => 
            country.capital && country.capital !== ""
        )
       countriesArr = validCountries
       return countriesArr        
    } catch (error) {
        console.error('Error fetching countries:', error)
        throw error
    }
}

export async function GET() {
    try {
        await getCountries()
        // console.log("Hit API route!")

        const randIndex = Math.floor(Math.random() * countriesArr.length)
        const correctCountry = countriesArr[randIndex]
        const wrongAnswers : string[] = []
        const wrongIndices = new Set([randIndex])
        

        while (wrongAnswers.length < 2) {
            const index = Math.floor(Math.random() * countriesArr.length)
            if (!wrongIndices.has(index)) {
                wrongAnswers.push(countriesArr[index].capital)
                wrongIndices.add(index)
            }
        }
        const answers = [...wrongAnswers, countriesArr[randIndex].capital].sort(() => Math.random() - 0.5)
        
        return NextResponse.json({
            country: correctCountry.name,
            answers: answers,
            correctAnswer: correctCountry.capital   
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to fetch data"},{status: 500})
    }
}
