describe('Frontend loads', () => {
  it('visits the app', () => {
    cy.request('http://localhost:5174').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('Frontend loads', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5174')
  })
})

describe('Check h1 tag on app has "You did it!"', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5174')
    cy.get('h1').should('have.text', 'You did it!')
  })
})

describe('Check if button is visible', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5174')
    cy.get('.button').should('be.visible')
  })
})
