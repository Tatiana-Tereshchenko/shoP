import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';
import Categories from './components/Categories';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
        {
          id: 11,
          title: "Диван прямий",
          img: "11.jpg",
          desc: "Прямий сірий диван",
          category: "sofa",
          price: "15952",
        },
      ],
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  deleteOrder(id) {
    this.setState({orders:this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
