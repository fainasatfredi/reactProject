import React, { useEffect, useState } from 'react';

const tabTypes = { ABOUT_TAB: 'about', BASE_TAB: 'base', EVOLUTION_TAB: 'evolution', MOVE_TAB: 'moves' }

const CartaBusqueda = ({ pokemon }) => {

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
      <p>
        Show about
      </p>
    )
  }
  const showBase = () => {
    return (
      <p>
        Show base
      </p>
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
      <p>
        Show move
      </p>
    )
  }


  return (
    <div className="card mx-auto text-center" style={{ width: '30rem', marginTop: "3em" }}>
      <div className="card-body">
        <h5 className="card-title align-content-center ">{pokemon.name}</h5>
        <img src={pokemon.sprites.other['official-artwork'].front_default} style={{ width: '20rem' }} className="card-img-fluid " alt={pokemon.name} />
        <h5 className="card-title align-content-center ">{pokemon.types.map(type => type.type.name).join(', ')}</h5>
        <h5 className="card-title ">{pokemon.id}</h5>
        <div className="btn-group btn-group-lg  " role="group" aria-label="Large button group">
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
