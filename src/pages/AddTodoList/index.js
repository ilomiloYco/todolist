import { Component } from "react";
import { Input, Space, Button, message } from "antd";
import store from "../../store";
import "./index.css";
import rootSaga, { addAsync } from "../../store/sagas";
// import WithRouter from "../../router/withRouter";
class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    //store更新视图
    store.subscribe(this.handleStoreChange);
  }
  handleInputChange(e) {
    store.dispatch({
      type: "UPDATE_INPUTVALUE",
      payload: e.target.value,
    });
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleAddTodoItem() {
    store.dispatch({ type: "ADD_ASYNC" });
    // store.dispatch({ type: "ADD_TODOITEM" });
    message.success("添加成功");
    // this.props.history.push({
    //   pathname: "/todoList",
    // });
  }
  render() {
    return (
      <div className="addTodoPage">
        <Space.Compact
          style={{
            width: "100%",
            marginTop: 20,
          }}
        >
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            style={{ height: 45, fontSize: "18px" }}
          />
          <Button
            type="primary"
            onClick={this.handleAddTodoItem}
            style={{ backgroundColor: "#6AAAC0", height: 45 }}
          >
            Submit
          </Button>
        </Space.Compact>
      </div>
    );
  }
}

export default AddTodoList;
