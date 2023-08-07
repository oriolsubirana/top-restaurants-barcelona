const fetchRestaurantName = (id: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60
            }
        })
        .then(res => res.json())
}

export default async function RestaurantsLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: {
        id: string
    }
}) {
    const restaurant = await fetchRestaurantName(params.id)
    return (
        <div>
            <small>Home &bull; Restaurants &bull; {restaurant.title}</small>
            {children}
        </div>
    )
}