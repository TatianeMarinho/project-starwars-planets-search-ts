import useFetchFilter from '../../hooks/useFetchFilter';

function Table() {
  const { data } = useFetchFilter();
  console.log(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((obj) => (
          <tr key={ obj.name }>
            <td>{obj.name}</td>
            <td>{obj.rotation_period}</td>
            <td>{obj.orbital_period}</td>
            <td>{obj.diameter}</td>
            <td>{obj.climate}</td>
            <td>{obj.gravity}</td>
            <td>{obj.terrain}</td>
            <td>{obj.surface_water}</td>
            <td>{obj.population}</td>
            <td>{obj.films.map((element) => element)}</td>
            <td>{obj.created}</td>
            <td>{obj.edited}</td>
            <td>{obj.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
