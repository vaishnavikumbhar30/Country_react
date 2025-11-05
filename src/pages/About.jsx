
import countryFacts from "../api/countryData.json"


export const About = () =>
    {
        return <section className="section-about container"> 
        <h2 className="container-title"> 
            Here are thr Intersting facts
            <br/>
            we are Proud of
        </h2>

        <div className="gradient-cards">

             {/* react code map methid loop  for card  */}
            {
                countryFacts.map((country) => {
                    const {id,countryName,capital,population,interesting_fact} = country
                    return  (
                        <div className="card" key={id}>
                        <div className="container-card bg-green-box">
                            <p className="card-title">{countryName}</p>
                            <p>
                                <span className="card-description">Capital: </span>
                                {capital}
                            </p>
                            <p>
                                <span className="card-description">population: </span>
                                {population}
                            </p>
                            <p>
                                <span className="card-description">interesting_fact: </span>
                                {interesting_fact}
                            </p>
                        </div>
                    </div>
                    )
                })
            }

        </div>
        </section>

    };

