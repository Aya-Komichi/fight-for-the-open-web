(() => {
  var lang =
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    navigator.systemLanguage;
  // convert to lower if not undefined
  if (lang?.toLowerCase) {
    lang = lang.toLowerCase();
  }
  const home_url =
    'https://github.com/Young-Lord/fight-for-the-open-web/tree/main/README.md';
  const translations = {
    'zh-cn': {
      alert: '检测到 WEI，被 Google 操控的对抗开放互联网的协议。请使用 Firefox 浏览器访问本网站。',
    },
    'en-us': {
      alert:
        'Detected Web Environment Integrity API, a protocol destroying the whole Internet. Use Firefox to access this website and help keep the Internet open.',
    },
    'uk-ua': {
      alert:
        'Виявлено використання Web Environment Integrity API - протоколу, що руйнує весь Інтернет. Використовуйте Firefox, щоб отримати доступ до цього веб-сайту та допомогти зберегти Інтернет відкритим.',
    },
    'fr-fr': {
      alert:
        'Détection de l\'API Web Environment Integrity, un protocole détruisant l\'ensemble d\'Internet. Utilisez Firefox pour accéder à ce site web et aidez à maintenir l\'Internet ouvert.',
    },
	'tr': {
      alert:
        'Web Environment Integrity API\'sı tespit edildi, bu API İnternet\'in tamamını yok eder. Bu siteye erişmek için Firefox kullanın ve İnternet\'in açık kalmasına yardımcı olun.'
    },
  };
  // detect Web Environment Integrity API
  if (navigator.getEnvironmentIntegrity !== undefined) {
    // fuck it
    alert((translations[lang]??translations['en-us'])['alert']);
    window.location.href = home_url;
  }
})();
