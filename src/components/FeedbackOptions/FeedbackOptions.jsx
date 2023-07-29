import { BtnFeedback } from 'components/BtnFeedback/BtnFeedback';
import PropTypes, { arrayOf } from 'prop-types';
import React from 'react';
import { Icons } from './Icons';
import { BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              key={option}
              icon={Icons[option]}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};


// Оголошується компонент FeedbackOptions:
// Вхідними проптайпами є options (масив рядків) та onLeaveFeedback (функція), обидва обов'язкові.
// Використовується деструктуризація параметрів, отриманих з проптайпів, для спрощення доступу до options та onLeaveFeedback.
// Повертається компонент <FeedbackOptions>, який відображає список кнопок з різними варіантами відгуків з масиву options.
// Кожна кнопка має іконку, значення та текст, який відображається на кнопці.
// При кліку на кнопку виконується функція onLeaveFeedback з переданим варіантом відгуку.
// Загальною метою цього компонента є створення списку кнопок для збору відгуків з різними варіантами вибору,
// наприклад: "Good", "Bad", "Neutral" і т.д. За допомогою цього компоненту видбувається отримання відгуків
// від користувачів і обробка відповідних реакцій на них.
