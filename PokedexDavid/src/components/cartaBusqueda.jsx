import React, { useState } from 'react';

const tabTypes = { ABOUT_TAB: 'about', BASE_TAB: 'base', EVOLUTION_TAB: 'evolution', MOVE_TAB: 'moves' }

const CartaBusqueda = ({ pokemon,shiny }) => {

  const [selectedTab, setSelectedTab] = useState(tabTypes.ABOUT_TAB);

  const handleTab = (e, tabType) => {
    e.preventDefault()
    setSelectedTab(tabType)
  }
  const showTab = () => {

    switch (selectedTab) {
      case tabTypes.ABOUT_TAB:
        return showAbout()
        break;
      case tabTypes.BASE_TAB:
        return showBase()
        break;
      case tabTypes.EVOLUTION_TAB:
        return showEvolution()
        break;
      case tabTypes.MOVE_TAB:
        return showMove()
        break;
      default:
        return (
          <p>
            None
          </p>
        )
        break;
    }

  }

  const showAbout = () => {
    return (
      <>
        <p className='card-header '>
          <h2>
            <b>
              Descripcion de {pokemon.name}
            </b>
          </h2>
        </p>
        <p className='text-start '>
          <h4>
            <span><b>Tipos:</b></span>  {pokemon.types.map(type => type.type.name).join(', ')}
          </h4>
        </p>
        <p className='text-start '>
          <h4>
            <span><b>Altura:</b></span>  {pokemon.height / 10}m
          </h4>
        </p>
        <p className='text-start '>
          <h4>
            <span><b>peso:</b></span>  {pokemon.weight / 10}kg
          </h4>
        </p>
        <p className='text-start '>
          <h4>
            <span><b>Habilidades:</b></span>  {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
          </h4>
        </p>
      </>
    )
  }
  const showBase = () => {
    return (
      <>
        {pokemon.stats.map(stat =>
          <section>
            <span >{stat.stat.name} </span>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{ width: stat.base_stat }}>{stat.base_stat}</div>
            </div>

          </section>


        )}
        <span>Puntos en total:</span>
        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-success" style={{ width: pokemon.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b) }}> {pokemon.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b)}</div>
        </div>
      </>
    )
  }
  const showEvolution = () => {
    return (
      <p>
        Show evolution
      </p>
    )
  }
  const showMove = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Level Learned</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.moves.map((move, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>  
                <td>{move.move.name}</td>
                <td>{move.version_group_details[0].level_learned_at}</td>
                <td>{move.version_group_details[0].move_learn_method.name}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </>
    )
  }


  return (
    <div className="container card mx-auto text-center" style={{ maxWidth: '40rem', marginTop: '3em' }}>
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <img src={ shiny ? pokemon.sprites.other['official-artwork'].front_shiny : pokemon.sprites.other['official-artwork'].front_default} style={{ maxWidth: '50%', height: 'auto' }} className="card-img-fluid" alt={pokemon.name} />
        <h5 className="card-title">{pokemon.types.map(type => type.type.name).join(', ')}</h5>
        <h5 className="card-title">{pokemon.id}</h5>
        <div className="btn-group btn-group-lg d-flex justify-content-center" role="group" aria-label="Large button group">
          <button type="button" onClick={async (e) => handleTab(e, tabTypes.ABOUT_TAB)} className="btn btn-outline-primary">About</button>
          <button type="button" onClick={async (e) => handleTab(e, tabTypes.BASE_TAB)} className="btn btn-outline-primary">Base Stats</button>
          <button type="button" onClick={async (e) => handleTab(e, tabTypes.EVOLUTION_TAB)} className="btn btn-outline-primary">Evolution</button>
          <button type="button" onClick={async (e) => handleTab(e, tabTypes.MOVE_TAB)} className="btn btn-outline-primary">Moves</button>
        </div>

        {showTab()}
      </div>
    </div>
  );
};

export default CartaBusqueda;
