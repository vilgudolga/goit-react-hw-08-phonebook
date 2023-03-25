export const selectContacts = (state) => state.contacts;
export const selectFilters = (state) => state.filters.filters;

export const selectFilteredContacts = (state) => {
    return state.contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(state.filters.filters.toLowerCase())
    );
};

export const selectLoading = state => {
  return state.contacts.isLoading;
};