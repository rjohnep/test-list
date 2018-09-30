import { Record, Map, Set } from 'immutable';

import FilterModel from './Filter';

export default class FiltersModel extends new Record({
  entities: new Map(),
  active: new Map(),
}) {
  static rawFiltersToEntities(rawFilters) {
    return new Map(
      rawFilters.reduce(
        (acc, item) => (
          {
            ...acc,
            [item.key]: new FilterModel(item),
          }
        ),
        {},
      )
    );
  }

  static factoryActiveModel(entities) {
    return new Map(
      entities.keySeq().reduce(
        (acc, key) => (
          {
            ...acc,
            [key]: new Set(),
          }
        ),
        {}
      )
    );
  }

  constructor(filters) {
    const entities = FiltersModel.rawFiltersToEntities(filters);
    const active = FiltersModel.factoryActiveModel(entities);

    super({
      entities,
      active,
    });
  }

  setFilter(filter) {
    return this.withMutations(
      (state) => {
        state.updateIn(
          ['entities', filter.key, 'options', filter.option],
          (option) => option.set('active', true)
        );

        state.updateIn(
          ['active', filter.key],
          (set) => set.add(filter.option)
        );
      }
    );
  }


  removeFilter(filter) {
    return this.withMutations(
      (state) => {
        state.updateIn(
          ['entities', filter.key, 'options', filter.option],
          (option) => option.set('active', false)
        );

        state.updateIn(
          ['active', filter.key],
          (set) => set.delete(filter.option)
        );
      }
    );
  }

  get hasActiveFilters() {
    return this.active.size > 0
      && this.active.valueSeq().some((set) => set.size > 0);
  }
}
