const request = require('supertest');
const index = require('../index');

describe('Fickr API', () => {
    it('GET /feeds -> array todos', () => {
        return request(index)
        .get('/api/fickr/feeds')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        title: expect.any(String),
                        link: expect.any(String),
                        media: expect.any(Object),
                        date_taken: expect.any(String),
                        description: expect.any(String),
                        published: expect.any(String),
                        author: expect.any(String),
                        author_id: expect.any(String),
                        tags: expect.any(String),
                    })
                ])
            )
        })
    });
    
    it('GET /feeds/tag -> array todos by tag', () => {
         return request(index)
        .get('/api/fickr/feeds/tag')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        title: expect.any(String),
                        link: expect.any(String),
                        media: expect.any(Object),
                        date_taken: expect.any(String),
                        description: expect.any(String),
                        published: expect.any(String),
                        author: expect.any(String),
                        author_id: expect.any(String),
                        tags: expect.any(String),
                    })
                ])
            )
        })
    });
    
    it('GET /feeds/tag -> 404 if tag feeds not found', () => {
        return request(index)
        .get('/feeds/99999999999')
        .expect(404);
    });
});
