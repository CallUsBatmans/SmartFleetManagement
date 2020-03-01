import React, { useState, useRef, useEffect } from "react";
import styles from "./select.module.scss";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Select = props => {
  const [show, setShow] = useState(false);
  const optionsRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  const toggle = () => setShow(!show);

  const onSelect = event => {
    event.persist();
    const { dataset } = event.target;

    props.onClick({
      name: inputRef.current.name,
      value: dataset.value
    });

    setShow(false);
  };

  const Items = () => {
    if (props.items) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <li key={index} data-value={item} onClick={onSelect}>
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  const Options = () =>
    show && (
      <div className={styles.options}>
        <Items />
      </div>
    );

  return (
    <div className={styles.select} ref={optionsRef}>
      <InputGroup>
        <Form.Control
          ref={inputRef}
          type="text"
          name={props.name}
          size="md"
          placeholder={props.placeholder}
          onClick={toggle}
          value={props.value}
          onChange={props.onChange}
          isInvalid={props.isInvalid}
        />
        <InputGroup.Append className={styles.icon} onClick={toggle}>
          <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} />
        </InputGroup.Append>
        {props.children}
      </InputGroup>
      <Options />
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
