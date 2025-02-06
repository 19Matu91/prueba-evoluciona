import { useContext, useState } from "react"
import { ContactsContext } from "../contexts"

import "../styles/user_form.css"

export const CreateUser = () => {

    const { setData } = useContext(ContactsContext)

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        street: '',
        city: '',
        phone: '',
        website: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const parsedFormData = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            address: {
                city: formData.city,
                street: formData.street,
            },
            website: formData.website,
            phone: formData.phone,
        }

        setData(prev => [...prev, parsedFormData])
        setFormData({
            name: '',
            username: '',
            email: '',
            street: '',
            city: '',
            phone: '',
            website: '',
        })
    }

    const handkeChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return <div>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Nombre:</label>
            <input name="name" type="text" onChange={handkeChange} />
            <label htmlFor="username">Alias:</label>
            <input name="username" type="text" onChange={handkeChange} />
            <label htmlFor="email">Alias:</label>
            <input name="email" type="text" onChange={handkeChange} />
            <label htmlFor="street">Calle:</label>
            <input name="street" type="text" onChange={handkeChange} />
            <label htmlFor="city">Ciudad:</label>
            <input name="city" type="text" onChange={handkeChange} />
            <label htmlFor="phone">Numero de teléfono:</label>
            <input name="phone" type="tel" onChange={handkeChange} />
            <button type="submit" >
                guardar
            </button>
        </form>
    </div>
}