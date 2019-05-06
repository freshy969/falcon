# Re-work of falcon-ecommerce-uikit library

## Goals:

1. Splitting code to separate logical pieces
2. Separating code (UI from business logic, so UI library is not forced)
3. Splitting code to small units so component overriding works at all levels
4. Providing documentation for everything
5. Unifying naming convention

## Existing Queries and Mutation classes:

- RequestPasswordResetMutation
- ResetCustomerPasswordMutation
- ValidatePasswordTokenQuery

---

- EditAddressMutation
- AddAddressMutation
- RemoveAddressMutation
- AddressQuery
- AddressListQuery

---

- BlogPostQuery

---

- AddToCartMutation
- RemoveCartItemMutation
- UpdateCartItemMutation
- ApplyCouponMutation
- CancelCouponMutation
- CartQuery

---

- CategoryProductsQuery

---

- CheckoutShippingMethod
- CheckoutPaymentMethod
- CheckoutLogicInjectedProps
- CheckoutLogicProps
- EstimateShippingMethodsMutation
- SetShippingMutation
- PlaceOrderMutation

---

- CountriesQuery

---

- ChangePasswordMutation

---

- EditCustomerMutation
- CustomerQuery
- IsAuthenticatedQuery

---

- UrlQuery

---

- MenuQuery

---

- MiniAccountQuery

---

- MiniCartQuery

---

- GetOrderQuery
- LastOrderQuery
- OrderListQuery

---

- ProductQuery
- ProductListQuery

---

- CloseSidebarMutation
- OpenSidebarMutation

---

- SignInMutation
- SignOutMutation
- SignUpMutation

---

- SortOrdersQuery

## Existing constants:

- REQUEST_CUSTOMER_PASSWORD_RESET_TOKEN_MUTATION
- RESET_CUSTOMER_PASSWORD_MUTATION
- VALIDATE_PASSWORD_TOKEN_QUERY

---

- EDIT_ADDRESS
- ADD_ADDRESS
- REMOVE_ADDRESS
- GET_ADDRESS
- GET_ADDRESSES_LIST

---

- GET_BACKEND_CONFIG
- SET_LOCALE

---

- GET_BLOG_POST
- GET_BLOG_POSTS

---

- ADD_TO_CART
- REMOVE_CART_ITEM
- UPDATE_CART_ITEM
- APPLY_COUPON
- CANCEL_COUPON
- GET_CART

---

- GET_CATEGORY_PRODUCTS

---

- ESTIMATE_SHIPPING_METHODS
- SET_SHIPPING
- PLACE_ORDER

---

- GET_CONFIG (-> GET_CLIENT_CONFIG)

---

- GET_COUNTRIES

---

- CHANGE_PASSWORD
- EDIT_CUSTOMER
- GET_CUSTOMER
- GET_CUSTOMER_WITH_ADDRESSES
- GET_IS_AUTHENTICATED

---

- GET_URL

---

- GET_MENU

---

- GET_MINI_ACCOUNT

---

- GET_MINI_CART

---

- GET_ORDER
- GET_LAST_ORDER
- GET_ORDER_LIST

---

- GET_PRODUCT
- GET_PRODUCT_LIST

---

- OPEN_SIDEBAR_MUTATION
- CLOSE_SIDEBAR_MUTATION

---

- SIGN_IN_MUTATION
- SIGN_OUT_MUTATION
- SIGN_UP_MUTATION

---

- SORT_ORDERS_QUERY

## Existing TypeScript types and interfaces (without component props definitions):

- RequestPasswordResetVariables
- RequestPasswordResetMutationVariables
- ResetCustomerPasswordVariables

---

- AddressType
- AddressData
- AddressListData

---

- BackendConfig
- SetLocaleData

---

- BlogPostType
- BlogPostQueryVariables
- BlogPostExcerptType
- BlogPagination
- BlogPosts (-> BlogPostList)
- BlogPostsQueryVariables (-> BlogPostListQueryVariables)

---

- CartData

---

- Aggregation
- SelectionType
- AggregationBucket

---

- EstimateShippingMethodsData
- SetShippingData
- PlaceOrderSuccessfulResult
- PlaceOrder3dSecureResult
- PlaceOrder3dSecureField
- PlaceOrderResult

---

- ConfigQuery (-> ClientConfigQuery)

---

- Country
- CountriesData

---

- CreditCardState

---

- Customer
- CustomerQueryData
- IsAuthenticatedQueryData

---

- DynamicUrl
- UrlQueryVariables
- UrlQueryData

---

- EnsureTTIRenderProps

---

- FilterData
- FilterOption
- FilterDataProviderRenderProps
- MultipleFilterProps
- SingleFilterProps

---

- LocaleItem

---

- FieldRenderProps
- FieldProps
- FormContextValue
- FormContext
- FormProps
- FormFieldRenderProps
- FormFieldProps

---

- LocaleContextType
- LocaleContext

---

- Menu
- MenuItem

---

- MiniAccountData

---

- MiniCartData

---

- Order
- OrderItem

---

- OrdersData

---

- Products

---

- SearchState
- SearchContextType
- SearchContext
- SearchConsumer
- SearchProviderProps

---

- SignInModel
- SignInData
- SignOutLogicRenderProps
- SignUpVariables (Variables?)

---

- SortOrderDirection
- SortOrderInput
- SortOrders
- SortOrdersData

## Existing UI components:

- ForgotPasswordForm
- ResetPassword
- InvalidToken
- ResetPasswordForm
- ResetPasswordSuccess

---

- AddressDetails
- AddressCardLayout
- AddressCard
- AddressListLayout

---

- BackendConfigQuery
- SetLocaleMutation

---

- BlogPost
- BlogPostExcerpt
- BlogPostsLayout
- BlogPostsPaginator
- CMSContent

---

- CategoryLayout
- ShowingOutOf
- ShowMore
- SortOrderDropdownLayout
- SortOrderDropdown
- TotalRow

---

- CountrySelector

---

- CreditCard

---

- NotFound

---

- ColorTile
- ColorFilter
- FilterSummary
- FilterDetails
- FilterItemLayout
- FilterItem
- FilterItemList
- FiltersLayout
- FiltersSummaryLayout
- FiltersSummary
- FilterTile
- MultipleFilter
- SingleFilter

---

- CopyrightLayout
- Copyright
- FooterLayout
- FooterSectionsLayout
- FooterSectionLayout
- FooterLink
- LanguageSection
- LocaleSwitcherDropdown
- LocaleSwitcherRenderProps
- NewsletterLayout
- Newsletter

---

- FormErrorSummary
- FormFieldLayout
- FormFieldLabel
- FormFieldError
- FormField
- CheckboxFormFieldLayout
- CheckboxFormField
- RadioFormFieldLayout
- RadioFormField
- FormSubmit
- PasswordRevealInput

---

- BannerLayout
- Banner
- Searchbar
- Header

---

- DateFormat
- Price

---

- MenuNavbar

---

- AccountIcon
- ForgotPassword
- MiniAccount
- MiniFormLayout
- SignIn
- SignUp

---

- MiniCart
- MiniCartIcon

---

- OnlineStatus

---

- OrderItemSummary

---

- NoOrders
- OrderList
- OrderListLayout
- OrderListItem
- OrderListHeader

---

- Option
- ProductConfigurableOptions
- ProductLayout
- ProductDetailsLayout
- Product
- ProductGallery
- NoProductImage
- ProductMeta
- EmptyProductListLayout
- EmptyProductList
- ProductCardLayout
- ProductCard
- ProductList
- Loader

---

- Responsive

---

- Sidebar

---

- ForgotPasswordTrigger
- SignInForm
- SignInIcon
- SignUpForm

---

- AppLayout
- Breadcrumbs
- FixCenteredLayout
- TwoColumnsLayout
- TwoStepWizard

## Existing "business level" components:

- CheckoutLogic
- DynamicRoute
- EnsureTTI
- FiltersDataProvider
- LocaleSwitcher
- Field
- Form
- LocaleProvider
- ProductForm (it's not exported outside)
- ProductConfigurator
- Query
- OnlyUnauthenticatedRoute
- ProtectedRoute
- Router
- SearchProvider
- SignOutLogic
- SortOrdersProvider

## NOTES

- `RenderProps` vs `InjectedProps` (e.g. `EnsureTTIRenderProps` and `CheckoutLogicInjectedProps`)
- `Logic` vs `Provider` (e.g. `CheckoutLogic` and `FiltersDataProvider`)
- `ContextType` vs `ContextData` (e.g. `LocaleContextType` is a definition of context data so in that case `LocalContextData` seems to be a better choice)
- `SomethingLayout` components (created usually with `themed()` call or as React.SFC) vs `itemSomethingLayout` properties - defined as props of `DefaultThemeProps` type - both have "Layout" in the name and that's confusing. Examples: `MiniFormLayout` (React.SFC), `AddressCardLayout` (`themed()`) and `orderItemSummaryLayout` (const of `DefaultThemeProps` type)
- inconsistencies between query names and its data (`OrderListQuery` returns `OrdersData`, while it should be `OrderListData`)

## Suggested naming for packages:

- `falcon-ui-widgets` (contains all high level UI components for both blog and shop)
- `falcon-shop-data` (contains gql definitions, Queries and Mutations for shop)
- `falcon-blog-data` (contains gql definitions, Queries for blog)
- what about "business level" components?
- what about TS typings (probably placing those in one file within the package that uses those is the best option to keep things simple)