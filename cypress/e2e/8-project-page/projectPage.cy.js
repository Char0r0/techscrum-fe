/// <reference types="cypress" />
import projectsData from '../../fixtures/projects.json';
import projectsDeletedData from '../../fixtures/projectsDeleted.json';

describe('Project page', () => {
  beforeEach(() => {
    let projectList = projectsData;
    cy.intercept('GET', '**/projects', projectList).as('fetch-projects');
    cy.intercept('DELETE', '**/projects/*', (req) => {
      const url = req.url;
      const urlParams = url.split('/');
      const id = urlParams[urlParams.length - 1];
      const newProjectList = [];
      projectList.forEach((project) => {
        if (project.id !== id) newProjectList.push(project);
      });
      projectList = newProjectList;
      return projectList;
    }).as('delete-projects');
    cy.visit('/v2/login');
    cy.login('coffeetsang20@gmail.com', 'wendy123');
    cy.wait('@fetch-projects');
  });

  it('should search projects and find it in the project list', () => {
    cy.get('[data-testid="search-btn"]').click();
    cy.get('[data-testid="search-input"]').click();
    cy.get('[data-testid="search-input"]').clear();
    cy.get('[data-testid="search-input"]').type('123');
    cy.get('[data-testid="search-result"]').should('have.length', 2);
    cy.get('[data-testid="search-result"]').then((items) => {
      expect(items[0]).to.contain.text('123');
      expect(items[1]).to.contain.text('12333');
    });
  });

  it('check the detail of a project', () => {
    cy.get('[data-testid="project-name"]').eq(1).click();
    cy.url().should('include', '62ea00a670f56ef135b5a579');
  });

  it('delete a project', () => {
    cy.get('[data-testid="project-expand-button"]').eq(1).click();
    cy.get('[data-testid="project-delete"]').click();
    cy.get('[data-testid="confirm-delete"]').click();
    cy.intercept('GET', '**/projects', projectsDeletedData).as('get-deleted-projects');
    cy.wait('@delete-projects');
    cy.wait('@get-deleted-projects');
    cy.get('[data-testid="project-name"]').should('have.length', 3);
    cy.get('[data-testid="project-name"]').then((items) => {
      expect(items[0]).to.contain.text('Evan');
      expect(items[1]).to.contain.text('EmilTestABCD');
      expect(items[2]).to.contain.text('12333');
    });
  });
});
