import { useState, useEffect } from 'react';
import react from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
    const [country, setCountry] = useState(null)
    const [borders, setBorders] = useState([])
    const { alpha3Code } = useParams()
    console.log(alpha3Code)

    function findCountry() {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
            .then((response) => {
                setCountry(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function findBorders() {
        const foundBorders = props.countries.filter((oneCountry) => {
            return oneCountry.borders.includes(alpha3Code)
        })
        setBorders(foundBorders)
    }

    useEffect(() => {
        findCountry()
        findBorders()
    }, [alpha3Code])



    if (country) {
        return (
            <div className="col-7">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borders.length > 0 && borders.map((border) => {
                                        return (
                                            <li key={border.alpha3Code}><Link to={`/${border.alpha3Code}`}>{border.name.common}</Link></li>


                                        )
                                    })}

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (
            <h2>...Loading</h2>
        )
    }

}

export default CountryDetails