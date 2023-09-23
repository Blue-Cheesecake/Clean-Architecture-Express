const PRODUCT_DI_TYPES = {
  ProductRoute: Symbol.for("ProductRoute"),
  ProductController: Symbol.for("ProductController"),
  ProductService: Symbol.for("ProductService"),
  IProductRepository: Symbol.for("IProductRepository"),
};

export default PRODUCT_DI_TYPES;
