import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Стілець сірий",
          img: "1.jpg",
          desc: "Сірий стілець з пластику",
          category: "chairs",
          price: "1300",
        },
        {
          id: 2,
          title: "Стілець жовтий",
          img: "2.jpg",
          desc: "Жовтий  стілець",
          category: "chairs",
          price: "1800",
        },
        {
          id: 3,
          title: "Набір стільців",
          img: "3.jpg",
          desc: "Набір стільців.",
          category: "chairs",
          price: "2400",
        },
        {
          id: 4,
          title: "Барний стілець",
          img: "4.jpg",
          desc: "Чорний барний стілець. Матеріал: дерево",
          category: "chairs",
          price: "1300",
        },
        {
          id: 5,
          title: "Стіл прямокутний",
          img: "5.jpg",
          desc: "Прямокутний дерев'яний стіл",
          category: "table",
          price: "12850",
        },
        {
          id: 6,
          title: "Барний стіл",
          img: "6.jpg",
          desc: "Барний стіл зі світлого дерева",
          category: "table",
          price: "2400",
        },
        {
          id: 7,
          title: "Стіл прямокутний",
          img: "7.jpg",
          desc: "Дерев'янний стіл",
          category: "table",
          price: "18200",
        },
        {
          id: 8,
          title: "Чорни стіл",
          img: "8.jpg",
          desc: "Чорний пластиковий стіл",
          category: "table",
          price: "17800",
        },
        {
          id: 9,
          title: "Стіл журнальний",
          img: "9.jpg",
          desc: "Скляний журнальний стіл",
          category: "table",
          price: "25000",
        },
        {
          id: 10,
          title: "Стіл світлий",
          img: "10.jpg",
          desc: "Світлий дерев'яний стіл",
          category: "table",
          price: "17952",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
