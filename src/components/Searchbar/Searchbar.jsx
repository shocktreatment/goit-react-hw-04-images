import { useState, memo } from 'react';
import PropTypes from 'prop-types';

import s from './search.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ search });
    setSearch('');
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form
          className={s.SearchForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            autoFocus
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            required
          />
        </form>
      </header>
    </>
  );
};

export default memo(Searchbar);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
