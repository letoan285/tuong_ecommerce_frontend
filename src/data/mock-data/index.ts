export interface IMockData {
    id: number;
    name: string;
    category_id: number;
    isSale?: boolean;
    price: number;
    src: string;
    sale?: number;
    isNew?: boolean;
}
export const mockData: IMockData[] = [
    {id: 1, name: 'Men were', category_id: 1, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'},
    {id: 2, name: 'Men were', category_id: 1, isNew: true, isSale: true,sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_2.jpg'},
    {id: 3, name: 'Men were', category_id: 3, isNew: false, isSale: false, sale: 0, price: 120, src: 'assets/images/products/tools_equipment_3.jpg'},
    {id: 4, name: 'Men were', category_id: 3, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_4.jpg'},
    {id: 5, name: 'Men were', category_id: 2, isNew: false, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_5.jpg'},
    {id: 6, name: 'Men were', category_id: 4, isNew: true, isSale: false, sale: 0, price: 120, src: 'assets/images/products/tools_equipment_6.jpg'},
    {id: 7, name: 'Men were', category_id: 2, isNew: false, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_7.jpg'},
    {id: 8, name: 'Men were', category_id: 3, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_8.jpg'},
    {id: 9, name: 'Men were', category_id: 1, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'},
    {id: 10, name: 'Men were', category_id: 2, isNew: false, isSale: false, sale: 0, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'},
    {id: 11, name: 'Men were', category_id: 3, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'},
    {id: 12, name: 'Men were', category_id: 4, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'},
    {id: 13, name: 'Men were', category_id: 2, isNew: false, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'},
    {id: 14, name: 'Men were', category_id: 1, isNew: true, isSale: true, sale: 0.2, price: 120, src: 'assets/images/products/tools_equipment_1.jpg'}
];

export const categories = [
    {id: 1, name: 'Electronics', link: '/', children: [{id: 1, name: 'Batteries & Chargens', link: '/'}, {id: 2, name: 'Batteries & Other', link: '/'}]},
    {id: 2, name: 'Smartphone & Table', link: '/', children: [
            {id: 1, name: 'Mp3 Player & Acessories', link: '/'},
            {id: 2, name: 'Mobile and Accessories', link: '/'}
        ]
    }
];