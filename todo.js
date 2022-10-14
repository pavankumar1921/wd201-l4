const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (data) => data.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (data) => data.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (data) => data.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  return { all, add, markAsComplete, overdue, dueToday, dueLater };
};
module.exports = todoList;
