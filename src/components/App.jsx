import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState( prev => ({[name]: prev[name] + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          ></Statistics>
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}

// Оголошується класовий компонент App.
// Визначається початковий стан компонента, який містить три лічильники відгуків: good, neutral і bad.
// Вони ініціалізуються зі значенням 0.
// Компонент має три методи:
// 1. leaveFeedback: Цей метод викликається, коли користувач залишає відгук. Він оновлює стан компонента збільшуючи
// відповідний лічильник на 1 (залежно від отриманого параметру e, який очікується бути ключем зі стану компонента,
// наприклад, "good", "neutral" або "bad").
// 2. countTotalFeedback: Цей метод приймає об'єкт з трьома лічильниками: good, neutral і bad.
// Він обчислює загальну кількість відгуків, складаючи значення всіх трьох лічильників.
// 3. countPositiveFeedbackPercentage: Цей метод також приймає об'єкт з трьома лічильниками: good, neutral і bad.
// Він обчислює відсоток позитивних відгуків, який представляє собою відношення кількості позитивних відгуків (good)
// до загальної кількості відгуків. Результат округлюється до цілого числа за допомогою Math.round.

// Метод render() відповідає за відображення компонента. Він містить різні компоненти:
// <Layout>: Це компонента, що визначає загальний макет додатка, де діти компоненти будуть розміщені.
// <Section>: Це компонента, яка представляє секцію на сторінці. Використовується для структурування додатка на різні частини.
// <FeedbackOptions>: Компонента для збору відгуків. Передається масив ключів стану компонента (good, neutral, bad) як options,
// а також функція leaveFeedback для обробки вибору відгуків.
// <Statistics>: Компонента для відображення статистики зібраних відгуків. Передаються значення good, neutral, bad,
// обчислені значення total та positivePercentage, які отримуються викликом відповідних методів компонента App.
// Компонента <GlobalStyle>: Це компонента, що задає глобальні стилі для додатка.
// Цей класовий компонент App визначає основний функціонал додатка, пов'язаний із збором відгуків від користувачів
// та відображенням статистики на сторінці.
