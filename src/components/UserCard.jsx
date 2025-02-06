import "../styles/user_card.css"

export const UserCard = ({ user }) => {
    return <div className="userCard">
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
        <p>Núnmero de teléfono: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
        <div className="address">
            <h4>Dirección</h4>
            <p>
                Ciudad: {user.address.city}<br />
                Calle: {user.address.street}
            </p>
        </div>
    </div>
}