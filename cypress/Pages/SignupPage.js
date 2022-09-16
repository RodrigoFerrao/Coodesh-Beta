class SignupPage {

    fillSignup(cadastro) {

        cy.get('form div a[class="small"]').click();
        cy.title().should('eq', 'Inscreva-se | Coodesh');
        cy.get('#displayName').type(cadastro.name)
        cy.get('#email').type(cadastro.email);
        cy.get('#password').type(cadastro.password);
    }

    checkPrivacy() {

        cy.get('div input[id="privacy.gpdr"]').check({ force: true }).should('be.checked');
        cy.get('div button[type="submit"]').click();
        cy.wait(8000)
    }

    personal(cadastro) {
        cy.title().should('eq', 'Dados pessoais | Coodesh');
        cy.get('#displayName').should('have.value', cadastro.name);
        cy.contains('div [class="d-flex col-6 col-md-2"]', 'QA / Testes').click();
        cy.wait(1400)
        cy.contains('div[class="form-text text-muted"]', 'BDD').click();
        cy.contains('div[class="form-text text-muted"]', 'Unit Test').click();
        cy.contains('div[class="form-text text-muted"]', 'Gherkin Syntax').click();
        cy.get('.rc-slider-mark :nth-child(2)').click({ force: true })
    }

    professionalAndContact(cadastro) {
        cy.get('select[id="preferences.job_search"]').select('Estou empregado mas busco novos desafios');
        cy.get('div [class="flag br"]').should('be.visible');
        cy.get('input[type="tel"]').type(cadastro.number);
        cy.get('input[id*="whatsapp"]').uncheck({ force: true }).should('not.be.checked');
        cy.get('input[id="preferences.other_cities"]').should('be.checked');
        cy.get('input[id="address.city"]').type(cadastro.city);
    }

    submitPersonalInfo() {
        cy.contains('button[type="button"]', 'Próximo').click();
    }

    communitiesRelation() {
        cy.get('div[class="col-12 border-top col-12"]').should('contain', ' Coodesh apoia causas sociais em seus vários níveis de envolvimento')
        cy.contains('span[class*="jsx-8028"]', 'Udemy').click();
        cy.contains('span[class*="jsx-8028"]', 'Alura').click();
        cy.get('img[alt="Udemy"]').should('be.visible');
        cy.get('select[id="communities-0-relation"]').select('Estudando');
        cy.get('img[alt="Alura"]').should('be.visible');
        cy.get('select[id="communities-1-relation"]').select('Ex-aluno');
    }

    socialCauses() {
        cy.get('div[class="col-12 mt-3 form-group col-lg-12 col-12"] i[class="fas fa-chevron-down"]').click();
        cy.contains('div[id*="react-select-3"]', 'Saúde').click();
        cy.wait(200);
        cy.get('div[class="col-12 mt-3 form-group col-lg-12 col-12"] i[class="fas fa-chevron-down"]').click();
        cy.contains('div[id*="react-select-3"]', 'Combate a violência contra mulher').click();
        cy.wait(200);
        cy.get('div[class="col-12 mt-3 form-group col-lg-12 col-12"] i[class="fas fa-chevron-down"]').click();
        cy.contains('div[id*="react-select"]', 'Combate à pobreza').click();
        cy.wait(200);
        cy.get('div[class="col-12 mt-3 form-group col-lg-12 col-12"] i[class="fas fa-chevron-down"]').click();
        cy.contains('div[id*="react-select-3"]', 'Preservação do Meio Ambiente').click();
        cy.wait(200);
    }

    raceGenderSexualOrientatation() {
        cy.get('select[id="race"]').select('Pessoa Branca').should('have.value', 'white');
        cy.get('select[id="gender"]').select('Prefiro não dizer').should('have.value', 'noanswer');
        cy.get('select[id="sexual_orientation"]').select('Prefiro não dizer').should('have.value', 'noanswer');
        cy.get('select[id="disabilities.type"]').select('Nenhuma deficiência').should('have.value', 'none');
    }

    submitAndStartScoreCard() {
        cy.contains('button[class*=" w-100 btn-wide d-flex"]', 'Próximo').click();
        cy.wait(500)
        cy.get('a[href*="/scorecard"]').click();
        cy.wait(500)
    }

    scoreCardMove() {
        cy.get('[class="rc-slider-dot"]:nth-child(2)').click({ multiple: true });
        cy.get('button[class*="btn-primary"]').click();
        cy.wait(200)
        cy.get('[class="rc-slider-dot"]:nth-child(3)').click({ multiple: true });
        cy.get('button[type="submit"]').click();
        cy.wait(500)
    }
    addProfilePhoto(cadastro) {
        cy.title().should('eq', 'Currículo | Coodesh')
        cy.get('i[class="fas fa-camera"]').click()
        cy.wait(150)
        cy.get('input[accept^="image/png"]').attachFile(cadastro.pfp)
        cy.contains('button[class="effects-continue--upload"]', 'Enviar').click()
        cy.wait(5000)
    }
    searchJobs() {
        cy.get('a[role="button"]').click();
        cy.get('a[title="Ver Vagas"]').click()
        cy.wait(1500)
        cy.get('input[name="search"][placeholder="Buscar"]').type('analista qa');
        cy.get('input[name="location"][placeholder="Localização"]').type('Brasil');
        cy.get('button[id="filter-categories"]').click();
        cy.get('input[id="qa"]').check({ force: true }).should('be.checked')
        cy.get('button[id="filter-level"]').click()
        cy.get('input[id="beginner2"]').check({ force: true }).should('be.checked')
        cy.get('button[id="filter-level"]').click()
        cy.contains('button[type="submit"]', 'Buscar').click();
        cy.wait(3000)
        cy.get('h3[class^="h4 font"]').click()
        cy.wait(2000)
    }
    submitSearchJobs() {
        cy.contains('button[type="submit"]', 'Tenho Interesse').click({ force: true })
        cy.wait(7000)
    }
    jobApplicationInfo(cadastro) {
        cy.get('select[id="contact_preference"]').select('Whatsapp').should('have.value', 'whatsapp');
        cy.get('input[id="city"]').should('have.value', cadastro.city);
        cy.get('div[class="flag br"]').should('be.visible');
        cy.get('input[id="other_cities"]').check({ force: true }).should('be.checked')
        cy.get('select[id="home_office"]').select('integral')
        cy.get('input[id="clt"]').should('be.checked')
        cy.get('select[controlid="salary_range.currency"]').select('BRL').should('have.value', 'BRL')
        cy.get('input[id="salary_range.min"]').clear().type('2000').should('have.value', '2000');
        cy.get('input[id="salary_range.max"]').clear().type('6000').should('have.value', '6000');
        cy.get('input[id="linkedin"]').type('https://www.linkedin.com/in/testlinkedin123/');
        cy.get('input[id="github"]').type('https://github.com/');
        cy.get('input[id="custom-file"]').attachFile('curriculumVitae.pdf');
        

    }
    jobSubmitApplicationInfo(){
        cy.wait(5000)
        cy.get('button[class^="btn-sm trans"]').click();
    }
}

export default new SignupPage;
