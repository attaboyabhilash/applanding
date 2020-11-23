import React, { useContext } from "react"
import { Select } from "antd"
import products from "../helpers/products"
import { ReviewContext } from "../contexts/reviewContext"

function Header() {
    const { Option } = Select

    const { selectReview, sortReviewNew, sortReviewOld } = useContext(
        ReviewContext
    )

    const handleSelectChange = (value) => {
        selectReview(value)
    }

    const handleSortChange = (value) => {
        if (value === "newest") {
            sortReviewNew()
        } else {
            sortReviewOld()
        }
    }

    return (
        <div className="header">
            <div className="select-product">
                <label htmlFor="dropdown">Select Product</label>
                <Select
                    defaultValue="allProducts"
                    style={{ width: "100%" }}
                    onChange={handleSelectChange}
                >
                    <Option value="allProducts">
                        {products("allProducts")}All Products
                    </Option>
                    <Option value="com.google">
                        {products("com.google")}google
                    </Option>
                    <Option value="com.flipkart">
                        {products("com.flipkart")}flipkart
                    </Option>
                    <Option value="com.amazon">
                        {products("com.amazon")}amazon
                    </Option>
                    <Option value="com.myntra">
                        {products("com.myntra")}myntra
                    </Option>
                </Select>
            </div>
            <div className="sorting-translate">
                <div className="sorting">
                    <label>Sorting</label>
                    <Select
                        size="small"
                        defaultValue="newest"
                        style={{ width: "100%" }}
                        onChange={handleSortChange}
                    >
                        <Option value="newest">Newest First</Option>
                        <Option value="oldest">Oldest First</Option>
                    </Select>
                </div>
                <div className="translate">
                    <label>Translation</label>
                    <Select
                        size="small"
                        defaultValue="english"
                        style={{ width: "100%" }}
                    >
                        <Option value="english">English</Option>
                        <Option value="hindi">Hindi</Option>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default Header
