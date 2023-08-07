import Link from "next/link"

const fetchRestaurants = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export async function ListOfRestaurants() {
    const restaurants = await fetchRestaurants()

    return restaurants.slice(0, 5).map((restaurant: IRestaurant) => (
        <article key={restaurant.id}>
            <Link href={`/restaurants/${restaurant.id}`}>
                <h2>{restaurant.title}</h2>
                <p>{restaurant.body}</p>
            </Link>
        </article>
    ))
}