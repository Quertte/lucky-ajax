const React = require('react');

module.exports = function DieCont({ roll }) {
  return (
    <div className="die">
      <span className="roll">
        {roll}
      </span>
    </div>
  );
};
