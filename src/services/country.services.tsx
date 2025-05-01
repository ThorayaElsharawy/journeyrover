export const getCountryDetails = async (name: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json()
    return data
}