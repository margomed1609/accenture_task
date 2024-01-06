import 'cypress-wait-until'

Cypress.Commands.add('customClick', selector => {
  cy.waitUntil(
    () =>
    cy
      .get(selector)
      .as('someAlias')
      .then($el => Cypress.dom.isAttached($el)),
    { timeout: 1000, interval: 10 })
      .get('@someAlias')
      .click()
  })

Cypress.Commands.add('clickBySelectorAndText', (selector, text) => {
  cy.get(selector).contains(text).should('be.visible').click()
})

Cypress.Commands.add('isElementExistByText', text => {
  cy.contains(text).should('be.visible')
})

Cypress.Commands.add('isElementVisible', (selector, eq = 0, timeout = 0) => {
  cy.get(selector, { timeout: timeout }).eq(eq).should('be.visible')
})

Cypress.Commands.add('isElementNotExist', (selector, timeout = 0) => {
  cy.get(selector, { timeout: timeout}).should('not.exist')
})

Cypress.Commands.add('isBtnVisibleAndClick', (btnSelector) => {
  cy.get(btnSelector).as('btn').should('be.visible')
  cy.get('@btn').click()
})

Cypress.Commands.add('isTextVisibleAndHaveText', (selector, data, eq = 0, timeout = 0) => {
  cy.get(selector, { timeout: timeout })
    .eq(eq)
    .should('be.visible')
    .invoke('text')
    .then(text => expect(text.trim()).to.be.eq(data))
})

Cypress.Commands.add('selectOption', (selector, option) => cy.get(selector).select(option))

Cypress.Commands.add('clickByEq', (selector, eq) => {
  cy.get(selector).eq(eq).click()
})