<script>
  //IMPORT MODULES
  import { v4 } from "uuid";
  import Noty from "noty";

  //import Noty Css
  import "noty/lib/noty.css";
  import "noty/lib/themes/relax.css";

  // Example product list
  let products = [
    {
      id: 1,
      name: "HP Pavilion Notebook",
      description: "HP LAPTOP i3 Generation Intel",
      category: "Notebook",
      imageURL:
        "https://i.linio.com/p/ef42cea7def11402bc56fb9c42882e04-zoom.jpg"
    },
    {
      id: 2,
      name: "HP G6 250 Notebook",
      description: "HP LAPTOP i5 Generation Intel",
      category: "Notebook",
      imageURL:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05456668.png"
    }
  ];

  // Product instance
  let product = {
    id: "",
    name: "",
    description: "",
    category: "",
    imageURL: ""
  };

  //Edit Status Default : False
  let editStatus = false;

  // Add Product Function
  const addProduct = () => {
    const newProduct = {
      id: v4(),
      name: product.name,
      description: product.description,
      category: product.category,
      imageURL: product.imageURL
    };
    //Add product to the list
    products = products.concat(newProduct);

    //Reset Product Instance
    product = {
      id: "",
      name: "",
      description: "",
      category: "",
      imageURL: ""
    };
    //Create a new Notification with Noty
    new Noty({
      theme: "relax",
      type: "success",
      timeout: 3000,
      text: "Product Added successfully"
    }).show();
  };

  // Delete product by ID function
  const deleteProduct = id => {
    products = products.filter(product => product.id !== id);
    //Create a new Notification with Noty
    new Noty({
      theme: "relax",
      type: "error",
      timeout: 3000,
      text: "Product Deleted successfully"
    }).show();
  };

  // Edit product function
  const editProduct = productSelected => {
    //fill values of product with this productSelected (onClick)
    product = productSelected;
    //Set edit Status true
    editStatus = true;
  };

  //set edit status to false
  const editStatusFalse = () => {
    editStatus = false;
  };

  // Update Product function
  const updateProduct = () => {
    //new Product updated
    let updatedProduct = product;
    //find product position in Products Array
    const productPosition = products.findIndex(item => item.id === product.id);
    console.log(productPosition);
    //update old product with the new product
    products[productPosition] = updatedProduct;
    // Edit status False
    editStatus = false;
    //Reset Product Instance
    product = {
      id: "",
      name: "",
      description: "",
      category: "",
      imageURL: ""
    };
    //Create a new Notification with Noty
    new Noty({
      theme: "relax",
      type: "success",
      timeout: 3000,
      text: "Product Updated successfully"
    }).show();
  };

  // Add product function or Edit and Update on Submit
  const submitHandler = e => {
    if (!editStatus) {
      addProduct();
    } else {
      updateProduct();
    }
    //Reset Product Form
    e.target.reset();
  };

  // -------------------------
  // WORK IN PROGRESS
  // -------------------------

  //show all items function
  const showAll = () => {
    console.log(products);
  };
  //future filter function
  const filterBy = categorySelected => {
    console.log(`Filter by ${categorySelected}`);
  };
</script>

<style>
  /* Body Background  */
  main {
    background-color: #eceff1;
    min-height: 100vh;
    padding: 1px;
  }
</style>

<main>

  <div class="container mt-3">
    <div class="row">

      <!-- Product List -->
      <div class="col-sm-12 col-md-6 mt-5">
        <div class="form-group">
          <p>Filter By Category:</p>
        </div>
        {#each products as product}
          <div class="card mb-2">
            <div class="row">
              <div class="col-md-4">
                {#if product.imageURL}
                  <img src={product.imageURL} alt="" class="img-fluid p-2" />
                {:else}
                  <img
                    src="images/no-product-image.png"
                    alt=""
                    class="img-fluid p-2" />
                {/if}
              </div>
              <div class="col-sm-12 col-md-8">
                <div class="card-body">
                  <h5>
                    <strong>{product.name}</strong>
                    <br />
                    <span>
                      <small>{product.category}</small>
                    </span>
                  </h5>
                  <p class="card-text">{product.description}</p>
                  <button
                    on:click={editProduct(product)}
                    class="btn btn-warning">
                    Edit
                  </button>
                  <button
                    on:click={deleteProduct(product.id)}
                    class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Add Product Form -->
      <div class="col-md-6 mt-5">
        <div class="card">
          <div class="card-body">
            <form
              on:submit|preventDefault={submitHandler}
              on:reset={editStatusFalse}>
              {#if editStatus}
                <h3>Edit Product</h3>
              {:else}
                <h3>Add a Product</h3>
              {/if}
              <div class="form-group">
                <input
                  bind:value={product.name}
                  type="text"
                  placeholder="Product Name"
                  id="product-name"
                  class="form-control" />
              </div>
              <div class="form-group">
                <textarea
                  bind:value={product.description}
                  id="product-description"
                  rows="3"
                  placeholder="Product Description"
                  class="form-control" />
              </div>
              <div class="form-group">
                <select
                  id="product-category"
                  bind:value={product.category}
                  class="form-control">
                  <option value="Notebook">Notebooks</option>
                  <option value="Peripheral">Peripherals</option>
                  <option value="Component">Components</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  bind:value={product.imageURL}
                  type="url"
                  id="product-img-url"
                  placeholder="https://example.com/image.jpg"
                  class="form-control" />
              </div>
              <div class="form-group">
                <div class="col-md-4">
                  <img src={product.imageURL} alt="" class="img-fluid p-2" />
                </div>
              </div>
              {#if editStatus}
                <button class="btn btn-secondary">Update Product</button>
                <button type="reset" class="btn btn-danger">Cancel</button>
              {:else}
                <button class="btn btn-secondary">Add Product</button>
              {/if}

            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</main>
