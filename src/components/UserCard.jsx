import { useContext, useRef } from "react"
import "../styles/user_card.css"
import { ContactsContext } from "../contexts"

export const UserCard = ({ user, idx }) => {

    const { setData } = useContext(ContactsContext)

    const deleteContact = () => {
        setData(prev => {
            const copy = JSON.parse(JSON.stringify(prev))

            copy.splice(idx, 1)

            return copy
        })
    }

    const userInfoRef = useRef()

    const showData = () => {

        if (userInfoRef.current.classList.contains("open")) {
            userInfoRef.current.classList.remove("open")
        } else {
            userInfoRef.current.classList.add("open")
        }
    }

    return (<div className="userCard">
        <h2 onClick={showData}>{user.name}</h2>
        <div ref={userInfoRef} className="userInfo">
            <h3>{user.username}</h3>
            <ul>
                <li> Núnmero de teléfono: {user.phone}</li>
                <li> Email: {user.email}</li>
                <li> Website: {user.website}</li>
            </ul>
            <div className="address">
                <p>
                    Dirección <br />
                    Ciudad: {user.address.city}<br />
                    Calle: {user.address.street}
                </p>
            </div>
            <button onClick={deleteContact}>
                Borrar
            </button>
        </div>
    </div>)
}