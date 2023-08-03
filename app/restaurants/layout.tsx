export default function RestaurantsLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div>
            <small>Home &bull; Restaurants</small>
            {children}
        </div>
    )
}