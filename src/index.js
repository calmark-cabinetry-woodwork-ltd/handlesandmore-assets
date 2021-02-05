import { BaseElement } from "./components/BaseElement.js"
import { ShopSubcategoryList } from "./components/ShopSubcategoryList.js"
import { ShopSubcategoryTile } from "./components/ShopSubcategoryTile.js"
import { ShopCategoryView } from "./components/ShopCategoryView.js"
import { ShopCategoryProduct } from "./components/ShopCategoryProduct.js"
import { ShopCategoryFilter } from "./components/ShopCategoryFilter.js"
import { didNavigate } from "./components/utils.js"

window.addEventListener("popstate", () => didNavigate())

customElements.define("base-element", BaseElement)
customElements.define("shop-subcategory-list", ShopSubcategoryList)
customElements.define("shop-subcategory-tile", ShopSubcategoryTile)
customElements.define("shop-category-view", ShopCategoryView)
customElements.define("shop-category-product", ShopCategoryProduct)
customElements.define("shop-category-filter", ShopCategoryFilter)
