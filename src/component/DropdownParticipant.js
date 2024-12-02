import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Dropdown show={showMenu} onToggle={toggleMenu}>
      <Dropdown.ItemText onClick={toggleMenu} style={{ cursor: 'pointer', color: '#6c757d', userSelect: 'none' }}>
        현황 0/1 <FontAwesomeIcon icon={faCaretDown} />
      </Dropdown.ItemText>

      <Dropdown.Menu>
        <Dropdown.ItemText style={{ cursor: 'default', color: '#6c757d' }}>
          진행도 0/1
        </Dropdown.ItemText>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;
