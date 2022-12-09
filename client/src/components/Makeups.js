import React from 'react';

const Makeups = ({ makeups }) => {
  const renderMakeups = makeups.map(makeup =>
    <p key={makeup.id}>{makeup.name}</p>
    )
    return (
      <div>
        {renderMakeups}
      </div>
    )
}

export default Makeups;