import React, { Component } from 'react';
import Home from './Home/Home';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import Table from './Home/Table';
import AddTaskForm from './Home/AddTaskForm';
import SearchTaskForm from './Home/SearchTaskForm';
const axios = require('axios');

const URL = '/tasks';

class App extends Component {
  // state = {
  //   tasks: [],
  //   log: []
  // };

  // componentDidMount() {
  //   axios
  //     .get(URL)
  //     .then(response => {
  //       //console.log(response);
  //       this.setState({ tasks: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });

  //   //this.setState({ log: this.getAllTasks() });
  // }

  // componentDidMount() {
  //   this.setState({ tasks: this.getAllTasks() });
  // }

  // getAllTasks = async () => {
  //   return await axios
  //     .get(URL)
  //     .then(response => {
  //       return response.data.tasks;
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

  // handleCreate = async task => {
  //   let createdTask = await axios
  //     .post(URL, task)
  //     .then(res => {
  //       return res.data;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  //   this.setState({
  //     log: `POST: ${JSON.stringify(createdTask, undefined, 2)}`
  //   });
  //   this.setState({ tasks: [...this.state.tasks, createdTask] });
  // };

  // handleDelete = id => {
  //   // delete task from database
  //   axios
  //     .delete(`${URL}/${id}`)
  //     .then(res => {
  //       //console.log(res.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });

  //   // remove deleted task from state
  //   const { tasks } = this.state;
  //   this.setState({
  //     tasks: tasks.filter(task => {
  //       return task._id !== id;
  //     })
  //   });
  // };

  render() {
    //const { tasks } = this.state;

    return (
      <div className="container">
        <Header title="Welcome to Task Mgr!" />

        <Content>
          <Home />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
