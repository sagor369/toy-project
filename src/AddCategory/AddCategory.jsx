import React from "react";

const AddCategory = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const name = form.name.value 
    const sellerName = form.sellerName.value 
    const email = form.email.value 
    const photo = form.photo.value 
    const price = form.price.value 
    const rating = form.rating.value 
    const quantity = form.quantity.value 
    const category = form.select.value

    const items = {
      name,sellerName,email, photo,price , rating, quantity,category
    }

    fetch('')
  };

  const options = [5, 10, 15, 20];
  function handleSelectChange(event) {
      setItemsPerPage(parseInt(event.target.value));
      setCurrentPage(0);
  }
  return (
    <div className="my-4 px-10 py-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 ">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="input-group input-group-vertical">
              <span>Toy Name</span>
              <input
                type="text"
                name="name"
                placeholder="toy name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="input-group input-group-vertical">
              <span>Seller Name</span>
              <input
                type="text"
                name="sellerName"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="input-group input-group-vertical">
              <span>Seller Email</span>
              <input
                type="email"
                name="email"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/2">
          
            <label className="input-group input-group-vertical">
              <span>Picture Url</span>
              <input
                name="photo"
                type="url"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>            
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-1/4">
            <label className="input-group input-group-vertical">
              <span>Price</span>
              <input
                name="price"
                type="number"
                placeholder="$ toy price "
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/4">
            <label className="input-group input-group-vertical">
              <span>Ratings</span>
              <input
                max={5} 
                min={1}
                type="number"
                name="rating"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/4">
            <label className="input-group input-group-vertical">
              <span>Available Quantity</span>
              <input
                type="number"
                name="quantity"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-4/1">
          <label  className="input-group input-group-vertical">
              <span className="text-2xl">Sub Categoroy</span>
              <select name="category" name="select" id="">
                <option value="Robotics">Robotics</option>
                <option value="Cars">Cars</option>
                <option value="Phones">Phones</option>
            </select>
            </label>
            

          </div>
        </div>
        
        <textarea
          placeholder="description your toy"
          name="detailDescription"
          rows='10'
          cols='100'
          className="p-4 rounded"
        
        />
      
      <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
