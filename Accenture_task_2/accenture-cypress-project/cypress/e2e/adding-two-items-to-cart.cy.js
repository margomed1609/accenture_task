import { ItemSelection } from '../pages/select-category.po'
import { selectCategoryConst } from '../constants/select-category'

const item = new ItemSelection()
const baseUrl = 'https://www.showpo.com/us/'

describe('Adding two the most expensive items to the cart', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions()
    cy.visit(baseUrl)
  })

  it('should be able to proceed to "Dresses" category', () => {
    item.megaMenu.clickDressesBtn()
    item.megaMenu.userIsOnSelectedCategoryPage(selectCategoryConst.dresses)
  })

  it('should be able to select the "Mini Dresses" subcategory', () => {
    item.megaMenu.selectTheSubcatigory(selectCategoryConst.subcategory)
    item.megaMenu.userIsOnSelectedSubcategoryPage(selectCategoryConst.miniDresses)
  })

  it('should be able to sort items by price (High To Low)', () => {
    item.itemPage.sortByHighestPrice()
    item.itemPage.waitForPageLoading()
  })

  it('should be able to add first item to the cart', () => {
    item.itemPage.clickOnTheFirstItem()
    item.itemPage.chooseSize(0)
    item.itemPage.clickAddToBagBtn()
    item.cartModal.cancelItsInCartModalIfExist()
  })

  it('should be able to add second item to the cart', () => {
    item.itemPage.navigateToPreviousPage(1)
    item.megaMenu.selectTheSubcatigory(selectCategoryConst.subcategory)
    item.itemPage.sortByHighestPrice()
    item.itemPage.waitForPageLoading()

    item.itemPage.clickOnTheSecondItem()
    item.itemPage.chooseSize(0)
    item.itemPage.clickAddToBagBtn()
    item.cartModal.cancelItsInCartModalIfExist()
  })

  it('should be able to have two goods added to the cart', () => {
    item.cartPage.clickOnCartIcon()
    item.cartPage.checkTitle(2)
    item.cartPage.numberOfAddedToCartItemsDisplayed('2')
    item.cartPage.checkItemsNumberInCart(2)
  })

  after(() => {
    cy.log('All tests have finished. Closing the browser.');
    cy.window().then((win) => win.close());
  })
})
