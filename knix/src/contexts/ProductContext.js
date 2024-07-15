import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DROPDOWN_SORT, FAKE_API_URL, PRODUCTS_CATEGORY_PATH, PRODUCTS_PATH } from '../helpers/constants';

export const ProductContext = createContext();

/**
 * Fetch PRODUCTS based on SORT and CATEGORIES
 */
const ProductProvider = ({ children }) => {
  const [ products, setProducts ] = useState([])
  const [ categories, setCategories] = useState([])
  const [ sort, setSort] = useState(DROPDOWN_SORT[0].key)

  const fetchCategories = async () => {
    const result = await axios.get(FAKE_API_URL + PRODUCTS_CATEGORY_PATH)
    setCategories(result.data)
  }

  const fetchProductsbySort = useCallback(async () => {
    const result = await axios.get(FAKE_API_URL + PRODUCTS_PATH + '?sort=' + sort)
    setProducts(result.data)
  }, [sort])

  // No dependencies
  useEffect(() => {
    fetchCategories() 
  }, [])

  //Only recall if function change dependent of SORT
  useEffect(() => {
    fetchProductsbySort() 
  }, [fetchProductsbySort])

  return <ProductContext.Provider value={{ products, categories, setSort, sort }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
