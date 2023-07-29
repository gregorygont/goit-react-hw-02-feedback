import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineHeart } from 'react-icons/hi';
import {
  MdThumbDownOffAlt,
  MdSentimentNeutral,
  MdOutlineSummarize,
  MdPercent,
} from 'react-icons/md';
import { StaticList, DescrStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StaticList>
      <li>
        <DescrStatistics>
          <HiOutlineHeart size="14" />
          Good: <span>{good}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdSentimentNeutral size="14" />
          Neutral: <span>{neutral}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdThumbDownOffAlt size="14" />
          Bad: <span>{bad}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdOutlineSummarize size="14" />
          Total: <span>{total}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdPercent size="14" />
          Positive feedback: <span>{positivePercentage}%</span>
        </DescrStatistics>
      </li>
    </StaticList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// Оголошується компонент Statistics:
// Вхідними проптайпами є good, neutral, bad, total (за замовчуванням 0) та positivePercentage (за замовчуванням 0).
// Використовується деструктуризація параметрів, отриманих з проптайпів, для спрощення доступу до good, neutral, bad, total та positivePercentage.
// Повертається JSX в залежності від значення total:
// Якщо total більше нуля (total не є 0):
// Відображається компонента <StaticList>, яка представляє список елементів зі стилізацією.
// Компонента <StaticList> містить п'ять елементів списку (<li>), які відображають різні статистичні показники.
// Кожен елемент містить іконку, опис статистики (наприклад, "Good", "Neutral", "Bad" ) та відповідне значення з проптайпів, які вони представляють.
// Якщо total дорівнює нулю (total є 0):
// Повертається компонента <Notification> з текстом "There is no feedback", яка відображає повідомлення про відсутність зібраних відгуків.
