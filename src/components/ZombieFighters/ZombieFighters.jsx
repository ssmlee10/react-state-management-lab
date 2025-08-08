const ZombieFighters = ({ fighter }) => {
    return (
            <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
    )
}

export default ZombieFighters;