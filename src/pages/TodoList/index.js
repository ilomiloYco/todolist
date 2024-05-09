import { Component } from "react";
import store from "../../store";
import { List, Checkbox, Button, message } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import "./index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleCheckBoxChange(index) {
    store.dispatch({ type: "ADD_DONEITEM", index });
    message.success("完成");
  }
  handleTodoItemDelete(index) {
    // store.dispatch({ type: "DELETE_ASYNC", index });
    store.dispatch({ type: "DELETE_TODOITEM", index });
    message.success("删除成功");
  }
  handleDoneItemDelete(index) {
    store.dispatch({ type: "DELETE_DONEITEM", index });
    message.success("删除成功");
  }
  render() {
    return (
      <div className="todoListPage">
        <h2>正在进行</h2>
        <List
          bordered
          dataSource={this.state.todoList}
          renderItem={(item, index) => (
            <List.Item className="listItem" key={index + item}>
              <div className="left">
                <Checkbox
                  defaultChecked={false}
                  key={index + item}
                  className="checkBox"
                  onChange={this.handleCheckBoxChange.bind(this, index)}
                >
                  {item}
                </Checkbox>
              </div>
              <Button
                className="right"
                type="text"
                icon={<MinusCircleOutlined />}
                onClick={this.handleTodoItemDelete.bind(this, index)}
                style={{
                  width: 30,
                  height: 30,
                  color: "#6AAAC0",
                }}
              />
            </List.Item>
          )}
        />
        <h2>已完成</h2>
        <List
          bordered
          dataSource={this.state.doneList}
          renderItem={(item, index) => (
            <List.Item className="listItem">
              <div className="left">
                <Checkbox checked disabled className="checkBox">
                  {item}
                </Checkbox>
              </div>
              <Button
                className="right"
                type="text"
                icon={<MinusCircleOutlined />}
                onClick={this.handleDoneItemDelete.bind(this, index)}
                style={{
                  width: 30,
                  height: 30,
                  color: "#6AAAC0",
                }}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
