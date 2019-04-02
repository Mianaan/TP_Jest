const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn(),    //get repo
            push : jest.fn(),   //push book
            write : jest.fn()   //write in db
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        //Book is save 1 time
        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository Get Total Items', function () {
    test('get total books', () => {
        let dbMock = {
            get : jest.fn(),
            size : jest.fn(),    //get books
            value : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock)
        dbMock.size.mockReturnValue(dbMock)
        dbMock.value.mockReturnValue(dbMock)

        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(dbMock);

        //Count is execute 1 time
        expect(dbMock.size.mock.calls.length).toBe(1);

    });
});

