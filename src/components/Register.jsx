import React, { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import HotelFinder from '../apis/HotelFinder';

const Register = () => {
    const {idHotel, idOption} = useParams();
    const history = useHistory();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [startDate, setStartDate] = useState("2021-02-04");
    const [endDate, setEndDate] = useState("2021-02-04");
    const [selectedClient, setSelectedClient] = useState(null);


    const handleRegister = async (e) => {
        e.preventDefault();
        history.push("/");
        // try {
        //     const response = await HotelFinder.post(`/${idHotel}/reservation/${idOption}/newUser`, {
        //         name,
        //         surname,
        //         nickname,
        //         password,
        //         start_date : startDate,
        //         end_date : endDate
        //     });
        //     setSelectedClient(response.data.data);
        //     history.push(`/clients/${response.data.data.newClient.id_klient}/reservations`);
        // } catch (e) {
        //     console.log(e);
        //     if (e.response.data !== undefined) {
        //         alert(e.response.data.data.err);
        //     }
        // }
        
    }

    return (
        <>
            <h1 className="font-weight-bold display-3 text-center">Panel rejestracji</h1>
            <br/>
            <div className="mb-2 text-left">
                <form action="" onSubmit={handleRegister}>
                    <h2>Nowy użytkownik</h2> <br/>
                    <div className="form-col" style={{maxWidth:"250px"}}>
                        <div className="form-group">
                            <label htmlFor="name">Imię</label>
                            <input value={name} onChange={e => setName(e.target.value)} id="name" type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Nazwisko</label>
                            <input value={surname} onChange={e => setSurname(e.target.value)} id="surname" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nickname">Email</label>
                            <input value={nickname} onChange={e => setNickname(e.target.value)} id="nickname" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" className="form-control" required/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-danger">Zarejestruj</button>
                </form>
                
            </div>
        </>
    )
}

export default Register
