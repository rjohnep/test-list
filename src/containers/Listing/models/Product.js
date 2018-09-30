import { Record, Map } from 'immutable';
import uuidv4 from 'uuid/v4';

const VariantRecord = new Record({
  color: null,
  price: null,
  image: null,
});

export default class ProductModel extends new Record({
  id: undefined,
  title: null,
  description: null,
  variants: new Map(),
  category: null,
}) {
  static rawVariantsToRecordsMap(variants) {
    return new Map(
      variants.reduce(
        (acc, item) => (
          {
            ...acc,
            [item.color]: new VariantRecord(item),
          }
        ),
        {},
      )
    );
  }

  constructor(data) {
    const {
      variants,
      ...props
    } = data;

    super({
      ...props,
      id: uuidv4(),
      variants: ProductModel.rawVariantsToRecordsMap(variants),
    });
  }

  get colors() {
    return this.variants.keySeq();
  }
}
