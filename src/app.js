export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Apply';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' },
      { route: 'applicationform', name: 'applicationForm', moduleId: 'applicationForm',   nav: true, title: 'Application Form' },
      { route: 'confirmationlist', name: 'confirmationList', moduleId: 'confirmationList',   nav: true, title: 'Confirmation List' }
    ]);
  }
}