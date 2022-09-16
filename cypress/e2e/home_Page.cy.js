import homepage from '../Pages/HomePage'
import signupPage from '../Pages/signupPage'
const { faker } = require('@faker-js/faker');


describe('Teste de HomePage', () => {


  it('HomePage deve carregar completamente', () => {
    homepage.browserSettings()
    homepage.validateHomePage()
  })
})

describe('Teste de cadastro', () => {


  it('Cadastro concluido', () => {
    var cadastro = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: '123456Pizza*',
      number: faker.phone.number('119########'),
      city: 'Campinas',
      pfp: 'profilePhoto.jpg',
    }

    homepage.browserSettings();
    homepage.validateHomePage();
    signupPage.fillSignup(cadastro);
    signupPage.checkPrivacy();
    signupPage.personal(cadastro);
    signupPage.professionalAndContact(cadastro);
    signupPage.submitPersonalInfo();
    signupPage.communitiesRelation();
    signupPage.socialCauses();
    signupPage.raceGenderSexualOrientatation();
    signupPage.submitAndStartScoreCard();
    signupPage.scoreCardMove();
    signupPage.addProfilePhoto(cadastro);
    signupPage.searchJobs();
    signupPage.submitSearchJobs();
    signupPage.jobApplicationInfo(cadastro);
    signupPage.jobSubmitApplicationInfo();



  })
})

