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

  filterBy(filters) {
    return this.entities.filter(
      (item) => {
        const isCategoriesFiltering = filters.get('category').size > 0;
        const isFoundInCategories = isCategoriesFiltering && filters.get('category').has(item.category);

        const isColorsFiltering = filters.get('colors').size > 0;
        const isFoundInColors = isColorsFiltering && item.variants.some(
          (variant) => filters.get('colors').has(variant.color)
        );

        if (isCategoriesFiltering && isColorsFiltering) {
          return isFoundInCategories && isFoundInColors;
        }

        return isFoundInCategories || isFoundInColors;
      }
    );
  }
}
