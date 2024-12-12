


describe('My First Test', () => {

    
    it('Verify title-positive', () => {
        //STEPS
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      cy.title().should('eq','OrangeHRM')


    })
    it('Verify title-negative', () => {
        //STEPS
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      cy.title().should('eq','OrangeHRM145')


    })

  })

  
