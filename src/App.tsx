import React, { useEffect, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './paramEdit.css';
import { Item } from './Item';      // класс Item - это клетка в поле
import { MagicWand } from './MagicWand';
import { FillTicket } from './FillTicket';
//import { PostResult } from './api/PostResult';

function AppComponent() {
  const fieldOneItems: Item[] = [];
  const fieldTwoItems: Item[] = [];
  const wand = MagicWand();
  const [showWand, setShowWand] = useState(true);
  const [fieldOneSelected, setFieldOneSelected] = useState<number[]>([]);
  const [fieldTwoSelected, setFieldTwoSelected] = useState<number[]>([]);
  const [textResult, setTextResult] = useState('');
  const [wins] = useState(FillTicket()); // определили выйгрышные номера
  const button = useRef<HTMLButtonElement>(null);
  const ticketDiv = useRef<HTMLDivElement>(null);
  const fieldOne = useRef<HTMLDivElement>(null);
  const fieldTwo = useRef<HTMLDivElement>(null);

  function autoFillTicket() {
    const selectedNumbers = FillTicket();
    setFieldOneSelected(selectedNumbers.fieldOneWinNumbers);
    setFieldTwoSelected(selectedNumbers.fieldTwoWinNumbers);

    for (let i = 0; i < 19; i++) {
      if (fieldOne.current) fieldOne.current.children[i].
        setAttribute('style', 'background-color:white; cursor:pointer');

      if (selectedNumbers.fieldOneWinNumbers.includes(i + 1)) {
        if (fieldOne.current) fieldOne.current.children[i].
          setAttribute('style', 'background-color:yellow; cursor:pointer');
      }
    }

    for (let i = 0; i < 2; i++) {
      if (fieldTwo.current) fieldTwo.current.children[i].
        setAttribute('style', 'background-color:white; cursor:pointer');

      if (selectedNumbers.fieldTwoWinNumbers[0] === (i + 1)) {
        if (fieldTwo.current) fieldTwo.current.children[i].
          setAttribute('style', 'background-color:yellow; cursor:pointer');
      }
    }
  }

  function checkTicket() {
    let isTicketWon = false;
    setShowWand(false);
    if (((fieldOneSelected.filter(x => wins.fieldOneWinNumbers.includes(x))).length >= 4) ||
      (((fieldOneSelected.filter(x => wins.fieldOneWinNumbers.includes(x))).length >= 3) &&
        fieldTwoSelected[0] === wins.fieldTwoWinNumbers[0])
    ) {
      isTicketWon = true;
      setTextResult('You win! Congratulations!');
    }
    else setTextResult('Hope next time you win!')

    for (let i = 0; i < 8; i++) {
      if (wins.fieldOneWinNumbers.includes(fieldOneSelected[i])) {
        if (fieldOne.current) fieldOne.current.children[fieldOneSelected[i] - 1].
          setAttribute('style', 'background-color:lightgreen');
      }
    }

    if (wins.fieldTwoWinNumbers[0] === fieldTwoSelected[0]) {
      if (fieldTwo.current) fieldTwo.current.children[fieldTwoSelected[0] - 1].
        setAttribute('style', 'background-color:lightgreen');
    }

    if (ticketDiv.current) {
      ticketDiv.current.style.pointerEvents = 'none';
      ticketDiv.current.style.opacity = '0.7';
    }

    // PostResult('http://localhost:8000/results', fieldOneSelected, fieldTwoSelected, isTicketWon);
  }

  // первоначальное заполнение полей
  for (let i = 0; i < 19; i++) {
    fieldOneItems.push(new Item('1', i + 1, fieldOneSelected, setFieldOneSelected))
  }

  for (let i = 0; i < 2; i++) {
    fieldTwoItems.push(new Item('2', i + 1, fieldTwoSelected, setFieldTwoSelected))
  }

  // проверяем все ли поля заполнены после нажатия на клетку
  useEffect(() => {
    if ((fieldOneSelected.length === 8) && (fieldTwoSelected.length === 1)) {
      if (button.current) {
        button.current.disabled = false;
        button.current.style.backgroundColor = 'lightgreen';
        button.current.style.cursor = 'pointer';
      }
    }
    else {
      if (button.current) {
        button.current.disabled = true;
        button.current.style.backgroundColor = 'white';
        button.current.style.cursor = 'default';
      }
    }
  }, [fieldOneSelected, fieldTwoSelected])

  return (
    <div className={styles.modal}>
      <div className={styles.container} ref={ticketDiv}>
        <div className={styles.ticketNumber}> <span>Ticket 1</span>
          <div className={styles.wand} onClick={autoFillTicket}>{showWand && wand}</div>
        </div>

        <div>
          <div className={styles.fieldTitle}>
            <span className={styles.fieldNumber}>Field 1 </span>
            <span className={styles.fieldTask}>Pick 8 numbers</span>
          </div>

          <div className={styles.field} ref={fieldOne}>
            {fieldOneItems.map((item, index) => item.getItem())}
          </div>

          <div className={styles.fieldTitle}>
            <span className={styles.fieldNumber}>Field 2 </span>
            <span className={styles.fieldTask}>Pick 1 number</span>
          </div>

          <div className={styles.field} style={{ marginBottom: '23px' }} ref={fieldTwo}>
            {fieldTwoItems.map((item, index) => item.getItem())}
          </div>

          <button className={styles.button} ref={button} onClick={checkTicket}>Check my ticket</button>
        </div>
      </div>

      {textResult && <div className={styles.win}>
        <div className={styles.textResult}>{textResult}</div>
        <div>Winning numbers:</div>
        <div>{wins.fieldOneWinNumbers.sort((a, b) => a - b).map((item, index) =>
          <span key={index} className={styles.winNumbers}>{item}</span>)}</div>
        <div>{wins.fieldTwoWinNumbers.map((item, index) =>
          <span key={index} className={styles.winNumbers}>{item}</span>)}</div>
      </div>}

    </div >
  )
}

export const App = hot(() => <AppComponent />);

