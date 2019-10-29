import * as todoActions from './actions/TodoAction';

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todos extends Component {
    state = {
      todoText: '',    
    };

    addTodo = () => {
      const { todoText } = this.state;
      if (todoText !== '') {
        this.props.addTodo(todoText);
      }
      this.setState({todoText: ''});
    };

    removeTodo = (id) => {
      this.props.removeTodo(id);
    };

    render() {
      return (
        <div className="container">
          <div className="todo__title">
            <h2>TO DO LIST :)</h2>
          </div>
          <div className="todo__input">
            <input
              placeholder="Digite seu item"
              type="text"
              value={this.state.todoText}
              onChange={(e) => this.setState({ todoText: e.target.value })}
            />
          </div> 
          <button className="todo__add-button" onClick={this.addTodo}>
            Adicionar Item
          </button>
          <ul>
            <div className="todo__itens">
            {this.props.todos.map(todo => (
              <div key={todo.id} className="todo__li">
                <li>{todo.text}</li>
                <button className="todo__remove-button" onClick={() => this.removeTodo(todo.id)}>Remover</button>
               </div>
            ))}
            </div>
          </ul>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);