import { Record, List } from 'immutable';

import ProductModel from './Product';

export default class ListingModel extends new Record({
  entities: new List(),
  loading: false,
}) {
  static rawProductsToEntities(rawProducts) {
    return new List(
      rawProducts.map((item) => new ProductModel(item))
    );
  }

  /**
   *
   * @param products is the List of ProductModel records
   */
  addProducts(products) {
    return this.set('entities', List.of(...products));
  }

  setLoader(value) {
    return this.set('loading', value);
  }

  get isLoading() {
    return this.loading;
  }

  filterBy(filter) {
    return this.entities.filter((item) => item.category === filter);
  }
}
