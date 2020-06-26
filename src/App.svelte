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
  }

</script>

<style>

</style>

<main>

  <form on:submit={submitHandler}>
    <input
      bind:value={product.name}
      type="text"
      placeholder="Product Name"
      id="product-name" />
    <textarea
      bind:value={product.description}
      id="product-description"
      rows="3"
      placeholder="Product Description" />
    <select id="product-category" bind:value={product.category}>
      <option value="notebooks">Notebooks</option>
      <option value="peripherals">Peripherals</option>
      <option value="components">Components</option>
    </select>
    <input
      bind:value={product.imageURL}
      type="url"
      id="product-img-url"
      placeholder="https://example.com/image.jpg" />
    <button>Save Product</button>
  </form>

</main>
