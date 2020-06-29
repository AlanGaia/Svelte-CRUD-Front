<script>

import {v4} from 'uuid'

  // Example product list 
  let products = [
    {
      id: 1,
      name: "HP Pavilion Notebook",
      description: "HP LAPTOP i3 Generation Intel",
      category: "notebook"
    },
    {
      id: 2,
      name: "HP G6 250 Notebook",
      description: "HP LAPTOP i5 Generation Intel",
      category: "notebook"
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

  // Add product function on submit
  const submitHandler = e => {
    e.preventDefault();
    const newProduct = {
      id: v4(),
      name: product.name,
      description: product.description,
      category: product.category,
      imageURL: product.imageURL
    }
    //Add product to the list
    products = products.concat(newProduct)
    //Reset add Product Form
    e.target.reset();
    
    
  };

  // Delete product by ID function
  const deleteProduct = id => {
    products = products.filter( product => product.id !== id)
  }

  // Edit product function
  const editProduct = product => {
    console.log(product);
    
  }

</script>

<style>

</style>

<main>

  <div class="container mt-3">
    <div class="row">

      <!-- Product List -->
      <div class="col-md-6 mt-5">
        {#each products as product}
          <div class="card mb-2">
            <div class="row">
              <div class="col-md-4">
              {#if product.imageURL}
                <img src="{product.imageURL}" alt="" class="img-fluid p-2" />
              {:else}
                <img src="images/no-product-image.png" alt="" class="img-fluid p-2" />
              {/if}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5>
                    <strong>{product.name}</strong>
                    <span>
                      <small>{product.category}</small>
                    </span>
                  </h5>
                  <p class="card-text">{product.description}</p>
                  <button on:click={editProduct(product)} class="btn btn-warning">Edit</button>
                  <button on:click={deleteProduct(product.id)} class="btn btn-danger">Delete</button>
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
            <form on:submit={submitHandler}>
              <h3>Add a product</h3>
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
                  <option value="notebooks">Notebooks</option>
                  <option value="peripherals">Peripherals</option>
                  <option value="components">Components</option>
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

              <button class="btn btn-secondary">Add Product</button>

            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</main>
