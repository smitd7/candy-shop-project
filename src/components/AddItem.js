import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productDescription:"",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-3">
          <label htmlFor="inputName" className="form-label">
            Candy Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-3">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            aria-describedby="name"
            name="productDescription"
            onChange={(e) => {
              this.setState({ productDescription: e.currentTarget.value });
            }}
            value={this.state.productDescription}
          />
        </div>
        <div className="mb-3 col-2">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-2" >
          Add Candy
        </button>
      </form>
    );
  }
}
<hr></hr>

export default AddItem;