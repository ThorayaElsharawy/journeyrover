
const COUNTRIES = [
  {
    id: 1,
    name: 'France',
    color: 'red'
  },
  {
    id: 2,
    name: 'Spain',
    color: 'green'
  },
  {
    id: 3,
    name: 'United States',
    color: 'blue'
  },
  {
    id: 4,
    name: 'China',
    color: 'orange'
  },
  {
    id: 5,
    name: 'Italy',
    color: 'yellow'
  },
  {
    id: 6,
    name: 'Mexico',
    color: 'violet'
  },
  {
    id: 7,
    name: 'Thailand',
    color: 'red'
  },
]

// 'France', 'Spain', 'United States', 'China', 'Italy', 'Turkey', 'Mexico', 'Thailand', 'Germany'

export default function MostActiveCountries() {
  return (
    <div className="mt-5">
      <ul className=" flex flex-wrap items-center justify-center gap-10 text-xl">
        {COUNTRIES.map(country => (
          <li
            key={country.id}
            className="flex items-center"
            // style={{ color: country.color }}
            >
            <span className="w-2 h-2 rounded-full bg-[#f1764d] inline-block me-2" />
            {country.name}
          </li>
        ))}
      </ul>

    </div>
  )
}
