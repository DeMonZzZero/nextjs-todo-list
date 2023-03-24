import React from "react";
import ListItem from "./Header";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'new task',
          list: props.start,
          currentId: props.start.length
        };
      }
      inputChange(val) {
        this.setState(_ => ({ value: val }));
      }
      addItem() {
        this.setState(old => ({
          value: '',
          list: [...old.list, { str: old.value, id: old.currentId }],
          currentId: 1 + old.currentId
        }));
      }
    
      delItem(id) {
        this.setState(old => ({ list: old.list.filter((el) => el.id !== id) }));
      }
    
      delComplete() {
        this.setState(old => ({ list: old.list.filter(el => !el.checked) }));
      }
    
      itemChangeCheck(id) {
        this.setState((old) => {
          const index = old.list.findIndex((el) => el.id === id);
          old.list[index].checked = !old.list[index].checked;
          return { list: old.list };
        });
      }
    
      render() {
        return (
          <>
            <input
              value={this.state.value}
              onChange={evt => this.inputChange(evt.target.value)}
            />
            <button onClick={_ => this.addItem()}>Добавить</button>
            <button onClick={_ => this.delComplete()}>Удалить выполненные</button>
            <ul>
              {this.state.list.map((item) => (
                <ListItem
                  item={item}
                  key={item.id}
                  delClick={_ => this.delItem(item.id)}
                  checkBoxChange={_ => this.itemChangeCheck(item.id)}
                />
              ))}
            </ul>
          </>
        );
      }
}

export default ToDoList;
