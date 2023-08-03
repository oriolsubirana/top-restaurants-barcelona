const fetchSingleRestaurant = (id: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60
            }
        })
        .then(res => res.json())
}

export default async function Restaurant({
    params: { id },
}: {
    params: { id: string }
}) {
    const restaurant = await fetchSingleRestaurant(id)
    return (
        <article>
            <h1>{restaurant.title}</h1>
            <p>{restaurant.body}</p>
        </article>
    )
}