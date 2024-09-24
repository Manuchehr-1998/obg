### Задача: Управление корзиной одного товара

**Описание**:  
Создайте объект `shoppingCart`, который представляет корзину покупок в интернет-магазине. У корзины есть свойства для хранения названия товара, его цены и количества. Добавьте методы для обновления информации о товаре, сброса корзины, расчета общей стоимости и отображения информации о товаре.

1. Создайте объект `shoppingCart` с тремя свойствами:
    - `itemName` — название товара.
    - `itemPrice` — цена товара.
    - `itemQuantity` — количество товара.

2. Добавьте методы:
    - `updateItem(name, price, quantity)` — обновляет информацию о товаре в корзине.
    - `resetItem()` — сбрасывает корзину, удаляя текущий товар.
    - `getTotal()` — возвращает общую стоимость товара.
    - `displayCart()` — выводит информацию о товаре в корзине.

### Входные данные:
- Название товара, его цена и количество.

### Ожидаемый результат:
- Информация о товаре успешно обновляется и сбрасывается, вычисляется его стоимость, и информация о товаре корректно отображается.

### Пример использования:

```javascript
// Пример использования объекта и методов
shoppingCart.updateItem('Ноутбук', 999.99, 1);
shoppingCart.displayCart();
// Ожидаемый вывод:
// Товар обновлен: Ноутбук, количество: 1, цена: 999.99
// Товар: Ноутбук, количество: 1, цена: 999.99

console.log(`Общая стоимость: $${shoppingCart.getTotal()}`); // Ожидаемый вывод: Общая стоимость: $999.99

shoppingCart.resetItem();
shoppingCart.displayCart(); // Ожидаемый вывод: Корзина пуста.