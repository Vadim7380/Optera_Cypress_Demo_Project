class homePagePO {


    //icons and links on nav bar
    logoOptera() { return cy.get('.editable-svg.logo.replaced-svg');}
    bunnerClimateProgramm() { return cy.get('div#simple-banner  span');}
    downloadReportLink() { return cy.get("div#simple-banner a[target='_blank']");}
    platformItem() { return cy.get('.dropdown > .menu-platform > a');}
    solutionsItem() { return cy.get('.dropdown > .menu-solutions > a');}
    inActionItem() { return cy.get('.dropdown > .menu-in-action > a');}
    aboutItem() { return cy.get('[aria-haspopup="true"]');}
    contactItem() { return cy.get('.dropdown > .has-button > a');}
    loginItem() { return cy.get('.dropdown > .login > a');}

    numbersToPower() { return cy.get('.hero-unit-content > .headline');}
    carbonManagment() { return cy.get('.hero-unit-content > .preheadline');}
    learMore() { return cy.get('.js-hero-more-btn.more-button');}

    //Logo list
    bloominBrandsLogo() { return cy.get("img[src='/wp-content/uploads/Bloomin-Brands-Logo_White-Sized.png']");}
    ciscoLogo() { return cy.get("img[src='/wp-content/uploads/Cisco-Logo_White-Sized.png']");}
    dellTechnologiesLogo() { return cy.get("img[src='/wp-content/uploads/Dell-Logo_White-Sized.png']");}
    groveCollaborativeLogo() { return cy.get("img[src='/wp-content/uploads/Grove-Logo_White-Sized.png']");}
    hewlettPackardLogo() { return cy.get("img[src='/wp-content/uploads/HPE-Logo_White-Sized.png']");}
    intelLogo() { return cy.get("img[src='/wp-content/uploads/Intel-Logo_White-Sized.png']");}
    kkrLogo() { return cy.get("img[src='/wp-content/uploads/KKR-Logo_White-Sized.png']");}
    limeLogo()  { return cy.get("img[src='/wp-content/uploads/Lime-Logo_White-Sized.png']");}
    msaLogo()  { return cy.get("img[src='/wp-content/uploads/MSA-Safety-Logo_White-Sized.png']");}
    nVidiaLogo() { return cy.get("img[src='/wp-content/uploads/NVIDIA-Logo_White-Sized.png']");}
    onsemiLogo() { return cy.get("img[src='/wp-content/uploads/Onsemi-Logo_White-Sized.png']");}
    targetLogo() { return cy.get("img[src='/wp-content/uploads/Target-Logo_White-Sized.png']");}
    toastLogo() { return cy.get("img[src='/wp-content/uploads/Toast-Logo_White-Sized.png']");}
    williamsSonomaLogo() { return cy.get("img[src='/wp-content/uploads/Williams-Sonoma-Logo_White-Sized.png']");}
   
    //Top partners statistics
    topCompaniesPartner() { return cy.get("header[class='module header align-left lh-md'] h2[class='headline']");}
    aboutUs() { return cy.get(".button.simple[href='https://opteraclimate.com/about/']");}
    supplyChainSpend() { return cy.get('.module > :nth-child(1) > p');}
    supplyChainSpendData() { return cy.get('.module > :nth-child(1) > h3');}
    metricTonnes() { return cy.get('.module > :nth-child(2) > p');}
    metricTonnesData() { return cy.get('.module > :nth-child(2) > h3');}

    //Platform
    platformHeader() { return cy.get('.tabs-wrapper > .template-header > .preheadline');}
    toolsImpact() { return cy.get('.tabs-wrapper > .template-header > .headline');}
    targetedInsight() { return cy.get('#tab0-label');}
    targetedInsightDescription() { return cy.get('.is-active > .tabs-title-content > .tabs-title-content-description > p');}
    comprehensiveDatabase() { return cy.get('#tab1-label');}
    bulkDataIngestion() { return cy.get('#tab2-label');}
    dataDesigned() { return cy.get('#tab3-label');}
    speedToAction() { return cy.get('#tab4-label');}
    exploreOurPlatformButton() { return cy.get('.tabs-wrapper > .button');};
    targetedInsightImage()   { return cy.get('#tab0 > .inner > img');}
    
    //Solutions
    solutionsHeader()  { return cy.get('.grid-container > .template-header > .preheadline');}
    tackleYourSustainability()  { return cy.get('.grid-container > .template-header > .headline');}

    emissionsCalculationIcon()  { return cy.get('a:nth-of-type(1) > .card-icon.editable-svg.replaced-svg > rect');}
    emissionsCalculationTitle()   { return cy.get('.card-list > :nth-child(1) > .title');}
    emissionsCalculationDescription()  { return cy.get(':nth-child(1) > .description > p');}
    emissionsCalculationlearnMore() { return cy.get('.card-list > :nth-child(1) > .button');};

    esgReportingIcon()  { return cy.get("a:nth-of-type(2) > .card-icon.editable-svg.replaced-svg > rect");};
    esgReportingTitle()   { return cy.get(':nth-child(2) > .title');};
    esgReportingDescription()   { return cy.get(':nth-child(2) > .description > p');};
    esgReportinglearnMore()   { return cy.get('.card-list > :nth-child(2) > .button');};

    decarbonizationIcon()  { return cy.get('a:nth-of-type(3) > .card-icon.editable-svg.replaced-svg > rect');};
    decarbonizationTitle() { return cy.get('.card-list > :nth-child(3) > .title');};
    decarbonizationDescription()  { return cy.get(':nth-child(3) > .description > p');};
    decarbonizationlearnMore()  { return cy.get('.card-list > :nth-child(3) > .button');};

    supplyChainIcon()  { return cy.get('a:nth-of-type(4) > .card-icon.editable-svg.replaced-svg > rect');};
    supplyChainTitle()  { return cy.get(':nth-child(4) > .title');};
    supplyChainDescription()  { return cy.get(':nth-child(4) > .description > p');};
    supplyChainlearnMore()  { return cy.get('.card-list > :nth-child(4) > .button');};

    exploreSolutions()  { return cy.get('.grid-container > .button-wrapper > .button');};

    //Our tools in action
    ourToolsInAction()  { return cy.get('.wrapper > :nth-child(1) > .template-header > .preheadline');}
    
    swiperSlideContent()  { return cy.get('.swiper-slide-visible > .content > .headline > .quote-content > p');}
    swiperSlideName()   { return cy.get('.swiper-slide-visible > .content > .name');}
    swiperSlidePosition()  { return cy.get('.swiper-slide-visible > .content > .position');}

    swiperButtonNext()  { return cy.get('.swiper-button-next');}
    swiperButtonPrev() { return cy.get('.swiper-button-prev');};

    swiperBullet3()  { return cy.get('.swiper-pagination > :nth-child(3)');}
    swiperBullet4() { return cy.get('.swiper-pagination > :nth-child(4)');};

    seeMoreButton() { return cy.get('.wrapper > :nth-child(1) > .button-wrapper > .button');};
    testimonialStatsImage() { return cy.get('.media > .img-wrapper > img');};

    //Industry insight
    industryInsightHeader()  { return cy.get('.related-content__header > .template-header > .preheadline');}
    latestFromOptera()  { return cy.get('.related-content__header > .template-header > .headline');}

    selfAssessmentButton()  { return cy.get('[href="https://optera.involve.me/maturity-curve"] > button');}
    selfAssessmentDate()  { return cy.get('[href="https://optera.involve.me/maturity-curve"] > .content > .info > .data');}
    selfAssessmentEducationTag() { return cy.get('[href="https://optera.involve.me/maturity-curve"] > .content > .info > .tags > li');};
    selfAssessmentTitle() { return cy.get('[href="https://optera.involve.me/maturity-curve"] > .content > .title');};

    newsButton()  { return cy.get('[href="https://opteraclimate.com/direct-use-product-emissions-partnership-rila/"] > button');}
    newsDate()  { return cy.get('[href="https://opteraclimate.com/direct-use-product-emissions-partnership-rila/"] > .content > .info > .data');}
    newsNewsTag() { return cy.get('[href="https://opteraclimate.com/direct-use-product-emissions-partnership-rila/"] > .content > .info > .tags > :nth-child(1)');};
    newsPressReleaseTag() { return cy.get('.tags > :nth-child(2)');}; 
    newsTitle() { return cy.get('[href="https://opteraclimate.com/direct-use-product-emissions-partnership-rila/"] > .content > .title');};

    sustainabilityButton()  { return cy.get('[href="https://opteraclimate.com/trailblazing-corporate-sustainability-programs/"] > button');}
    sustainabilityDate()  { return cy.get('[href="https://opteraclimate.com/trailblazing-corporate-sustainability-programs/"] > .content > .info > .data');}
    sustainabilityOpteraPerspective() { return cy.get('[href="https://opteraclimate.com/trailblazing-corporate-sustainability-programs/"] > .content > .info > .tags > li');};
    sustainabilityTitle() { return cy.get('[href="https://opteraclimate.com/trailblazing-corporate-sustainability-programs/"] > .content > .title');};
    
    signUpTitle()   { return cy.get('.module > h3');}
    nameInput()  { return cy.get('#input_3_1');}
    organizationInput()  { return cy.get('#input_3_3');}
    emailInput() { return cy.get('#input_3_4');};
    subscribeButton() { return cy.get('#gform_submit_button_3');};
    
    whereverHeadline()   { return cy.get('.bg-light-green > .grid-container > .grid-x > .cell > .inner > .header > .headline');}
    scheduleDemoButton()  { return cy.get('.bg-light-green > .grid-container > .grid-x > .cell > .inner > .buttons > .button');}

    //Footer
    logoOpteraFooter()   { return cy.get('.info > [href="https://opteraclimate.com"] > .logo');}
    linkedInLink()  { return cy.get('[href="https://www.linkedin.com/company/opteraclimate/"]');}
    twitterXLink()  { return cy.get('[href="https://twitter.com/opteraclimate/"]');}
    newsletterSignUpTitle() { return cy.get('.form > p');};
    enterEmail() { return cy.get('#input_1_2');};
    subscribeNewsletterButton() { return cy.get('#gform_submit_button_1');};

    actHeader()   { return cy.get(':nth-child(2) > .wrapper > .footer-item__header');}
    actPlatform()  { return cy.get('.footer-item__nav > .menu-platform > a');}
    actSolutions()  { return cy.get('.footer-item__nav > .menu-solutions > a');}
    actInAction() { return cy.get('.footer-item__nav > .menu-in-action > a');};
    
    learnHeader()   { return cy.get(':nth-child(3) > .wrapper > .footer-item__header');}
    learnCaseStudies()  { return cy.get('.menu-case-studies > a');}
    learnTheLatest()  { return cy.get('.footer-item__nav > .menu-the-latest > a');}

    opteraHeader()   { return cy.get(':nth-child(4) > .wrapper > .footer-item__header');}
    opteraAbout()  { return cy.get('.footer-item__nav > .menu-about > a');}
    opteraContact()  { return cy.get('.footer-item__nav > .menu-contact > a');}
    opteraCareers() { return cy.get('.footer-item__nav > .menu-careers > a');};

    socBadge() { return cy.get('.footer-badges > :nth-child(1) > img');};
    isoBadge() { return cy.get('.footer-badges > :nth-child(2) > img');};

    copyrightFooter() { return cy.get('.footer-bottom__copyright > p');};

    termsConditionLink()   { return cy.get('.menu-terms-conditions > a');}
    trustCenterLink()  { return cy.get('.menu-trust-center');}
    loginFooterLink()  { return cy.get('.footer-bottom__navigation > ul > .menu-login');}


}

export default homePagePO