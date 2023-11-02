import React, { useEffect, useState } from 'react'

export default function Spotify() {


    const [data, setData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c595f8919mshc680c73ba78f5c5p18e9d2jsnabc1fceeafc8',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    function apidata() {
        fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                setData(data)
            })
    }

    useEffect(() => {
        apidata()
    },[])

    console.log("hello")
    return (
        <div>
            {
                data.map((val) => {
                    return (
                        <div>
                            <h1>{val.totalCount}</h1>
                        </div>

                    )
                    

                })

                


            }

        </div>
    )
}
