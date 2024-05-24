/*
Задание 1

Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
*/

'use strict';

class Library {
    #books = [];

    //конструктор
    constructor(listOfBooks) {
        try {
            if (listOfBooks.length === 0) {
                throw new Error('Вы не передали книги в библиотеку!');
            } else {
                listOfBooks.forEach(book => {
                    if (this.#books.includes(book)) {
                        throw new Error(`В списке книг есть дубликаты: "${book}"!`);
                    } else {
                        this.#books.push(book);
                        return this.#books;
                    }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    //возвращает текущий список книг
    get allBooks() {
        return this.#books;
    }

    //добавление книги
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(`Книга с названием "${title}" уже существует в списке!`);
            } else {
                this.#books.push(title);
                return this.#books;
            }
        } catch (error) {
            console.error(error);
        }
    }

    //удаление книги
    removeBook(title) {
        try {
            if (this.#books.includes(title)) {
                this.#books = this.#books.filter(bookTitle => bookTitle !== title);
                console.log(`Обновленный список книг: ${this.#books}`);
                return this.#books;
            } else {
                throw new Error(`Книги с названием "${title}" нет в списке!`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    //проверка наличия книги в библиотеке
    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } else {
            return false;
        }
    }
}
const library = new Library(["Война и мир", "Моабитская тетрадь","Белые цветы"]);
console.log(library.allBooks);

// console.log(library.addBook("Моабитская тетрадь"));
// console.log(library.addBook("Шурале"));


// console.log(library.removeBook("Идиот"));
// console.log(library.removeBook("Шурале"));
// console.log(library.removeBook("Моабитская тетрадь"));

// console.log(library.hasBook("Шахматы"));
// console.log(library.hasBook("Моабитская тетрадь"));
// console.log(library.hasBook("Война и мир"));
// console.log(library.hasBook("Белые цветы"));