'use client';

// styles
import styles from '../styles/(component_styles)/product.module.css';
import spacingStyles from '../styles/spacing.module.css';
import 'react-slideshow-image/dist/styles.css';

// images
import { VscChevronDown } from 'react-icons/vsc';

// hooks
import { useState, useRef, useEffect } from 'react';

export default function QtySelect({
  qty,
  currentProductConfig,
  setCurrentProductConfig,
  handleUpdateCart,
}) {
  const optionsWrapperRef = useRef(null);
  const optionsRef = useRef(null);
  const currentOptionRef = useRef(null);
  const clickOutRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdownStyles, setOpenDropdownStyles] = useState({
    top: '0',
    background: 'transparent',
  });

  useEffect(() => {
    const optionsBottom =
      optionsWrapperRef.current.getBoundingClientRect().bottom;

    const windowHeight = window.innerHeight;

    const optionsBottomDifference = windowHeight - optionsBottom;

    if (optionsBottomDifference < 0) {
      if (isDropdownOpen) {
        setOpenDropdownStyles({
          top: `${optionsBottomDifference - 20}px`,
          background: 'var(--green-teal-mid-10)',
        });
      }
    } else {
      setOpenDropdownStyles({
        top: '0',
        background: 'transparent',
      });
    }
  }, [isDropdownOpen]);

  const selectedOptionStyles = {
    backgroundColor: 'var(--blue-lightest)',
  };

  const getOptions = () => {
    const options = [];
    for (let i = 1; i < 11; i++) {
      options.push(
        <div
          className={styles.option}
          value={i}
          key={i}
          style={qty === i ? selectedOptionStyles : null}
          onClick={() => {
            setCurrentProductConfig({ ...currentProductConfig, qty: i });
            if (handleUpdateCart) {
              handleUpdateCart(i);
            }
          }}>
          {i}
        </div>
      );
    }
    return options;
  };

  const toggleOptions = () => {
    setIsDropdownOpen(!isDropdownOpen);
    optionsRef.current.classList.toggle(spacingStyles.open);
    currentOptionRef.current.classList.toggle(spacingStyles.closed);
    clickOutRef.current.classList.toggle(spacingStyles.open);
  };

  return (
    <div className={styles.formSelect}>
      {qty && (
        <div
          className={styles.optionWrapper}
          ref={optionsWrapperRef}
          style={openDropdownStyles}
          onClick={() => {
            toggleOptions();
          }}>
          <div
            className={styles.currentOption}
            ref={currentOptionRef}>
            <div value={qty}>{qty}</div>
            <VscChevronDown />
          </div>

          <div
            className={styles.optionsDropdown}
            ref={optionsRef}>
            {getOptions().map((option) => {
              return option;
            })}
          </div>
        </div>
      )}
      <div
        className={spacingStyles.clickOut}
        ref={clickOutRef}
        onClick={() => {
          toggleOptions();
        }}></div>
    </div>
  );
}
