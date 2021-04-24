import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import HotelFinder from '../apis/HotelFinder';
import { HotelsContext } from '../context/HotelsContext';


const UserPanel = (props) => {
    const history = useHistory();
    const location = useLocation();

    const {idClient} = useParams();
    const {selectedClient, setSelectedClient} = useContext(HotelsContext);
    const {selectedReservations, setSelectedReservations} = useContext(HotelsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = await HotelFinder.get(`/clients/${idClient}`);
                setSelectedClient(client.data.data);
                const reservations = await HotelFinder.get(`/clients/${idClient}/reservations`);
                setSelectedReservations(reservations.data.data.reservations);
            } catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const  handleDelete = async (e, id) => {
        try {
            const response = await HotelFinder.delete(`/reservations/${id}`);
            setSelectedReservations(selectedReservations.filter(reservation => {
                return reservation.id_rezerwacja !== id;
            }));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {selectedClient &&(
                <>
                    <h1 className="text-center display-2" style={{paddingBottom:"30px"}}>Panel Użytkownika</h1>
                    <div className="row">
                        <div className="col-4">
                            <table className="table caption-top table-secondary">
                                <caption>Dane użytkownika</caption>
                                <thead>
                                    <tr>
                                    <th scope="col">Imię</th>
                                    <td>{selectedClient.client.imie}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Nazwisko</th>
                                        <td>{selectedClient.client.nazwisko}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Pseudonim</th>
                                        <td>{selectedClient.client.pseudonim}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Hasło</th>
                                        <td type="password">{selectedClient.client.haslo}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="col-8">
                            <h3>Rachunki</h3>
                            <table className="table table-primary table-hover">
                                    <thead >
                                        <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">użytkownik</th>
                                        <th scope="col">grupa</th>
                                        <th scope="col">bilans</th>
                                        <th scope="col">zapłacono</th>
                                        <th scope="col">Zmień status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                {/* {selectedReservations && selectedReservations.map((reservation) => {
                                    return (
                                        
                                        <tr key={reservation.id_rezerwacja}>
                                            <td>{reservation.id_rezerwacja}</td>
                                            <td>{reservation.nazwa}</td>
                                            <td>{reservation.rodzaj}</td>
                                            <td>{reservation.zameldowanie}</td>
                                            <td>{reservation.wymeldowanie}</td>
                                            <td><button onClick={(e) => handleDelete(e, reservation.id_rezerwacja)} className="btn btn-secondary">Anuluj</button></td>
                                        </tr>
                                        
                                        
                                    )
                                })} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default UserPanel
