const PRODUCT_DI_TYPES = {
  ProductRoute: Symbol.for("ProductRoute"),
  ProductController: Symbol.for("ProductController"),
  ProductService: Symbol.for("ProductService"),
  ProductRepository: Symbol.for("ProductRepository"),
};

export default PRODUCT_DI_TYPES;
