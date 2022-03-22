export interface IMenuItem {
  id: number;
  title: string;
  url: string;
  icon?: string;
  open?: boolean;
  active?: boolean;
  openCollapsedSubmenu?: boolean;
  children?: Array<IMenuItem>;
  parent?: IMenuItem;
}

export const leftMenuConfig: IMenuItem[] = [
  {
    id: 66,
    title: 'Promotions',
    url: 'promotions',
    icon: 'icon__sale_24',
  },
  // {
  //   id: 15,
  //   title: 'Клиенты',
  //   icon: 'spro-icon__people',
  //   url: 'clients',
  // },
  // {
  //   id: 2,
  //   title: 'Цифровой каталог',
  //   icon: 'spro-icon__local-activity',
  //   url: 'catalog',
  //   children: [
  //     {
  //       id: 3,
  //       title: 'Настройка дерева',
  //       url: 'catalog/trees',
  //     },
  //     {
  //       id: 4,
  //       title: 'Настройка категорий',
  //       url: 'catalog/category-dashboard',
  //     },
  //     {
  //       id: 5,
  //       title: 'Настройка брендов',
  //       url: 'catalog/brands-dashboard',
  //     },
  //     {
  //       id: 6,
  //       title: 'Настройка ассортимента',
  //       url: 'catalog/assortment-dashboard',
  //     },
  //   ],
  // },
  // {
  //   id: 13,
  //   title: 'Маркетинговые кампании',
  //   icon: 'spro-icon__campaign',
  //   url: 'campaigns',
  // },
  // {
  //   id: 66,
  //   title: 'Маркетинговые активности',
  //   url: 'marketing-activities',
  //   icon: 'spro-icon__sale',
  //   children: [
  //     {
  //       id: 66,
  //       title: 'Акции',
  //       url: 'marketing-activities/promotions',
  //     },
  //   ],
  // },
  // {
  //   id: 14,
  //   title: 'Программы лояльности',
  //   icon: 'spro-icon__sell',
  //   url: 'loyalty',
  //   children: [
  //     {
  //       id: 66,
  //       title: 'Баллы',
  //       url: 'loyalty/bonus-points',
  //       children: [
  //         {
  //           id: 67,
  //           title: 'Настройка правил',
  //           url: 'loyalty/bonus-points/rules-list/accumulate',
  //         },
  //         {
  //           id: 68,
  //           title: 'Транзакции',
  //           url: 'loyalty/bonus-points/transactions',
  //         },
  //       ],
  //     },
  //     {
  //       id: 12,
  //       title: 'Промокоды',
  //       url: 'loyalty/promo-codes',
  //     },
  //     {
  //       id: 11,
  //       title: 'Купоны',
  //       url: 'loyalty/coupons',
  //     },
  //   ],
  // },
  // {
  //   id: 66,
  //   title: 'Контент',
  //   url: 'content',
  //   icon: 'spro-icon__text-box',
  // },
  // {
  //   id: 7,
  //   title: 'Справочники',
  //   icon: 'spro-icon__menu-book',
  //   url: 'directories',
  //   children: [
  //     {
  //       id: 8,
  //       title: 'Справочник языков',
  //       url: 'directories/languages',
  //     },
  //     {
  //       id: 9,
  //       title: 'Справочник типов атрибута',
  //       url: 'directories/attributes-types',
  //     },
  //     {
  //       id: 10,
  //       title: 'Справочник атрибутов и значений',
  //       url: 'directories/attributes-and-values',
  //     },
  //     {
  //       id: 11,
  //       title: 'Карты лояльности',
  //       url: 'directories/loyalty-cards',
  //     },
  //   ],
  // },
  // {
  //   id: 66,
  //   title: 'Помощь',
  //   icon: 'arm-icon__help-center_20',
  //   url: 'help',
  // },
];
