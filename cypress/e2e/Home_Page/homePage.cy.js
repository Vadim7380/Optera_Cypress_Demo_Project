import homePagePO from './homePagePO.cy.js';

describe ('Home Page', ()=>{
   
    const page = new homePagePO();
    const User = Cypress.env ('User');
    const Password = Cypress.env ('Password');

    beforeEach('Page Open', ()=>{

        cy.visit('https://opteraclimate.com/');
        
    })

    it ('Icons and links on nav bar should contain correct element', ()=>{

      page.logoOptera().should('be.visible');
      page.bunnerClimateProgramm().should('be.visible');
      page.downloadReportLink().should('be.visible');
      page.platformItem().should('be.visible');
      page.solutionsItem().should('be.visible');
      page.inActionItem().should('be.visible');
      page.aboutItem().should('be.visible'); 
      page.contactItem().should('be.visible');
      page.loginItem().should('be.visible');

      page.numbersToPower().should('be.visible');
      page.numbersToPower().should('contain', 'Numbers to power climate action');
      page.carbonManagment().should('be.visible');
      page.carbonManagment().should('contain', 'Carbon Management & Accounting Software');
      page.learMore().should('be.visible');

    })

    it ('Logo list should contain correct element', ()=>{

      page.bloominBrandsLogo().should('be.visible');
      page.ciscoLogo().should('be.visible');
      page.dellTechnologiesLogo().should('be.visible');
      page.groveCollaborativeLogo().should('be.visible');
      page.hewlettPackardLogo().should('be.visible');
      page.intelLogo().should('be.visible');
      page.kkrLogo().should('be.visible');
      page.limeLogo().should('be.visible');
      page.msaLogo().should('be.visible');
      page.nVidiaLogo().should('be.visible');
      page.onsemiLogo().should('be.visible');
      page.targetLogo().should('be.visible');
      page.toastLogo().should('be.visible');
      page.williamsSonomaLogo().should('be.visible');

    })  

    it ('Top partners statistics should contain correct element', ()=>{

      page.topCompaniesPartner().should('be.visible');
      page.topCompaniesPartner().should('contain', 'Top companies partner with Optera to ');
      page.aboutUs().should('be.visible');
      page.supplyChainSpend().should('be.visible');
      page.supplyChainSpendData().should('be.visible');
      page.metricTonnes().should('be.visible');
      page.metricTonnesData().should('be.visible');

    })  

    it ('Platform should contain correct element', ()=>{

      page.platformHeader().should('be.visible');
      page.toolsImpact().should('be.visible');
      page.toolsImpact().should('contain', 'The tools you need to make an impact');
      page.targetedInsight().should('be.visible');
      page.targetedInsightDescription().should('be.visible'); 
      page.comprehensiveDatabase().should('be.visible')
      page.bulkDataIngestion().should('be.visible');
      page.dataDesigned().should('be.visible');
      page.speedToAction().should('be.visible'); 
      page.exploreOurPlatformButton().should('be.visible') 
      page.targetedInsightImage().should('be.visible');

    })
    
    it ('Solutions should contain correct element', ()=>{

      page.solutionsHeader().should('be.visible');
      page.tackleYourSustainability().should('be.visible'); 
      page.tackleYourSustainability().should('contain', 'Tackle your sustainability challenges head on.');

      page.emissionsCalculationIcon().should('be.visible');
      page.emissionsCalculationTitle().should('be.visible');
      page.emissionsCalculationDescription().should('be.visible');
      page.emissionsCalculationlearnMore().should('be.visible');

      page.esgReportingIcon().should('be.visible');
      page.esgReportingTitle().should('be.visible');
      page.esgReportingDescription().should('be.visible');
      page.esgReportinglearnMore().should('be.visible');

      page.decarbonizationIcon().should('be.visible');
      page.decarbonizationTitle().should('be.visible');
      page.decarbonizationDescription().should('be.visible');
      page.decarbonizationlearnMore().should('be.visible');

      page.supplyChainIcon().should('be.visible');
      page.supplyChainTitle().should('be.visible');
      page.supplyChainDescription().should('be.visible');
      page.supplyChainlearnMore().should('be.visible');

      page.exploreSolutions().should('be.visible'); 

    })

    it ('Our tools in action should contain correct element', ()=>{

      page.ourToolsInAction().should('be.visible');

      page.swiperSlideContent().should('be.visible');
      page.swiperSlideContent().should('contain', 'Optera has helped us centralize');
      page.swiperSlideName().should('be.visible');
      page.swiperSlideName().should('contain', 'Hiba Mooney');
      page.swiperSlidePosition().should('be.visible');
      page.swiperSlidePosition().should('contain', 'Global Lead for Climate and Environmental Strategy | HPE');
  
      page.swiperButtonNext().click();

      page.swiperSlideContent().should('contain', 'Optera has been instrumental');
      page.swiperSlideName().should('contain', 'Alena Bennett Turner');
      page.swiperSlidePosition().should('contain', 'Procurement Emissions Program Manager');

      page.swiperBullet3().click();

      page.swiperSlideContent().should('contain', 'ESG Insights has');
      page.swiperSlideName().should('contain', 'Amanda Kardosh');
      page.swiperSlidePosition().should('contain', 'Senior Director, ESG | ');

      page.swiperBullet4().click();

      page.swiperSlideContent().should('contain', 'Managing all of our scope 1');
      page.swiperSlideName().should('contain', 'Alexandra Bede Jordan');
      page.swiperSlidePosition().should('contain', 'Sr. Sustainability Manager | Grove');

      page.swiperButtonPrev().should('be.visible');

      page.seeMoreButton().should('be.visible')
      page.testimonialStatsImage().should('be.visible');

    })
    
    it ('Industry insight should contain correct element', ()=>{

      page.industryInsightHeader().should('be.visible');
      page.latestFromOptera().should('be.visible'); 
      page.latestFromOptera().should('contain', 'The latest from Optera experts');

      page.selfAssessmentButton().should('be.visible');
      page.selfAssessmentDate().should('be.visible');
      page.selfAssessmentEducationTag().should('be.visible');
      page.selfAssessmentTitle().should('be.visible');
      page.selfAssessmentTitle().should('contain', 'Climate Program Maturity Curve | Self-Assessment');

      page.newsButton().should('be.visible');
      page.newsDate().should('be.visible');
      page.newsNewsTag().should('be.visible');
      page.newsPressReleaseTag().should('be.visible');
      page.newsTitle().should('be.visible');
      page.newsTitle().should('contain', 'RILA and Optera to develop a framework for more consistent direct-use product emissions reporting');

      page.educationButton().should('be.visible');
      page.educationDate().should('be.visible');
      page.educationEducationTag().should('be.visible');
      page.educationTitle().should('be.visible');
      page.educationTitle().should('contain', 'The Climate Program Maturity Curve');

      page.signUpTitle().should('be.visible');
      page.nameInput().should('be.visible');
      page.organizationInput().should('be.visible');
      page.emailInput().should('be.visible');
      page.subscribeButton().should('be.visible');


      page.whereverHeadline().should('be.visible');
      page.whereverHeadline().should('contain', 'Wherever you are in meeting your ');
      page.scheduleDemoButton().should('be.visible');

    })
    
    it ('Footer should contain correct element', ()=>{

      page.logoOpteraFooter().should('be.visible');
      page.linkedInLink().should('be.visible');
      page.twitterXLink().should('be.visible');
      page.newsletterSignUpTitle().should('be.visible');
      page.enterEmail().should('be.visible');
      page.subscribeNewsletterButton().should('be.visible');

      page.actHeader().should('be.visible');
      page.actPlatform().should('be.visible');
      page.actSolutions().should('be.visible');
      page.actInAction().should('be.visible');

      page.learnHeader().should('be.visible');
      page.learnCaseStudies().should('be.visible');
      page.learnTheLatest().should('be.visible');

      page.opteraHeader().should('be.visible');
      page.opteraAbout().should('be.visible');
      page.opteraContact().should('be.visible');
      page.opteraCareers().should('be.visible');

      page.socBadge().should('be.visible');
      page.isoBadge().should('be.visible');

      page.copyrightFooter().should('be.visible');


      page.termsConditionLink().should('be.visible');
      page.trustCenterLink().should('be.visible');
      page.loginFooterLink().should('be.visible');

    })

})