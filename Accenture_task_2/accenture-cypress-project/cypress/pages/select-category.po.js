import { selectCategoryConst, itemPageConst, sortingDropdown } from '../constants/select-category'

export class ItemSelection {
  megaMenu = new MegaMenu()
  itemPage = new ItemPage()
  cartModal = new AddedToCartModal()
  cartPage = new CartPage()
}

export class MegaMenu {
  dressesBtn = '#dresses'
  title = '.breadcrumb-title h1'
  subcategiriesList = '#refinement-category'
  
  clickDressesBtn() {
    cy.clickBySelectorAndText(this.dressesBtn, selectCategoryConst.dresses)
  }

  userIsOnSelectedCategoryPage(category) {
    cy.isTextVisibleAndHaveText(this.title, category)
  }

  selectTheSubcatigory(subcatigory) {
    cy.clickBySelectorAndText(this.subcategiriesList, subcatigory)
  }

  userIsOnSelectedSubcategoryPage(subcategory) {
    cy.isTextVisibleAndHaveText(this.title, subcategory)
  }
}

export class ItemPage {
  title = '#product-results-view h1'
  sortingDropdown = '#sort-order'
  spinner = '.spinner'
  firstItem = '.product-tile-col[data-index="0"]'
  secondItem = '.product-tile-col[data-index="1"]'
  sizeBtn = '.select-size-wrapper button'
  addToBagBtn = '.add-to-cart'
  navigationPages = '.breadcrumb-row-1 li'

  verifyTitle(title) {
    cy.isTextVisibleAndHaveText(this.title, title, 5000)
  }

  sortByHighestPrice() {
    cy.selectOption(this.sortingDropdown, sortingDropdown.priceHighToLow)
  }

  waitForPageLoading() {
    cy.isElementNotExist(this.spinner, 30000)
  }

  clickOnTheFirstItem() {
    cy.customClick(this.firstItem)
  } 

  clickOnTheSecondItem() {
    cy.customClick(this.secondItem)
  } 

  clickAddToBagBtn() {
    cy.isBtnVisibleAndClick(this.addToBagBtn)
  }

  chooseSize() {
    cy.get(this.sizeBtn).then(buttons => {
      for(let i = 0; i <= buttons.length; i++) {
          if (!buttons[i].classList.contains('disabled-size')) {
            buttons[i].click()
            return
          }
        }
    })
  }

  navigateToPreviousPage(eq) {
    cy.clickByEq(this.navigationPages, eq)
  }
}

export class AddedToCartModal {
  crossIcon = '.modal-body .icon-close-smallx'
  modal = '.add-to-cart-popup'

  cancelItsInCartModalIfExist() {
    cy.get('body').then(body => {
      if (body.find(this.modal).length > 0 && body.find(this.modal).classList.contains('show')) {
        cy.isBtnVisibleAndClick(this.crossIcon)
      }
    })
  }
}

export class CartPage {
  cartIcon = '.minicart-total'
  title = '.number-of-items'
  cartItems = '.cart-card'

  numberOfAddedToCartItemsDisplayed(number) {
    cy.isTextVisibleAndHaveText(this.cartIcon, number, 0, 10000)
  }

  clickOnCartIcon() {
    cy.isBtnVisibleAndClick(this.cartIcon)
  }

  checkTitle(itemsNumber) {
    cy.isTextVisibleAndHaveText(this.title, `Shopping Bag (${itemsNumber} items)`)
  }

  checkItemsNumberInCart(number) {
    cy.get(this.cartItems).its('length').should('eq', number)
  }
}