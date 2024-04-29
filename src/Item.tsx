import React from 'react';
import styles from './paramEdit.css';

export class Item extends React.Component {
    constructor(
        public nField: string,
        public num: number,
        public selected: number[],
        public setSelected: (value: number[]) => void   // изменяет state выбранных номеров
    ) { super({ num, selected, setSelected }) }

    handleClick(e: React.MouseEvent) {
        const el = e.target as HTMLDivElement;
        if (el.getAttribute('isClicked') === 'true') {
            el.setAttribute('isClicked', 'false');
            el.setAttribute('style', 'background-color:white; cursor:pointer');
            this.setSelected(this.selected.filter((n) => n !== Number(el.innerText)));
        }
        else {
            if ((el.getAttribute('data-nfield') === '1' && this.selected.length < 8) ||
                (el.getAttribute('data-nfield') === '2' && this.selected.length < 1)
            ) {
                el.setAttribute('isClicked', 'true');
                el.setAttribute('style', 'background-color:yellow; cursor:pointer');
                this.setSelected([...this.selected, Number(el.innerText)]);
            }
            else {
                alert(`Поле ${this.nField} заполнено`)
            }
        }
    }

    getItem() {
        return <div key={this.num} onClick={this.handleClick.bind(this)} data-nfield={this.nField}
            className={styles.fielditem} style={{ backgroundColor: 'white', cursor: 'pointer' }
            }>{this.num}</div>
    }
}    
