<script>
  let product = {
    id: "",
    name: "",
    description: "",
    category: "",
    imageURL: ""
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(product);
  };
</script>

<style>

</style>

<main>

  <div class="container">
    <div class="row">
      <div class="col-md-6" />

      <div class="col-md-6">
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

              <button>Save Product</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  </div>

</main>
