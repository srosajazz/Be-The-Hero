import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            state
        };

        try {
            const response = await api.post("ongs", data);

            alert(`Your ID to access: ${response.data.id}`);

            history.push("/");
        } catch (err) {
            console.log(err);
            alert("Registration error, try again.");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>
                        Join the platform and help people find the cases of your NGO
                    </p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        I have no registration
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="ONG Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="State"
                            style={{ width: 110 }}
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}