// ========= LEVEL RULES IMPLEMENTED EXACTLY AS YOU DESCRIBED =========

// Return null = the branch stops (cannot proceed)

const levels = [

  // ================= LEVEL 1 (КИШЕНЬКОВІ ГРОШІ) =================
  // Гравець отримує 100 монет кишенькових
  (money) => [
    money,                               // 1. "Не витрачати" → залишається 100 монет
    money >= 50 ? money - 50 : money,    // 2. "Купити солодощі за 50" → залишається 50 монет
    null                                 // 3. "Витратити все" → перезапуск рівня
  ],

  // ================= LEVEL 2 (ХОБІ МАТЕРІАЛИ) =================
  // У гравця є 50-100 монет після Level 1 (100 якщо не витратив, 50 якщо витратив половину)
  (money) => [
    money,                               // 1. "Не купувати" → гроші не змінюються
    money >= 10 ? money - 10 : money,    // 2. "Купити на маркетплейсі за 10 монет" → -10
    money >= 20 ? money - 20 : money     // 3. "Купити в магазині за 20 монет" → -20
  ],

  // =========== LEVEL 3 BIRTHDAY (ДЕНЬ НАРОДЖЕННЯ) ===========
  // У гравця є 30-100 монет після Level 2 (мінімум 50-20=30, максимум 100)
  // Отримує подарунок 140-160 монет (випадково: 160, 150 або 140)
  (money) => {
    const gifts = [160, 150, 140];  // Випадкові подарунки від родичів
    let results = [];
    for (const gift of gifts) {
      results.push(
        money + gift,                    // 1. "Відкласти всі гроші" → +160/150/140 монет
        money + Math.floor(gift * 0.8),  // 2. "Відкласти 80%, витратити 20%" → +128/120/112
        money + Math.floor(gift * 0.5)   // 3. "Відкласти 50%, витратити 50%" → +80/75/70
      );
    }
    return results;
  },

  // ================= LEVEL 4 (РЕМОНТ ПЛАНШЕТА) =================
  // У гравця є 100-260 монет після Birthday (мінімум 30+70=100, максимум 100+160=260)
  (money) => [
    money,                               // 1. "Не робити нічого" → гроші не змінюються
    money >= 10 ? money - 10 : money,    // 2. "Полагодити за 10 монет" → -10
    money >= 25 ? money - 25 : money     // 3. "Купити новий за 25 монет" → -25
  ],

  // ================= LEVEL 5 (ЗАРОБІТОК) =================
  // У гравця є 75-260 монет після Level 4 (мінімум 100-25=75, максимум 260)
  (money) => [
    money + 15,                          // 1. "Браслети: витрати 15, прибуток 30" → +15
    money >= 25 ? money + 30 : money,    // 2. "Печиво: витрати 25, прибуток 55" → +30 (якщо є 25)
    money >= 40 ? money - 5 : money      // 3. "Квіти: витрати 40, прибуток 35" → -5 (якщо є 40)
  ],

  // ================= LEVEL 6 (ТИМЧАСОВО ВИМКНЕНО) =================
  // Level 6 закоментовано - гра тепер має 5 рівнів
  // Цільовий діапазон: MIN 80 - MAX 280 монет

];

// ========= SIMULATOR =========

function simulate(startMoney) {
  let paths = [startMoney];

  for (const lvl of levels) {
    let nextPaths = [];

    for (const money of paths) {
      const results = lvl(money);

      for (const m of results) {
        if (m !== null && m !== undefined) {
          nextPaths.push(m);
        }
      }
    }

    paths = nextPaths;  // go to next level
  }

  const unique = Array.from(new Set(paths)).sort((a,b)=>a-b);
  return {
    totalPaths: paths.length,
    uniquePaths: unique.length,
    endResults: unique,
    min: unique[0],
    max: unique[unique.length - 1]
  };
}

// ========= RUN =========

const result = simulate(100);  // початкова сума 100 монет

console.log("Total possible end states:", result.totalPaths);
console.log("Unique final balances:", result.uniquePaths);
console.log("Possible balances:", result.endResults);
console.log("MIN:", result.min, "MAX:", result.max);