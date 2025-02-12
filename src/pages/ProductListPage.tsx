import React from 'react'
import { useSearchParams } from 'react-router'

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSortPriceAsc = (sortValue: string) => {
        // ganti search params `sort` dengan value `price-asc`
        searchParams.set("sort", sortValue)

        setSearchParams(searchParams);
    }

    return (
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li>Sort: {searchParams.get("sort")}</li>
                <li>Name: {searchParams.get("name")}</li>
            </ul>
            <div>
                <button onClick={() => handleSortPriceAsc("price-desc")}>Sort price desc</button>
                <button onClick={() => handleSortPriceAsc("price-asc")}>Sort price asc</button>
                <button onClick={() => handleSortPriceAsc("popular")}>Sort most Popular</button>
            </div>
        </div>
    )
}

export default ProductListPage
