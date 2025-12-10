// All game texts in Ukrainian and French
export const translations = {
    uk: {
        // Common
        'back': 'Назад',
        'next': 'Далі',
        'continue': 'Продовжити',
        'start': 'Почати',
        'loading': 'Завантаження...',

        // HomePage
        'home.title': '🎮 Пригода фінансової грамотності',
        'home.newGame': 'Нова гра',
        'home.continueGame': 'Продовжити гру',

        // Auth
        'auth.signIn': 'Вхід',
        'auth.signUp': 'Реєстрація',
        'auth.email': 'Електронна пошта',
        'auth.password': 'Пароль',
        'auth.confirmPassword': 'Підтвердіть пароль',
        'auth.signInButton': 'Увійти',
        'auth.signUpButton': 'Зареєструватися',
        'auth.noAccount': 'Немає облікового запису?',
        'auth.hasAccount': 'Вже є обліковий запис?',
        'auth.signUpLink': 'Зареєструйтеся',
        'auth.signInLink': 'Увійдіть',

        // GreetingPage
        'greeting.title': 'Вітаємо в світі фінансових пригод! 🎉',
        'greeting.intro': 'Привіт! Я твій помічник у пригоді фінансової грамотності. Разом ми навчимось правильно розпоряджатися грошима, робити розумні фінансові рішення та досягати своїх цілей!',
        'greeting.ready': 'Готовий розпочати пригоду?',
        'greeting.start': 'Почати',

        // MoneyCity
        'moneyCity.title': '🏙️ Місто Грошей',
        'moneyCity.welcome': 'Привіт! Я Фінансик 💎, твій особистий помічник у світі фінансів! ⚖️ Вітаю тебе у Місті Грошей - чарівному місці, де дитячі мрії стають реальністю! 🎉',
        'moneyCity.chooseGoal': 'Вибери свою мрію:',
        'moneyCity.robot': '🤖 Робот-трансформер (500 монет)',
        'moneyCity.bike': '🚲 Велосипед (1000 монет)',
        'moneyCity.computer': '💻 Ігровий комп\'ютер (2000 монет)',

        // Levels
        'level1.title': 'Рівень 1: Кишенькові гроші',
        'level1.intro': 'Це твій перший рівень! Давай навчимося правильно розпоряджатися кишеньковими грошима.',
        'level1.next': 'Перейти до сценарію',

        'level2.title': 'Рівень 2: Покупки',
        'level2.intro': 'Тепер давай навчимося робити розумні покупки!',
        'level2.next': 'Перейти до сценарію',

        'level3.title': 'Рівень 3: Заощадження',
        'level3.intro': 'Важливо вміти заощаджувати гроші. Давай навчимося цьому!',
        'level3.next': 'Перейти до сценарію',

        'level4.title': 'Рівень 4: Важливі рішення',
        'level4.intro': 'Іноді потрібно приймати важливі фінансові рішення. Ти готовий?',
        'level4.next': 'Перейти до сценарію',

        'level5.title': 'Рівень 5: Перший бізнес',
        'level5.intro': 'Настав час спробувати створити свій перший бізнес!',
        'level5.next': 'Перейти до сценарію',

        // Level 1 Scenario
        'level1scenario.title': '💰 Сценарій: Кишенькові гроші',
        'level1scenario.question': 'Ти отримав 50 монет кишенькових грошей на тиждень. Друзі пропонують піти разом до парку розваг. Що ти зробиш?',
        'level1scenario.choice1': '💎 Не витрачати гроші зараз',
        'level1scenario.choice2': '🎮 Витратити половину',
        'level1scenario.choice3': '🎨 Витратити все',
        'level1scenario.message1': '🎉 Чудово! Ти зберіг всі свої монети. Це мудре рішення!',
        'level1scenario.message2': '👍 Добре! Ти витратив частину грошей, але залишив трохи на потім.',
        'level1scenario.message3': '😔 Ти витратив усі гроші. Це було весело, але тепер у тебе нічого не залишилося.',
        'level1scenario.advice1': '💡 Порада: Завжди добре мати заощадження на непередбачені випадки!',
        'level1scenario.advice2': '💡 Порада: Добре, що ти насолодився з друзями, але спробуй заощаджувати трохи більше!',
        'level1scenario.advice3': '💡 Порада: У наступний раз спробуй витратити менше та заощадити трохи грошей!',

        // Level 2 Scenario
        'level2scenario.title': '🛒 Сценарій: Покупки',
        'level2scenario.question': 'Тобі потрібна нова футболка. Ти маєш 100 монет. Де ти купиш футболку?',
        'level2scenario.choice1': '❌ Не купувати зараз',
        'level2scenario.choice2': '🏪 На ринку (50 монет)',
        'level2scenario.choice3': '👕 У магазині брендового одягу (100 монет)',
        'level2scenario.message1': '🤔 Ти вирішив не купувати зараз. Можливо, пізніше знайдеш кращу пропозицію!',
        'level2scenario.message2': '👍 Відмінно! Ти купив футболку за доступною ціною і заощадив 50 монет!',
        'level2scenario.message3': '😐 Ти витратив усі гроші на брендову футболку. Вона гарна, але дорога.',
        'level2scenario.advice1': '💡 Порада: Іноді краще зачекати та знайти гарну пропозицію!',
        'level2scenario.advice2': '💡 Порада: Розумно шукати якісні речі за доступною ціною!',
        'level2scenario.advice3': '💡 Порада: Не завжди бренд означає кращу якість. Можна знайти гарні речі дешевше!',

        // Level 3 Scenario
        'level3scenario.title': '🎂 Сценарій: День народження',
        'level3scenario.question': 'На день народження ти отримав конверт з 200 монетами. Що ти зробиш з грошима?',
        'level3scenario.choice1': '💰 Заощадити все',
        'level3scenario.choice2': '🎁 Заощадити більшу частину (заощадити 160 монет)',
        'level3scenario.choice3': '🎮 Заощадити меншу частину (заощадити 120 монет)',
        'level3scenario.message1': '⭐ Вау! Ти заощадив усі гроші. Це чудово!',
        'level3scenario.message2': '👍 Добре! Ти заощадив більшу частину грошей.',
        'level3scenario.message3': '😊 Ти заощадив меншу частину. Краще, ніж нічого!',
        'level3scenario.advice1': '💡 Порада: Відмінна звичка заощаджувати гроші!',
        'level3scenario.advice2': '💡 Порада: Ти знаходиш баланс між витратами та заощадженнями!',
        'level3scenario.advice3': '💡 Порада: Спробуй заощаджувати трохи більше в наступний раз!',

        // Level 4 Scenario
        'level4scenario.title': '💥 Сценарій: Зламаний телефон',
        'level4scenario.question': 'Твій іграшковий телефон зламався. Ремонт коштує 80 монет, новий - 150 монет. У тебе є 150 монет. Що ти зробиш?',
        'level4scenario.choice1': '⏰ Зачекати і заощадити більше',
        'level4scenario.choice2': '🔧 Відремонтувати старий (80 монет)',
        'level4scenario.choice3': '📱 Купити новий (150 монет)',
        'level4scenario.message1': '🤔 Ти вирішив зачекати. Іноді це найкраще рішення!',
        'level4scenario.message2': '👍 Розумно! Ти відремонтував телефон і заощадив 70 монет!',
        'level4scenario.message3': '😐 Ти купив новий телефон і витратив усі гроші.',
        'level4scenario.advice1': '💡 Порада: Терпіння може допомогти прийняти краще рішення!',
        'level4scenario.advice2': '💡 Порада: Ремонт часто дешевший за покупку нового!',
        'level4scenario.advice3': '💡 Порада: Подумай, чи справді потрібна нова річ, чи можна відремонтувати стару!',

        // Level 5 Scenario
        'level5scenario.title': '💼 Сценарій: Перший бізнес',
        'level5scenario.question': 'Ти вирішив створити свій перший бізнес! Вибери, що ти будеш продавати:',
        'level5scenario.choice1': '📿 Браслети ручної роботи',
        'level5scenario.choice2': '🍪 Домашнє печиво',
        'level5scenario.choice3': '🪴 Рослини',
        'level5scenario.info': 'Витрати: {cost} | Час: {time} | Ризик: {risk}',
        'level5scenario.message1': '🎨 Ти обрав браслети! Це творчий бізнес з невеликими витратами.',
        'level5scenario.message2': '🍪 Ти обрав печиво! Смачний бізнес, який подобається всім!',
        'level5scenario.message3': '🌱 Ти обрав рослини! Екологічний бізнес, який потребує терпіння.',
        'level5scenario.advice1': '💡 Порада: Творчі бізнеси можуть бути дуже прибутковими!',
        'level5scenario.advice2': '💡 Порада: Харчовий бізнес завжди має попит!',
        'level5scenario.advice3': '💡 Порада: Рослинний бізнес потребує часу, але може бути дуже прибутковим!',

        // GoalNotAchieved
        'goalNotAchieved.title': '😔 Мета не досягнута',
        'goalNotAchieved.subtitle': 'Не засмучуйся! Це чудовий досвід. Давай проаналізуємо твої рішення:',
        'goalNotAchieved.yourChoices': 'Твої вибори:',
        'goalNotAchieved.level': 'Рівень',
        'goalNotAchieved.notSelected': 'Не вибрано',
        'goalNotAchieved.tryAgain': 'Спробувати ще раз',

        // Behavior types
        'behavior.impulsive': 'Імпульсивний',
        'behavior.economic': 'Економний',
        'behavior.strategic': 'Стратегічний',
        'behavior.mixed': 'Змішаний',

        // Choices text
        'choice.level1.notWasteMoney': 'Не витрачати гроші зараз 💎',
        'choice.level1.wasteHalfMoney': 'Витратити половину 🎮',
        'choice.level1.wasteAllMoney': 'Витратити все 🎨',
        
        'choice.level2.notBuy': 'Не купувати зараз ❌',
        'choice.level2.marketplace': 'Купити на ринку 🏪',
        'choice.level2.professional': 'Купити в брендовому магазині 👕',
        
        'choice.level3.saveAll': 'Заощадити все 💰',
        'choice.level3.save80': 'Заощадити більшу частину 🎁',
        'choice.level3.save40': 'Заощадити меншу частину 🎮',
        
        'choice.level4.postpone': 'Зачекати і заощадити більше ⏰',
        'choice.level4.repair': 'Відремонтувати старий 🔧',
        'choice.level4.buyNew': 'Купити новий 📱',
        
        'choice.level5.bracelets': 'Браслети ручної роботи 📿',
        'choice.level5.cookies': 'Домашнє печиво 🍪',
        'choice.level5.flowers': 'Рослини 🪴',

        // Toast messages
        'toast.alreadyChosen': 'Ти вже обрав цей варіант!',
        'toast.choiceAlreadyMade': 'Вибір вже зроблено!',
    },
    fr: {
        // Common
        'back': 'Retour',
        'next': 'Suivant',
        'continue': 'Continuer',
        'start': 'Commencer',
        'loading': 'Chargement...',

        // HomePage
        'home.title': '🎮 Aventure Financière',
        'home.newGame': 'Nouvelle partie',
        'home.continueGame': 'Continuer la partie',

        // Auth
        'auth.signIn': 'Connexion',
        'auth.signUp': 'Inscription',
        'auth.email': 'Email',
        'auth.password': 'Mot de passe',
        'auth.confirmPassword': 'Confirmer le mot de passe',
        'auth.signInButton': 'Se connecter',
        'auth.signUpButton': 'S\'inscrire',
        'auth.noAccount': 'Pas de compte?',
        'auth.hasAccount': 'Déjà un compte?',
        'auth.signUpLink': 'Inscrivez-vous',
        'auth.signInLink': 'Connectez-vous',

        // GreetingPage
        'greeting.title': 'Bienvenue dans le monde des aventures financières! 🎉',
        'greeting.intro': 'Salut! Je suis ton assistant dans l\'aventure de la littératie financière. Ensemble, nous apprendrons à gérer l\'argent correctement, à prendre des décisions financières intelligentes et à atteindre tes objectifs!',
        'greeting.ready': 'Prêt à commencer l\'aventure?',
        'greeting.start': 'Commencer',

        // MoneyCity
        'moneyCity.title': '🏙️ Ville de l\'Argent',
        'moneyCity.welcome': 'Salut! Je suis Finansik 💎, ton assistant personnel dans le monde des finances! ⚖️ Bienvenue à la Ville de l\'Argent - un endroit magique où les rêves d\'enfants deviennent réalité! 🎉',
        'moneyCity.chooseGoal': 'Choisis ton rêve:',
        'moneyCity.robot': '🤖 Robot transformeur (500 pièces)',
        'moneyCity.bike': '🚲 Vélo (1000 pièces)',
        'moneyCity.computer': '💻 Ordinateur de jeu (2000 pièces)',

        // Levels
        'level1.title': 'Niveau 1: Argent de poche',
        'level1.intro': 'C\'est ton premier niveau! Apprenons à gérer correctement l\'argent de poche.',
        'level1.next': 'Aller au scénario',

        'level2.title': 'Niveau 2: Achats',
        'level2.intro': 'Maintenant, apprenons à faire des achats intelligents!',
        'level2.next': 'Aller au scénario',

        'level3.title': 'Niveau 3: Économies',
        'level3.intro': 'Il est important de savoir économiser de l\'argent. Apprenons cela!',
        'level3.next': 'Aller au scénario',

        'level4.title': 'Niveau 4: Décisions importantes',
        'level4.intro': 'Parfois, il faut prendre des décisions financières importantes. Es-tu prêt?',
        'level4.next': 'Aller au scénario',

        'level5.title': 'Niveau 5: Premier business',
        'level5.intro': 'Il est temps d\'essayer de créer ton premier business!',
        'level5.next': 'Aller au scénario',

        // Level 1 Scenario
        'level1scenario.title': '💰 Scénario: Argent de poche',
        'level1scenario.question': 'Tu as reçu 50 pièces d\'argent de poche pour la semaine. Des amis proposent d\'aller ensemble au parc d\'attractions. Que feras-tu?',
        'level1scenario.choice1': '💎 Ne pas dépenser maintenant',
        'level1scenario.choice2': '🎮 Dépenser la moitié',
        'level1scenario.choice3': '🎨 Tout dépenser',
        'level1scenario.message1': '🎉 Excellent! Tu as gardé toutes tes pièces. C\'est une décision sage!',
        'level1scenario.message2': '👍 Bien! Tu as dépensé une partie de l\'argent, mais tu en as gardé un peu pour plus tard.',
        'level1scenario.message3': '😔 Tu as dépensé tout l\'argent. C\'était amusant, mais maintenant tu n\'as plus rien.',
        'level1scenario.advice1': '💡 Conseil: C\'est toujours bon d\'avoir des économies pour les imprévus!',
        'level1scenario.advice2': '💡 Conseil: C\'est bien que tu te sois amusé avec tes amis, mais essaie d\'économiser un peu plus!',
        'level1scenario.advice3': '💡 Conseil: La prochaine fois, essaie de dépenser moins et d\'économiser un peu d\'argent!',

        // Level 2 Scenario
        'level2scenario.title': '🛒 Scénario: Achats',
        'level2scenario.question': 'Tu as besoin d\'un nouveau t-shirt. Tu as 100 pièces. Où achèteras-tu le t-shirt?',
        'level2scenario.choice1': '❌ Ne pas acheter maintenant',
        'level2scenario.choice2': '🏪 Au marché (50 pièces)',
        'level2scenario.choice3': '👕 Dans un magasin de marque (100 pièces)',
        'level2scenario.message1': '🤔 Tu as décidé de ne pas acheter maintenant. Peut-être trouveras-tu une meilleure offre plus tard!',
        'level2scenario.message2': '👍 Excellent! Tu as acheté le t-shirt à un prix abordable et économisé 50 pièces!',
        'level2scenario.message3': '😐 Tu as dépensé tout ton argent sur un t-shirt de marque. Il est beau, mais cher.',
        'level2scenario.advice1': '💡 Conseil: Parfois, il vaut mieux attendre et trouver une bonne offre!',
        'level2scenario.advice2': '💡 Conseil: C\'est intelligent de chercher des articles de qualité à prix abordable!',
        'level2scenario.advice3': '💡 Conseil: La marque ne signifie pas toujours une meilleure qualité. On peut trouver de bonnes choses moins chères!',

        // Level 3 Scenario
        'level3scenario.title': '🎂 Scénario: Anniversaire',
        'level3scenario.question': 'Pour ton anniversaire, tu as reçu une enveloppe avec 200 pièces. Que feras-tu avec l\'argent?',
        'level3scenario.choice1': '💰 Tout économiser',
        'level3scenario.choice2': '🎁 Économiser la plus grande partie (économiser 160 pièces)',
        'level3scenario.choice3': '🎮 Économiser la plus petite partie (économiser 120 pièces)',
        'level3scenario.message1': '⭐ Wow! Tu as économisé tout l\'argent. C\'est fantastique!',
        'level3scenario.message2': '👍 Bien! Tu as économisé la plus grande partie de l\'argent.',
        'level3scenario.message3': '😊 Tu as économisé la plus petite partie. C\'est mieux que rien!',
        'level3scenario.advice1': '💡 Conseil: Excellente habitude d\'économiser de l\'argent!',
        'level3scenario.advice2': '💡 Conseil: Tu trouves un équilibre entre les dépenses et les économies!',
        'level3scenario.advice3': '💡 Conseil: Essaie d\'économiser un peu plus la prochaine fois!',

        // Level 4 Scenario
        'level4scenario.title': '💥 Scénario: Téléphone cassé',
        'level4scenario.question': 'Ton téléphone jouet est cassé. La réparation coûte 80 pièces, un nouveau - 150 pièces. Tu as 150 pièces. Que feras-tu?',
        'level4scenario.choice1': '⏰ Attendre et économiser plus',
        'level4scenario.choice2': '🔧 Réparer l\'ancien (80 pièces)',
        'level4scenario.choice3': '📱 Acheter un nouveau (150 pièces)',
        'level4scenario.message1': '🤔 Tu as décidé d\'attendre. Parfois, c\'est la meilleure décision!',
        'level4scenario.message2': '👍 Intelligent! Tu as réparé le téléphone et économisé 70 pièces!',
        'level4scenario.message3': '😐 Tu as acheté un nouveau téléphone et dépensé tout ton argent.',
        'level4scenario.advice1': '💡 Conseil: La patience peut aider à prendre une meilleure décision!',
        'level4scenario.advice2': '💡 Conseil: La réparation est souvent moins chère que l\'achat d\'un nouveau!',
        'level4scenario.advice3': '💡 Conseil: Réfléchis si tu as vraiment besoin d\'une nouvelle chose ou si tu peux réparer l\'ancienne!',

        // Level 5 Scenario
        'level5scenario.title': '💼 Scénario: Premier business',
        'level5scenario.question': 'Tu as décidé de créer ton premier business! Choisis ce que tu vendras:',
        'level5scenario.choice1': '📿 Bracelets faits main',
        'level5scenario.choice2': '🍪 Biscuits maison',
        'level5scenario.choice3': '🪴 Plantes',
        'level5scenario.info': 'Coûts: {cost} | Temps: {time} | Risque: {risk}',
        'level5scenario.message1': '🎨 Tu as choisi les bracelets! C\'est un business créatif avec de faibles coûts.',
        'level5scenario.message2': '🍪 Tu as choisi les biscuits! Un délicieux business que tout le monde aime!',
        'level5scenario.message3': '🌱 Tu as choisi les plantes! Un business écologique qui nécessite de la patience.',
        'level5scenario.advice1': '💡 Conseil: Les business créatifs peuvent être très rentables!',
        'level5scenario.advice2': '💡 Conseil: Le business alimentaire a toujours une demande!',
        'level5scenario.advice3': '💡 Conseil: Le business de plantes prend du temps, mais peut être très rentable!',

        // GoalNotAchieved
        'goalNotAchieved.title': '😔 Objectif non atteint',
        'goalNotAchieved.subtitle': 'Ne sois pas triste! C\'est une excellente expérience. Analysons tes décisions:',
        'goalNotAchieved.yourChoices': 'Tes choix:',
        'goalNotAchieved.level': 'Niveau',
        'goalNotAchieved.notSelected': 'Non sélectionné',
        'goalNotAchieved.tryAgain': 'Réessayer',

        // Behavior types
        'behavior.impulsive': 'Impulsif',
        'behavior.economic': 'Économe',
        'behavior.strategic': 'Stratégique',
        'behavior.mixed': 'Mixte',

        // Choices text
        'choice.level1.notWasteMoney': 'Ne pas dépenser maintenant 💎',
        'choice.level1.wasteHalfMoney': 'Dépenser la moitié 🎮',
        'choice.level1.wasteAllMoney': 'Tout dépenser 🎨',
        
        'choice.level2.notBuy': 'Ne pas acheter maintenant ❌',
        'choice.level2.marketplace': 'Acheter au marché 🏪',
        'choice.level2.professional': 'Acheter dans un magasin de marque 👕',
        
        'choice.level3.saveAll': 'Tout économiser 💰',
        'choice.level3.save80': 'Économiser la plus grande partie 🎁',
        'choice.level3.save40': 'Économiser la plus petite partie 🎮',
        
        'choice.level4.postpone': 'Attendre et économiser plus ⏰',
        'choice.level4.repair': 'Réparer l\'ancien 🔧',
        'choice.level4.buyNew': 'Acheter un nouveau 📱',
        
        'choice.level5.bracelets': 'Bracelets faits main 📿',
        'choice.level5.cookies': 'Biscuits maison 🍪',
        'choice.level5.flowers': 'Plantes 🪴',

        // Toast messages
        'toast.alreadyChosen': 'Tu as déjà choisi cette option!',
        'toast.choiceAlreadyMade': 'Le choix est déjà fait!',
    }
};

// For backward compatibility
export const gameTexts = translations.uk;
