class HomePage {

    browserSettings(){
    cy.viewport(1440, 900)
    cy.visit('https://beta.coodesh.com/')
    }

    validateHomePage(){
    cy.get('button[id="onetrust-accept-btn-handler"]').click();
    cy.get('h1[class="mb-0 font-weight-normal d-none d-lg-block display-4"]').should('be.visible');
    cy.get('g image[id="SVGMainHeroImg1"]').should('be.visible');
    cy.title().should('eq','Coodesh: Avaliar e Contratar Desenvolvedor | Vagas para DEVs')
    cy.get('a button[class = "transition-3d-hover btn btn-primary btn-sm"]').click();
    }
}
export default new HomePage;