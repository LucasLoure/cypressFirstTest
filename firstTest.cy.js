/// <reference types="cypress" />
import { addDays, format } from 'date-fns'

it("Looking for Holidays", function() {
    let now = new Date()
    let departure = addDays(now, 7)
    let returnDate = addDays(departure, 2)
    cy.visit("https://www.booking.com")
    cy.get('#\\:re\\:').type("Bariloche")
    cy.get('[data-testid="autocomplete-result"]').filter(':contains("Bariloche")').first().click()
    cy.get(`[data-date="${format(departure, 'yyyy-MM-dd')}"]`).click()
})