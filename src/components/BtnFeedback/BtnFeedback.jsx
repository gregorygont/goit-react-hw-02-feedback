import React from 'react';
import { StyledButton } from './BtnFeedback.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  icon: Icon = null,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {Icon && <Icon size="14" />}
      {children}
    </StyledButton>
  );
};

BtnFeedback.propTypes = {
  icon: PropTypes.any,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

//  Імпортуються необхідні модулі:
// React для використання React-елементів;
// StyledButton з './BtnFeedback.styled', це стилізована компонента кнопки (styled-component);
// PropTypes з 'prop-types' для валідації проптайпів.

// Оголошується компонент BtnFeedback:
// Вхідними проптайпами є icon (за замовчуванням null), type (за замовчуванням 'button'), children (текстовий вміст кнопки)
// та onClick (функція-обробник події кліку на кнопку).
// Використовується деструктуризація параметрів, отриманих з проптайпів, для спрощення доступу до icon, type, children та onClick.
// Повертається компонент <BtnFeedback>, який містить <StyledButton>.
// <StyledButton> - це компонента кнопки, яка стилізується згідно зі зазначеними стилями. Вона має проптайпи type
// (тип кнопки, наприклад, "button" або "submit") та onClick (функція-обробник події кліку).
// Компонента <BtnFeedback> також містить {Icon && <Icon size="14" />} - це динамічний рендер іконки.
// Якщо змінна Icon має значення (тобто не null), то рендериться відповідна іконка з розміром "14".
// Після іконки відображається текстовий вміст кнопки, який передається через children.
// Загальна мета цього компонента - створення кнопки з іконкою та текстовим вмістом, яку можна використовувати в різних
// місцях додатка, де потрібно зібрати відгуки або реакції від користувачів. Зокрема вона використовується в компоненті FeedbackOptions.
