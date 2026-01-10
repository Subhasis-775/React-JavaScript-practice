import React, { Component } from 'react';
import './styles.css'; 

class Tooltip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredIndex: null
    }
  };
  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  }
  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
   }

  render() {
    const icons = [
      { emoji: '🏠', label: 'Home' },
      { emoji: '📧', label: 'Email' },
      { emoji: '⚙️', label: 'Settings' }
    ];

    return (
      <div className="tooltip-container">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="tooltip-item"
            onMouseEnter={() => this.handleMouseEnter(index)}
            onMouseLeave={this.handleMouseLeave}
          >
            <span>{icon.emoji}</span>
            {this.state.hoveredIndex === index && (
              <div className="tooltip-box">{icon.label}</div>
           )}
          </div>
        ))}
      </div>
    );
  }
}

export default Tooltip;
