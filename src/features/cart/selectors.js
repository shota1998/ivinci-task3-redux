export const getItemState = (store) => store.items;

export const getItemList = (store) =>
  getItemsState(store) ? getItemsState(store).allIds : [];

export const getItemById = (store, id) =>
  getItemsState(store) ? { ...getItemsState(store).byIds[id], id } : {};

export const getItems = (store) =>
  getItemList(store).map((id) => getItemById(store, id));
