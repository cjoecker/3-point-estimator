/// <reference types="cypress" />
/* eslint-disable no-undef*/

context('TasksTable', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('add task and calculates value', () => {
		cy
			.getTestElement('taskInput')
			.type('task 1')
			.getTestElement('optimistic time input')
			.type('1')
			.getTestElement('most likely time input')
			.type('2.5')
			.getTestElement('pessimistic time input')
			.type('3');
		cy.contains('3.33');

		cy.getTestElement('addTask').click();
		cy
			.getTestElement('taskInput')
			.eq(1)
			.type('task 2')
			.getTestElement('optimistic time input')
			.eq(1)
			.type('2')
			.getTestElement('most likely time input')
			.eq(1)
			.type('3')
			.getTestElement('pessimistic time input')
			.eq(1)
			.type('4');
		cy.contains('6.75');

		cy.getTestElement('probability').click();
		cy.getTestElement('deviation4').click();
		cy.contains('7.22');

		cy.getTestElement('deleteTask').eq(0).click();
		cy.getTestElement('taskInput').its('length').should('eq', 1);

		cy.getTestElement('taskInput').type('1');
	});
});
