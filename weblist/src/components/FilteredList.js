import React, { Component } from 'react'

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);

  }
  state = {
    initialItems: ["Apples", "Broccoli", "Chicken", "Bacon", "Eggs", "Salmon", "Granola", "Bananas", "Beer", "Wine", "Yogurt"],
    items : [],
  };


  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  }
  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }
  render() {
    return React.createElement(
      "div",
      { className: "filter-list" },
      React.createElement("input", { type: "text", placeholder: "Search", onChange: this.filterList }),
      React.createElement(List, { items: this.state.items })
    );
  }

}

class List extends Component{
  render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(function (item) {
        return React.createElement(
          "li",
          { key: item },
          item
        );
      })
    );
  }
}
export default FilteredList;
