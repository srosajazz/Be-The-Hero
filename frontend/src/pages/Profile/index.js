import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongId");

    const history = useHistory();

    useEffect(() => {
        api
            .get("profile", {
                headers: { Authorization: ongId }
            })
            .then(response => {
                setIncidents(response.data);
            });
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert("Erro ao deletar o caso");
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push("/");
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, {ongName}</span>

                <Link to="/incidents/new" className="button">
                    Register new case
        </Link>

                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Registered cases</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASE:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{incident.description}</p>

                        <strong>VALUE:</strong>
                        <p>
                            {Intl.NumberFormat("en-us", {
                                style: "currency",
                                currency: "USA"
                            }).format(incident.value)}
                        </p>

                        <button
                            type="button"
                            onClick={() => handleDeleteIncident(incident.id)}
                        >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}