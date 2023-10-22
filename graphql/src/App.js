import { useQuery, gql } from '@apollo/client';

export default function App() {
    
    const cal_Query =gql ` 
    query ExampleQuery {
        company {
          ceo
        }
        roadster {
          apoapsis_au
        }
        }
      `;

      const { loading, error, data } = useQuery(cal_Query);

      function DisplayLocations() {
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error.message}</p>;
      
        return data.locations.map(({ id, name, description, photo }) => (
          <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            <br />
            <b>About this location:</b>
            <p>{description}</p>
            <br />
          </div>
        ));
      }      

      console.log(data)
  return (
    <div>
      <h2>My first Apollo app </h2>
    </div>
  );
}



