import React, { useEffect, useState } from 'react';

const tabTypes = {
  ABOUT_TAB: 'about',
  BASE_TAB: 'base',
  EVOLUTION_TAB: 'evolution',
  MOVE_TAB: 'moves'
};

const CartaBusqueda = ({ pokemon, shiny,setPokemon}) => {
  const [ubi, setUbi] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/encounters`)
      .then((res) => res.json())
      .then((result) => setUbi(result));
  }, [pokemon.name]);

  const extraerZonas = () => {
    return ubi
      .filter((area) => area && area.location_area && area.location_area.name)
      .map((area) => `${area.location_area.name} | `);
  };

  const [selectedTab, setSelectedTab] = useState(tabTypes.ABOUT_TAB);

  const handleTab = (e, tabType) => {
    e.preventDefault();
    setSelectedTab(tabType);
  };

  const showTab = () => {
    switch (selectedTab) {
      case tabTypes.ABOUT_TAB:
        return showAbout();
      case tabTypes.BASE_TAB:
        return showBase();
      case tabTypes.EVOLUTION_TAB:
        return showEvolution();
      case tabTypes.MOVE_TAB:
        return showMove();
      default:
        return <p>None</p>;
    }
  };

  const showAbout = () => (
    <>
      <h2 className='card-header '>
        <b>Descripcion de {pokemon.name}</b>
      </h2>
      <h4 className='text-start '>
        <span><b>Tipos:</b></span> {pokemon.types.map((type) => type.type.name).join(', ')}
      </h4>
      <h4 className='text-start '>
        <span><b>Altura:</b></span> {pokemon.height / 10}m
      </h4>
      <h4 className='text-start '>
        <span><b>Peso:</b></span> {pokemon.weight / 10}kg
      </h4>
      <h4 className='text-start '>
        <span><b>Habilidades:</b></span> {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
      </h4>
      <h4 className='text-start '>
        <span><b>Zona de captura:</b></span> {extraerZonas()}
      </h4>
    </>
  );

  const showBase = () => (
    <>
      {pokemon.stats.map((stat, index) => (
        <section key={index}>
          <span>{stat.stat.name}</span>
          <div className="progress" role="progressbar" aria-label="Stat Progress" aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{ width: `${stat.base_stat / 2}%` }}>{stat.base_stat}</div>
          </div>
        </section>
      ))}

      <span>Puntos en total:</span>
      <div className="progress" role="progressbar" aria-label="Total Progress" aria-valuenow={pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)} aria-valuemin="0" aria-valuemax="700">
        <div className="progress-bar bg-success" style={{ width: `${(pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0) / 7)}%` }}>
          {pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)}
        </div>
      </div>
    </>
  );

  const showEvolution = () => (
    <img src="" alt="" />
  );

  const showMove = () => (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Level Learned</th>
            <th scope="col">How is learned</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.moves.map((move, index) => (
            <tr key={move.move.name}>
              <th scope="row">{index + 1}</th>
              <td>{move.move.name}</td>
              <td>{move.version_group_details[0].level_learned_at}</td>
              <td>{move.version_group_details[0].move_learn_method.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  const closeCard = () => {
    setPokemon(null)
  };

  return (
    <div className={`container card mx-auto text-center rounded-5 mx-2`} style={{ maxWidth: '40rem', marginTop: '3em' }}>
      <div className="card-body">
        <div className='text-start'>
          <button className='btn btn-close' onClick={closeCard}></button>
        </div>
        <h5 className="card-title">{pokemon.name}</h5>
        <img src={shiny ? pokemon.sprites.other['official-artwork'].front_shiny : pokemon.sprites.other['official-artwork'].front_default} style={{ maxWidth: '50%', height: 'auto' }} className="card-img-fluid" alt={pokemon.name} />
        <h5 className="card-title">{pokemon.types.map((type) => type.type.name).join(', ')}</h5>
        <h5 className="card-title">{pokemon.id}</h5>
        <div className="btn-group btn-group-lg d-flex justify-content-center" role="group" aria-label="Large button group">
          <button type="button" onClick={(e) => handleTab(e, tabTypes.ABOUT_TAB)} className="btn btn-outline-primary">About</button>
          <button type="button" onClick={(e) => handleTab(e, tabTypes.BASE_TAB)} className="btn btn-outline-primary">Base Stats</button>
          <button type="button" onClick={(e) => handleTab(e, tabTypes.EVOLUTION_TAB)} className="btn btn-outline-primary">Evolution</button>
          <button type="button" onClick={(e) => handleTab(e, tabTypes.MOVE_TAB)} className="btn btn-outline-primary">Moves</button>
        </div>
        {showTab()}
      </div>
    </div>
  );
};

export default CartaBusqueda;
