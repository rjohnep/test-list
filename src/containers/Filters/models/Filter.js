import { Record, Map } from 'immutable';

export const OptionRecord = new Record({
  value: null,
  active: false,
});

export default class FilterModel extends new Record({
  key: null,
  options: new Map(),
}) {
  static rawOptionsToRecords(options) {
    return new Map(
      options.reduce(
        (acc, item) => (
          {
            ...acc,
            [item]: new OptionRecord({ value: item }),
          }
        ),
        {}
      )
    );
  }

  constructor(data) {
    const {
      options,
      ...props
    } = data;

    super({
      ...props,
      options: FilterModel.rawOptionsToRecords(options),
    });
  }
}
