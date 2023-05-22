import React from "react";

const AddCategory = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
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
                type="number"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-1/4">
            <label className="input-group input-group-vertical">
              <span>Available Quantity</span>
              <input
                type="number"
                placeholder=""
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="w-4/1">
          <label className="input-group input-group-vertical">
              <span className="text-2xl">Sub Categoroy</span>
              <select name="select" id="">
                <option value="Robotics">Robotics</option>
                <option value="Cars">Cars</option>
                <option value="Phones">Phones</option>
            </select>
            </label>
            

          </div>
        </div>
        <label>
        Detail Description:
        <textarea
          name="detailDescription"
          rows='50'
          cols='10'
        //   value={toyData.detailDescription}
        //   onChange={handleInputChange}
        />
      </label>
      <br />

        {/* <br />
        <div>
          <div>
            <p className="w-52">Seller Name:</p>
            <input type="text" name="sellerName" />
          </div>

          <div>
            <p className="w-52">Seller Email:</p>
            <input type="email" name="sellerEmail" />
          </div>
        </div>

        <br />
        <div>
          <div>
            <p className="w-52">Subcategory:</p>
            <input type="text" name="subCategory" />
          </div>

          <div>
            <p className="w-52">Price:</p>
            <input type="number" name="price" />
          </div>
        </div>
        <br />
        <div>
          <div>
            <p className="w-52">Rating:</p>
            <input type="number" name="rating" />
          </div>

          <div>
            <p className="w-52">Quantity:</p>
            <input type="number" name="quantity" />
          </div>
        </div>

        <br />

        <div>
          <p className="w-52">Detail Description:</p>
          <textarea name="detailDescription" />
        </div>
        <br /> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
